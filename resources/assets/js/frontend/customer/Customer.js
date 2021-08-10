import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {rootCustomerAdd, rootCustomerMain} from "../../lib/const";

import CustomerMain from './containers/CustomerMain'
import CustomerDetail from './containers/CustomerDetail'
import CustomerAdd from "./containers/CustomerAdd";

class App extends Component{

    render() {

        return (
            <Router>
                <Switch>
                    <Route exact path={rootCustomerMain} component={CustomerMain} />
                    <Route exact path={rootCustomerAdd} component={CustomerAdd} />
                    <Route exact path={rootCustomerMain + '/:id/detail'} component={CustomerDetail} />
                </Switch>
            </Router>
        );

    }

}

ReactDOM.render(<App/>, document.getElementById('app'));
