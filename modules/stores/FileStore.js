import assign from 'object-assign'
import { EventEmitter } from 'events'
import Socket from '../utils/socket'
import Utils from '../utils/utils'

var FileStore = assign({
    CHANGE_DATA_EVENT: 'FS_DATA_CHANGE',
    directories: { },   // directories[folderId] = { name, path, items: { n:name, s:size, t:type, d:date} }
    downloadLinkQueue: {},
    uploadLinkQueue: {},
    callbacks: {}
}, EventEmitter.prototype, {
    addChangeListener(callback) {
        this.on(this.CHANGE_DATA_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(this.CHANGE_DATA_EVENT, callback);
    },
    getFolderData(folderPath, reload) {
        folderPath = Utils.getNormalizedPath(folderPath);
        if(this.directories[folderPath] && !reload)
            return this.directories[folderPath];
        else {
            var folderId = Utils.getLastDirectoryInPath(folderPath);
            Socket.sendMessage('fs_get_folder', { folderId });

            // Return temporary data until content of this folder is returned by socket
            return { folderName: '', parentPath: '', items: [] };
        }
    },
    getFilesByType(folderPath, type) {
        if (this.directories[folderPath] && type) {
            var files = [];
            this.directories[folderPath].items.forEach((item) => {
                if (item.t.startsWith(type))
                    files.push(item);
            });
            return files;
        }
        return [];
    },
    getDownloadUrl(fileId, callback) {
        if(fileId && callback)
        {
            this.downloadLinkQueue[fileId] = callback;
            return Socket.sendMessage('fs_get_download_url', {fileId});
        }
    },
    getUploadUrl() {
        return '/upload/file';
    },
    deleteFiles(itemIds, parentDirectory) {
        if(itemIds && itemIds.length)
            Socket.sendMessage('fs_delete_items', {itemIds, parentDirectory});
    },
    renameItem(itemId, itemName, callback) {
        if(itemId && itemName) {
            var callbackId = Utils.getRandomNumber();
            this.callbacks[callbackId] = callback;
            Socket.sendMessage('fs_rename_item', {itemId, itemName, callbackId});
        }
    },
    createFolder(parentFolderPath, callback) {
        if(parentFolderPath) {
            var callbackId;
            if(callback) {
                callbackId = Utils.getRandomNumber();
                this.callbacks[callbackId] = callback;
            }
            Socket.sendMessage('fs_create_folder', {parentFolderPath, callbackId});
        }
    },
    initSocket() {
        Socket.onMessage('fs_get_folder', (msg) => {
            if (msg.data && msg.data.parentPath) {
                msg.data.parentPath = Utils.getNormalizedPath(msg.data.parentPath);
                this.directories[msg.data.parentPath] = msg.data;
                this.emit(this.CHANGE_DATA_EVENT, msg.data.parentPath);
            }
        });
        Socket.onMessage('fs_get_download_url', (msg) => {
            if (msg.fileId && msg.link && this.downloadLinkQueue[msg.fileId]) {
                // msg.link = msg.link.replace('f001.backblazeb2.com', 'files.abcdapp.net');
                this.downloadLinkQueue[msg.fileId](msg.link, msg.fullName);
                delete this.downloadLinkQueue[msg.fileId];
            }
        });
        Socket.onMessage('fs_get_upload_url', (msg) => {
            if (msg.id && msg.url && msg.token && this.uploadLinkQueue[msg.id]) {
                this.uploadLinkQueue[msg.id](msg.url, msg.token);
                delete this.uploadLinkQueue[msg.id];
            }
        });
        Socket.onMessage('fs_delete_items', (msg) => {
            if (msg.parentDirectory) {
                this.getFolderData(msg.parentDirectory, true);
            }
        });
        Socket.onMessage('fs_rename_item', (msg) => {
            if (msg.parentDirectory) {
                // Remove cached sub directories
                Object.keys(this.directories).forEach((path)=> {
                    if (path.startsWith(msg.parentDirectory) && path.length > msg.parentDirectory.length)
                        delete this.directories[path];
                });

                // Reload current directory
                this.getFolderData(msg.parentDirectory, true);

                if (msg.callbackId && this.callbacks[msg.callbackId]) {
                    this.callbacks[msg.callbackId](msg.parentDirectory);
                    delete this.callbacks[msg.callbackId];
                }
            }
        });
        Socket.onMessage('fs_create_folder', (msg) => {
            if (msg.id && msg.folderPath && msg.name && msg.callbackId) {
                this.directories[msg.folderPath].items.push({
                    i: msg.id,
                    n: msg.name,
                    s: null,
                    t: 'directory',
                    d: new Date().toString()
                });
                this.emit(this.CHANGE_DATA_EVENT, msg.folderPath);

                this.callbacks[msg.callbackId]();
                delete this.callbacks[msg.callbackId];
            }
        });
    }
});

FileStore.initSocket();
export default FileStore;