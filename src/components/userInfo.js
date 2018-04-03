import React from 'react';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatar: require('../image/avatar.jpg'),
            username: 'liii'
        }
    }
    render() {
        const {avatar, username} = this.state;
        return (
            <div>
                <div className="userinfo-close">
                    <i>X</i>
                </div>
                <div className="head-img">
                    <a>
                        <Avatar
                            avatar={avatar}
                            width={60}
                            height={60}
                            />
                    </a>
                    <span>{username}</span>
                </div>
                <div className="userinfo-content">
                    <div>
                        <span>性别：男</span>
                        <span>年龄：2</span>
                        <span>时长：309天</span>
                        <span>位置：火星</span>
                    </div>
                </div>
                <button>编辑</button>
            </div>
        );
    }
}

export default UserInfo;