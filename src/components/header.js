import React from 'react';
import Logo from './Logo';
import NavList from './navList';
import UserPanel from './userPanel';

class header extends React.Component {
    render() {
        return (
            <div>
                <Logo />
                <NavList.container>
                    <NavList.item
                        icon="&#xe607;"
                        title="聊天"
                    />
                    <NavList.item
                        icon="&#xe600;"
                        title="联系人"
                    />
                    <NavList.item
                        icon="&#xe606;"
                        title="系统设置"
                    />
                </NavList.container>
                <UserPanel />
            </div>
        );
    }
}

export default header;