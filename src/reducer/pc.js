import immutable from 'immutable';

const initialState = immutable.fromJS({
    OpenGroupSetting: false,
    CloseGroupSetting: true,
    OpenUserInfo: false,
    CloseUserInfo: true,
    OpenNotice: false,
    CloseNotice: true,
    showNotification: false,
    notificationContent: '',
    desktopNotification: true,
});

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'OpenGroupSetting': { return state.set('openGroupSetting', true);}
        case 'CloseGroupSetting': { return state.set('closeGroupSetting', false);}
        case 'OpenUserInfo': { return state.set('openUserInfo', true);}
        case 'CloseUserInfo': { return state.set('CloseUserInfo');}
        case 'OpenNotice': { return state.set('OpenNotice', true);}
        case 'CloseNotice': { return state.set('CloseNotice', false);}
        case 'OpenNotification': {
            return state
            .set('showNotification', true)
            .set('notificationContent', action.content);
        }
        case 'CloseNotification': { return state.set('showNotification', false)}
        case 'OpenDesktopNotification': { return state.set('desktopNotification', true)};
        case 'CloseDesktopNotification': { return state.set('deskNotification', false)};
        default:
            return state;
    }
}

export default reducer;