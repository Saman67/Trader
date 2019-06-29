import assign from 'object-assign'
import { EventEmitter } from 'events'
import Dispatcher from '../dispatcher/Dispatcher'
import ActionTypes from '../dispatcher/ActionType'

var CHANGE_EVENT = 'header_change';
var header = {
    title: '',
    subTitle: '',
    about: ''
};

var HeaderStore = assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    receiveTitle() {
        return header.title;
    },
    receiveSubTitle() {
        return header.subTitle;
    },
    receiveAbout() {
        return header.about;
    },
    saveHeader(data) {
        if (header) {
            header.title = data.title || '';
            header.subTitle = data.subTitle || '';
            header.about = data.about || '';
            this.emitChange();
        }
    }
});

export default HeaderStore;