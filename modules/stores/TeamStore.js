import assign from 'object-assign'
import { EventEmitter } from 'events'
import dispatcher from '../dispatcher/Dispatcher'
import ActionTypes from '../dispatcher/ActionType'

var CHANGE_EVENT = 'change';
var teams = {};

var TeamStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    getTeam: function(id) {
        if(id && teams[id])
            return teams[id];
        return null;
    },
    getAllTeamsInfo() {
        var data = [];
        for(var id in teams) {
            data.push({
                teamId: teams[id].id,
                name: teams[id].name
            });
        }
        return data;
    },
    saveTeams(data) {
        data.forEach((team) => {
            if(!teams[team.id])
                teams[team.id] = team;
            else
                assign(teams[team.id], team);
        });
        this.emitChange();
    }
});

export default TeamStore;