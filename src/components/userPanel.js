import React from 'react';
import Avatar from './avatar';

class userPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: require('../image/avatar.jpg'),
            username: 'liii',
        }
    }
    handleAvatarClick() {
        console.log('个人信息弹框');
    }
    render() {
        const {avatar, username} = this.state;
        return (
            <div>
            <div>在线</div>
            <Avatar
                avatar={avatar}
                name={username}
                width={60}
                height={60}
                title="查看个人信息"
                onClick={this.handleAvatarClick}
            />
        </div>
        );
    }
}

export default userPanel;