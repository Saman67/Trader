import assign from 'object-assign'
import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/Dispatcher'
import ActionTypes from '../dispatcher/ActionType'

var CHANGE_EVENT = 'change';
var communities = {};

var CommunityStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    getCommunity: function(id) {
        if(id && communities[id])
            return communities[id];
        return null;
    },
    getAllCommunitiesInfo() {
        var data = [];
        for(var id in communities) {
            data.push({
                communityId: communities[id].communityId,
                name: communities[id].name
            });
        }
        return data;
    },
    SaveCommunities(data) {
        data.forEach((community) => {
            if(!communities[community.id])
                communities[community.id] = community;
            else
                assign(communities[community.id], community);
        });
        this.emitChange();
    },
    saveMessages(channelId, messages) {
        if (!communities[channelId])
            communities[channelId] = {};
        assign(communities[channelId].messages, messages);
        this.emitChange();
    }
});

export default CommunityStore;