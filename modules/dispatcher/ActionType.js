
import keyMirror from 'keymirror'

export default {
    User: keyMirror({
        SAVE_PROFILE: null
    }),

    Team: keyMirror({
        SAVE_TEAMS: null
    }),

    Channel: keyMirror({
        LOAD_CHANNEL: null,
        SAVE_CHANNELS: null,
        SAVE_CHANNEL_MESSAGES: null
    }),

    Community: keyMirror({
        SAVE_COMMUNITIES: null,
        SAVE_COMMUNITY_MESSAGES: null
    }),

    Header: keyMirror({
        SAVE_HEADER: null
    }),

    App: keyMirror({
        TOGGLE_INFO_PANEL_VIEW: null,
        OPEN_INFO_PANEL_VIEW: null,
        CLOSE_INFO_PANEL_VIEW: null
    })
};