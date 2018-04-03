import React from 'react';
import './logo.css';

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={require('../image/logo.PNG')} alt="logo"/>
            </div>
        );
    }
}

export default Logo;