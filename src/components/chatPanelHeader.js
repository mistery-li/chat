import React from 'react';

class ChatPanelHeader extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Avatar
                        width={40}
                        height={40}
                        avatar={avatar}
                        name={name}
                    />
                    <p>liii</p>
                </div>
                <div>
                    <div>
                        <i>公告</i>
                    </div>
                    <div>
                        <i>关于</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatPanelHeader;