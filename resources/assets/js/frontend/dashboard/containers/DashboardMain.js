import React, {Component} from 'react'
import {Doughnut} from "react-chartjs-2";

import DashboardCustomerActiveMonthly from "../components/DashboardCustomerActiveMonthly";
import DashboardCustomerGender from "../components/DashboardCustomerGender";
import DashboardTotalOnHeader from "../components/DashboardTotalOnHeader";
import DashboardCustomerReligion from "../components/DashboardCustomerReligion";

import {
    customerActiveMonthly,
    customerGender,
    allHeaderData,
    customerReligion,
    customerActivity
} from "../../../lib/dashboard";
import ProgressBar from "react-bootstrap/ProgressBar";
import DashboardCustomerActivity from "../components/DashboardCustomerActivity";

class DashboardMain extends Component {

    state = {
        customerActiveMonthly: [],
        customerGender: [],
        headerAll: [],
        customerReligion: [],
        customerActivity: [],
    }

    _getDashboardCustomerActiveMonthly = () => {
        customerActiveMonthly()
            .then((resData) => {

                let data = []
                if (resData && resData.data.dashboards) {
                    data = resData.data.dashboards
                }

                this.setState({
                    customerActiveMonthly: data
                })

            })
    }

    _getDashboardCustomerGender = () => {
        customerGender()
            .then((resData) => {

                let data = []
                if (resData && resData.data.dashboards) {
                    data = resData.data.dashboards
                }

                this.setState({
                    customerGender: data
                })

            })
    }

    _getDashboardHeaderAll = () => {
        allHeaderData()
            .then((resData) => {

                let data = []
                if (resData && resData.data.dashboards) {
                    data = resData.data.dashboards
                }

                this.setState({
                    headerAll: data
                })

            })
    }

    _getDashboardCustomerReligion = () => {
        customerReligion()
            .then((resData) => {

                let data = []
                if (resData && resData.data.dashboards) {
                    data = resData.data.dashboards
                }

                this.setState({
                    customerReligion: data
                })

            })
    }

    _getDashboardCustomerActivity = () => {
        customerActivity()
            .then((resData) => {

                let data = []
                if (resData.data.dashboards) {
                    data = resData.data.dashboards
                }

                this.setState({
                    customerActivity: data
                })

            })
    }

    componentDidMount() {
        this._getDashboardCustomerActiveMonthly()
        this._getDashboardCustomerGender()
        this._getDashboardHeaderAll()
        this._getDashboardCustomerReligion()
        this._getDashboardCustomerActivity()
    }

    render() {

        const {customerActiveMonthly, customerGender, headerAll, customerReligion, customerActivity} = this.state

        return (
            <React.Fragment>

                <div className="row">
                    <div className="col-md-12">
                        <h3 className="mb-4 text-gray-800">Dashboard</h3>
                    </div>
                </div>

                <div className="row">
                    <DashboardTotalOnHeader data={headerAll}/>
                </div>

                <div className="row">

                    <div className="col-xl-8 col-lg-7">
                        <DashboardCustomerActiveMonthly data={customerActiveMonthly}/>
                    </div>

                    <div className="col-xl-4 col-lg-5">
                        <DashboardCustomerGender data={customerGender}/>
                    </div>

                </div>

                <div className="row">

                    <div className="col-lg-6 mb-4">
                        <DashboardCustomerActivity data={customerActivity}/>
                    </div>

                    <div className="col-lg-6 mb-4">
                        <DashboardCustomerReligion data={customerReligion}/>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}

export default DashboardMain
