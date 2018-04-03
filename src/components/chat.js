import React from 'react';
import UserList from './userList';

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        const { linkmans } = this.props;
        return (
            <div>
                <UserList.container>
                    {
                        linkmans.map(linkman => {
                            <UserList.item
                            />
                        })
                    }
                </UserList.container>
            </div>
        );
    }
}

export default Chat;