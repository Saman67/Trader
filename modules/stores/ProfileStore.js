import assign from 'object-assign'
import { EventEmitter } from 'events'

var CHANGE_EVENT = 'profile_change';
var profile = {
    userId: null,
    firstName: null,
    lastName: null,
    fullName: null
};

var ProfileStore = assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    saveProfile(newProfile) {
        assign(profile, newProfile);
    },
    receiveProfile() {
        return profile;
    }
});

export default ProfileStore;