import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {rootAuthLogin, rootAuthRegister} from "../../lib/const";

import LoginMain from './containers/LoginMain'
import RegisterMain from './containers/RegisterMain'

class App extends Component {

    render() {

        return (
            <Router>
                <Switch>
                    <Route exact path={rootAuthLogin} component={LoginMain} />
                    <Route exact path={rootAuthRegister} component={RegisterMain} />
                </Switch>
            </Router>
        );

    }

}

ReactDOM.render(<App/>, document.getElementById('app'));
