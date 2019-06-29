import assign from 'object-assign'
import { EventEmitter } from 'events'
import Socket from '../utils/socket'

var CHANGE_EVENT = 'change';
var channels = {};

var ChannelStore = assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    getAllChannelsInfo() {
        // Basic channel info (name, channelId, teamId, notification counts, ...)
        var data = [];
        for (var id in channels) {
            data.push({
                channelId: channels[id].id,
                name: channels[id].name,
                teamId: channels[id].teamId
            });
        }
        return data;
    },
    receiveChannel(channelId) {
        if (channelId && channels[channelId] && channels[channelId].messages)
            return channels[channelId];
        else {
            // Channel is not loaded, send request for this channel
            // Complete load request (messages, users, ...) for this channel
            Socket.sendMessage('channel_load', {channelId: channelId});
            return null;
        }
    },
    saveChannels(channelsData) {
        if (channelsData && channelsData.length) {
            channelsData.forEach((channel) => {
                if(!channels[channel.id])
                    channels[channel.id] = {};
                assign(channels[channel.id], channel);
            });
            this.emitChange();
        }
    },
    saveNewMessage(message) {
        if (channels[message.channelId]) {
            Socket.sendMessage('channel_message_new', {message: message});
            channels[message.channelId].messages =
                this.mergeMessages(channels[message.channelId].messages,[message]);
            this.emitChange();
        }
    },
    mergeMessages(a, b) {
        let t = {}, n = [];
        a.forEach(function (aa) {
            if(!t[aa.id]) {
                t[aa.id] = true;
                n.push(aa);
            }
        });
        b.forEach(function (bb) {
            if(!t[bb.id]) {
                t[bb.id] = true;
                n.push(bb);
            }
        });
        return n;
    },
    loadMessageHistory(channelId, lastMessageId) {
        Socket.sendMessage('channel_load', {
            channelId: channelId,
            index: lastMessageId
        });
    },
    initSocket() {
        // when user loads chat
        Socket.onMessage('channel_load', (msg) => {
            let channel = msg.channel;

            if(!channels[channel.id])
                channels[channel.id] = {};

            channel.messages = this.mergeMessages(msg.messages.reverse(), channels[channel.id].messages || []);
            channel.showLoader = (msg.messages.length >= 20);

            assign(channels[channel.id], channel);
            this.emitChange();
        });

        // When user receives message
        Socket.onMessage('channel_message_new', (msg) => {
            if (msg.message && msg.message.channelId) {
                channels[msg.message.channelId].messages =
                    this.mergeMessages(channels[msg.message.channelId].messages, [msg.message]);
            }
        });
    }
});

ChannelStore.initSocket();
export default ChannelStore;