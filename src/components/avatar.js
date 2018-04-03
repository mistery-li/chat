import React from 'react';
import './avatar.css';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {avatar, name, width, height, title, onClick,onMouseEnter,onMouseLeave} = this.props;
        return (
            <img
                className="avatar-img"
                src={avatar}
                style={{width, height,}}
                title={title}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />
        );
    }
}

export default Avatar;