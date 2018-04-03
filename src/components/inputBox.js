import React from 'react';

class InputBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input placeholder="输入消息"/>
            </div>
        );
    }
}

export default InputBox;