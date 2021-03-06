import React, { Component } from 'react';
import 'whatwg-fetch';
import { Container, Row, Col, Jumbotron, FormGroup, Form, FormText, Button, Input } from 'reactstrap';
import { Link } from "react-router-dom";


import {
  getFromStorage,
  setInStorage,
} from '../utils/storage';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpEmail: '',
      signUpPassword: '',
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage('testlogin');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onSignUp() {
    // Grab state
    const {
      signUpEmail,
      signUpPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signUpEmail,
        password: signUpPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }

  onSignIn() {
    // Grab state
    const {
      signInEmail,
      signInPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          setInStorage('the_main_app', { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: '',
            signInEmail: '',
            token: json.token,
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
  }

  logout() {
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: '',
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpEmail,
      signUpPassword,
      signUpError,
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }

    if (!token) {
      return (
        <Container fluid={true}>
          <Row>
            <Col sm="12" md={{ size: 10, offset: 1 }}>
              <Jumbotron>
                <h1 className="display-3">Welcome!!</h1>
                <Row className="center">
                  <div className="intro">
                    <div>
                      {
                        (signInError) ? (
                          <p>{signInError}</p>
                        ) : (null)
                      }
                      <h3>Sign In</h3>
                      <Input
                        type="email"
                        placeholder="Username"
                        value={signInEmail}
                        onChange={this.onTextboxChangeSignInEmail}
                      />
                      <br />
                      <Input
                        type="password"
                        placeholder="Password"
                        value={signInPassword}
                        onChange={this.onTextboxChangeSignInPassword}
                      />
                      <br />
                      <Link to="/user">
                      <Button color="primary" onClick={this.onSignIn}>Sign In</Button>
                      </Link>
                    </div>
                    <br />
                    <br />
                    <div>
                      {
                        (signUpError) ? (
                          <p>{signUpError}</p>
                        ) : (null)
                      }
                      <h3>Sign Up</h3>
                      <Input
                        type="email"
                        placeholder="Username"
                        value={signUpEmail}
                        onChange={this.onTextboxChangeSignUpEmail}
                      /><br />
                      <Input
                        type="password"
                        placeholder="Password"
                        value={signUpPassword}
                        onChange={this.onTextboxChangeSignUpPassword}
                      /><br />
                      <Button color="primary" onClick={this.onSignUp}>Sign Up</Button>
                    </div>

                  </div>
                </Row>
              </Jumbotron>
            </Col>
          </Row>
        </Container >
      );
    }

    return (
      <div>
        <p>Account</p>
        <button onClick={this.logout}>Logout</button>
      </div>

    );
  }
}

export default Home;