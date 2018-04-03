import React from 'react';
import {connect} from 'react-redux';

class Notification extends React.Component {
    renderNotification() {
        const { content } = this.props;

        return (
            <div className="notification">
                <div>
                    { content }
                </div>
            </div>
        );
    }
    render() {
        const { show } = this.props;
        return show ? this.renderNotification.call(this) : null;
    }
}

export default connect(
    state => ({
        show: state.getIn(['pc', 'showNotification']),
        content: state.getIn(['pc', 'notificationContent']),
    })
)(Notification);