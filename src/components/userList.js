import React from 'react';
import Avatar from './avatar';

class UserList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                // 聊天内容
                {this.props.children}
            </div>
        )
    }
}

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Avatar
                    avatar=""
                    width={40}
                    height={40}
                />
                <div>
                    <div>
                        <p>liii</p>
                        <p>12:30</p>
                    </div>
                    <div>
                        <p>姓名:最新聊天记录</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default {
    container: UserList,
    item: User,
};