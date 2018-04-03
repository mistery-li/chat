import React from 'react';
import FloatPanel from './FloatPanel';

class GroupNotice extends React.Component {
    render() {
        return (
            <div>
                <FloatPanel
                    title="群公告"/>
                <div>
                    <div>
                        chatRoom更新于2018年3月29
                    </div>
                    <div>欢迎来到Brother</div>
                </div>
            </div>
        )
    }
}