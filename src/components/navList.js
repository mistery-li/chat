import React from 'react';

class navList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="nav-list">
            { this.props.children }
            </nav>
        );
    }
}

class Nav extends React.Component {
    render() {
        const {icon, selected, title, onClick} = this.props;
        return (
            <div>
                <i className="icon">{icon}</i>
            </div>
        )
    }
}

export default {
    container: navList,
    item: Nav,
};
