import React from 'react';
import Avatar from '../components/avatar';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameInput: 'normal',
            passwordInput: 'normal'
        }
    }

    renderLogin = () => {
        const {username, avatar} = this.props;
        return (
            <div>
                <div>
                <Avatar
                    name={username}
                    avatar={avatar !== '' ? avatar : require('../image/avatar.jpg')}
                    width={100}
                    height={100}
                />
                </div>
                <div>
                    <span>欢迎老司机回来！</span>
                    <div>
                        <div>
                            <i className="icon">&#xe608; </i>
                        </div>
                        <input 
                            type="text"
                            ref={name => this.username = name}
                            placeholder="用户名"
                            onFocus={() => this.setState({usernameInput: 'focus'})}
                            onBlur={() => this.setState({ usernameInput: 'normal' })}
                            onChange={this.handleUsernameChange}
                        />
                        
                    </div>
                    <div>
                        <div>
                            <i className="icon">&#xe60b;</i>
                        </div>
                        <input
                            type="password"
                            ref={password => this.password = password}
                            placeholder="密码"
                            onFocus={() => this.setState({ passwordInput: 'focus'})}
                            onBlur={() => this.setState({ passwordInput: 'normal'})}
                        />
                    </div>
                    <div>
                        <span
                            onClick={() => this.context.router.push('/signup')}
                        >
                            注册
                        </span>
                        <button
                            onClick={this.handleLogin}
                        >
                            登录
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    
    renderSignup = () => {
        const { usernameInput, passwordInput } = this.state;
        return (
            <div>
                <div>
                    <Avatar
                        name="a"
                        avatar={require('../image/avatar.jpg')}
                        width={100}
                        height={100}
                    />
                </div>
                <div>
                    <span>新司机快注册驾照</span>
                    <div className="">
                        <div>
                            <i className="icon">&#xe608;</i>
                        </div>
                        <input
                            type="text"
                            ref={username => this.username = username}
                            placeholder="用户名"
                            onFocus={() => this.setState({ usernameInput: 'focus'})}
                            onBlur={() => this.setState({ usernameInput: 'normal'})}
                        />
                    </div>
                    <div>
                        <div>
                            <i className="icon">&#xe60b</i>
                        </div>
                        <input
                            type="password"
                            ref={password => this.password = password}
                            placeholder="密码"
                            onFocus={() => this.setState({ passwordInput: 'focus'})}
                            onBlur={() => this.setState({ passwordInput: 'normal'})}
                        />
                    </div>
                    <div>
                        <span
                            onClick={() => this.context.router.push('/login')}
                        >
                            登录
                        </span>
                        <button
                            onClick={this.handleSignup}
                        >
                            注册
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return /^(\/|\/login)$/.test(this.props.location.pathname) ? this.renderLogin() : this.renderSignup();
    }
}

// export default connect(
//     state => ({
//         username: state.getIn(['pc', 'username']),
//         avatar: state.getIn(['pc', 'avatar']),
//     })
// )(Login)
export default Login;