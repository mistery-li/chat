import Store from '../store';

const dispatch = Store.dispatch;
let closeNotification = null;

const actions = {
    openUserInfo: () => dispatch({type: 'openUserInfo'}),
    openNotice: () => dispatch({type: 'showNotice'}),
    openGroupSetting: () => dispatch({type:'OpenGroupSetting'}),
    closeNotice: () => dispatch({type: 'closeNotice'}),
    closeUserInfo: () => dispatch({type: 'closeUserInfo'}),
    closeGroupSetting: () => dispatch({type: 'closeGroupSetting'}),
    openNotification: function (content) {
        dispatch({type: 'OpenNotification', content});
        clearTimeout(closeNotification);
        closeNotification = setTimeout(this.closeNotification, 5000);
    },
    closeNotification: () => dispatch({type: 'CloseNotification' }),
    openDesktopNotification: () => dispatch({type: 'openDesktopNotification'}),
    closeDesktopNotification: () => dispatch({type: 'closeDesktopNotification'}),
}

export default actions;