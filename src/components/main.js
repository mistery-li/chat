import React from 'react';
import Header from './header';
import SystemSetting from './SystemSetting';
import UserSetting from './userSetting';

class main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <SystemSetting />
                <UserSetting />
            </div>
        );
    }
}

export default main;