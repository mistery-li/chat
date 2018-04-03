import React from 'react';
import FloatPanel from './FloatPanel';
import Avatar from './avatar';

class GroupSetting extends React.Component {
    render() {
        reutrn (
            <div>
                <FloatPanel 
                    title="群设置"
                />
                <div>
                    <div>管理员：无</div>
                    <div>在线人数： 6人</div>
                    <div>
                        <Avatar
                            avatar={avatar}
                            title=""
                            name="liii"
                            width={40}
                            height={40}
                        />
                        <Avatar
                            avatar={avatar}
                            title=""
                            name="liii"
                            width={40}
                            height={40}
                        />
                        <Avatar
                            avatar={avatar}
                            title=""
                            name="liii"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
                <button>退出群组</button>
            </div>
        );
    }
}

export default GroupSetting;