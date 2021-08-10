import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import DashboardMain from "./containers/DashboardMain";

class App extends Component {

    render() {
        return (
            <DashboardMain/>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('app'));
