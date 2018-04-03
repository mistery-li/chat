import React from 'react';

class FloatPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {title,show} = this.props;
        return (
            <div>
                <div>{title}</div>
                <div>
                    <i>X</i>
                </div>
            </div>
        );
    }
}

export default FloatPanel;