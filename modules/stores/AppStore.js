import assign from 'object-assign'
import { EventEmitter } from 'events'
import Dispatcher from '../dispatcher/Dispatcher'
import ActionTypes from '../dispatcher/ActionType'

var CHANGE_EVENT = 'app_change';
var app = {
    infoPanelIsOpen: false
};

var AppStore = assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    receiveInfoPanelStatus() {
        return app.infoPanelIsOpen;
    }
});

AppStore.dispatchToken = Dispatcher.register(function(action) {
    switch(action.type) {
        case ActionTypes.App.TOGGLE_INFO_PANEL_VIEW:
            app.infoPanelIsOpen = !app.infoPanelIsOpen;
            AppStore.emitChange();
            break;
        case ActionTypes.App.OPEN_INFO_PANEL_VIEW:
            app.infoPanelIsOpen = true;
            AppStore.emitChange();
            break;
        case ActionTypes.App.CLOSE_INFO_PANEL_VIEW:
            app.infoPanelIsOpen = false;
            AppStore.emitChange();
            break;
    }
});

export default AppStore;