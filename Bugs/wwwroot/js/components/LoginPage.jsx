﻿function Login(url, login, password) {
    let model = {
        login: login,
        password: password
    }
    Send(model, url, function (data) {
        if (!data)
            alert("Пользователь не найден или неверная пара логин-пароль");
        else
            ActualPage();
    }, true);
}

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { url: props.url};
        this.onEnter = this.onEnter.bind(this);
    }
    onEnter() {
        let log = this.refs.userLogin.value;
        let pass = this.refs.userPassword.value;

        if (log == "")
            alert("Введите логин");
        else if (pass == "")
            alert("Введите пароль");
        else
            Login(this.state.url, log, pass);
    }
    render() {
        return <div className="login-page">
            <div>
                <h3>Enter</h3>
                <input defaultValue="" ref="userLogin" placeholder="Login" />
                <input defaultValue="" ref="userPassword" placeholder="Password" type="password" />

                <button onClick={this.onEnter}>Save</button>
            </div>
        </div>;
    }
}