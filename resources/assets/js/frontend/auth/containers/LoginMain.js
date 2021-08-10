import React, {Component} from 'react'

import {rootAuthRegister} from "../../../lib/const";

class LoginMain extends Component {

    // START HANDLE TO CHANGE PAGE
    _handleToRegister = () => {

        this.props.history.push({
            pathname: rootAuthRegister
        })

    }

    render() {

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <form className="user">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user"
                                           id="exampleInputEmail" aria-describedby="emailHelp"
                                           placeholder="Enter Email Address"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-user"
                                           id="exampleInputPassword" placeholder="Password"/>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox small">
                                        <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                        <label className="custom-control-label" htmlFor="customCheck">Remember
                                            Me</label>
                                    </div>
                                </div>
                                <a href="" className="btn btn-primary btn-user btn-block">
                                    Login
                                </a>
                                <hr/>
                                <a href="" className="btn btn-google btn-user btn-block">
                                    <i className="fab fa-google fa-fw"></i> Login with Google
                                </a>
                                <a href="" className="btn btn-facebook btn-user btn-block">
                                    <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                </a>
                            </form>
                            <hr/>
                            <div className="text-center">
                                <a className="small">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                                <a className="small cursor" onClick={() => this._handleToRegister()}>Create an Account!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );

    }

}

export default LoginMain
