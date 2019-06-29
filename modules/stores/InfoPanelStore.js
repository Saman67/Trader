import assign from 'object-assign'
import { EventEmitter } from 'events'
import Socket from '../utils/socket'
import ActionType from '../components/info_panel/ActionType'

var CHANGE_EVENT = 'info_panel_change';
var panel = {
    currentViewType: '',
    viewsData: {}
};

var infoPanelStore = assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    switchPanel(type, data) {
        if(type) {
            panel.currentViewType = type;
            if (data)
                panel.viewsData[type] = data;
            this.emitChange();
        }
    },
    getPanelData() {
        return {
            type: panel.currentViewType,
            data: panel.viewsData[panel.currentViewType]
        };
    },
    requestChannelMembers(channelId) {
        if(channelId)
            Socket.sendMessage('channel_members_load', { channelId: channelId });
    },
    initSocket() {
        Socket.onMessage('channel_members_load', (data) => {
            if (data && data.members) {
                panel.viewsData[ActionType.Channel.CHANNEL_MEMBERS] = data.members;
                this.emitChange();
            }
        });
    }
});

infoPanelStore.initSocket();
export default infoPanelStore;