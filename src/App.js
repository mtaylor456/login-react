import React, { Component } from 'react';
import './App.css';

const Welcome = ({user, onLogOut})=> {
    return (
        <div class="results">
             <pre>
                 {JSON.stringify(user, null, '\t')}
            </pre>
            <a href="javascript:;" onClick={onLogOut}>Log out</a>
        </div>
)
}

class LoginForm extends Component {

    handleLogIn(e) {
        e.preventDefault()
        let username = this.refs.username.value
        let password = this.refs.password.value
        this.props.onLogIn(username, password)
    }

    render() {
        return (
            <form class="login" onSubmit={this.handleLogIn.bind(this)}>

                    <input type="text" placeholder="Username" ref="username" id="username"/>
                    <input type="password"  placeholder="password" ref="password" id="password"/>
                    <input type="submit" value="Log In"/>

            </form>

        )
    }

}

class App extends Component {

    constructor(props) {
        super(props)
        // the initial application state
        this.state = {
            user: null
        }
    }

    logIn(username, password) {

        let ui = this;
        //http://drupal.docker.localhost:8000/current_user?_format=json
        fetch('mock.response.json', {
            method: 'get',
            headers: {
                'Authorization': 'Basic '+btoa(username+':'+password),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then(response => response.json())
          .catch(error => console.error('Error:', error))
          .then(
              function(response){
                  ui.setState({user: response});
          });

    }

    logOut() {
        this.setState({user: null})
    }

    render() {
        return (
            <div>
            <h1>Drupal login</h1>
                {(this.state.user) ? <Welcome user={this.state.user} onLogOut={this.logOut.bind(this)} />:<LoginForm onLogIn={this.logIn.bind(this)}/>}
            </div>)

    }

}

export default App;
