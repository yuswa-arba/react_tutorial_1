import React, {Component} from 'react'

import {FormGroupUnderLine} from "../../../ui/forms/FormGroup";
import {SelectOptionReligion} from "../../../ui/forms/useStore"

import {rootCustomerAdd, rootCustomerDetail} from "../../../lib/const";
import PaginationRow from "../../../ui/components/PaginationRow";
import ListCustomer from "../components/ListCustomer";
import {getCustomer} from "../../../lib/customers";
import {ButtonIconSplitPrimary} from "../../../ui/components/Buttons";

class CustomerMain extends Component {

    state = {
        isFirstOpened: true,
        customers: [],
        pagination: {},
        searchObject: {
            v: '',
            religionId: '',
            page: 1
        },
        isLoading: true
    }

    static getDerivedStateFromProps(props, states) {
        const {location} = props;
        if (location.state && location.state.restoreState &&
            Object.keys(location.state.restoreState).length > 0) {
            if (states.isFirstOpened) {
                return {
                    ...location.state.restoreState,
                    isFirstOpened: false,
                    isLoading: false
                }
            }
        }
        return null
    }

    _getData = () => {
        getCustomer(this.state.searchObject)
            .then((resData) => {
                let data = []
                let pagination = {}
                let newIsLoading = false

                this.setState(() => {

                    if (resData && resData.data && resData.data.customers) {
                        data = resData.data.customers
                        pagination = resData.data.meta.pagination
                    }

                    return {
                        customers: data,
                        pagination: pagination,
                        isLoading: newIsLoading
                    }
                })

            })
            .catch((err) => {
                this.setState({
                    isLoading: false
                }, () => {
                    console.log(err)
                })
            })
    }

    _handleChangeSearch = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name

        this.setState((prevState) => {

            let newIsLoading = prevState.isLoading
            let newSearchObject = prevState.searchObject
            newSearchObject[name] = value

            if (name != 'v') {
                newIsLoading = true
                newSearchObject.page = 1
            }

            return {
                isLoading: newIsLoading,
                searchObject: newSearchObject
            }

        }, () => {
            if (name != 'v') {
                this._getData()
            }
        })

    }

    _handleSearchEnter = (event) => {
        if (event.key == 'Enter') {
            this._handleMovePage()
        }
    }

    _handleMovePage = (step = 1) => {
        this.setState((prevState) => {
            let newSearchObject = prevState.searchObject
            newSearchObject.page = step

            return {
                searchObject: newSearchObject,
                isLoading: true
            }

        }, () => {
            this._getData()
        })
    }

    _configPassState = (url, otherState = {}) => {

        const {customers, pagination, searchObject} = this.state

        this.props.history.push({
            pathname: url,
            state: {
                passState: {
                    customers: customers,
                    pagination: pagination,
                    searchObject: searchObject
                },
                ...otherState
            }
        })

    }

    _handleToAdd = () => {
        this._configPassState(rootCustomerAdd)
    }

    _handleToDetail = (customer) => {
        const {customers, pagination, searchObject} = this.state

        this.props.history.push({
            pathname: rootCustomerDetail(customer.id),
            state: {
                customer: customer,
                passState: {
                    customers: customers,
                    pagination: pagination,
                    searchObject: searchObject
                }
            }
        })
    }

    componentDidMount() {
        if (this.state.isFirstOpened) {
            this.setState({
                isFirstOpened: false
            }, () => {
                this._getData()
            })
        } else {
            this.props.history.replace({})
        }
    }

    render() {

        const {customers, pagination, searchObject, isLoading} = this.state

        return (
            <React.Fragment>

                <div className="row">
                    <div className="col-md-12">
                        <h3 className="mb-4 text-gray-800">Customer</h3>
                    </div>
                </div>

                <div className="row p-b-20">

                    <div className="col-md-10">
                        <div className="row">

                            <div className="col-md-2">
                                <FormGroupUnderLine
                                    label="Search"
                                    name="v"
                                    value={searchObject.v}
                                    extraClass="pull-left"
                                    placeholder="Enter (Search)"
                                    iconClass="fa fa-search"
                                    change={this._handleChangeSearch}
                                    keyPress={this._handleSearchEnter}/>
                            </div>

                            <div className="col-md-2">
                                <SelectOptionReligion
                                    value={searchObject.religionId}
                                    name="religionId"
                                    underLine={true}
                                    extraClass="pull-left"
                                    change={this._handleChangeSearch}/>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="row">

                            <div className="col-md-12">
                                <ButtonIconSplitPrimary type="button"
                                                        extraClass="float-sm-right"
                                                        handle={() => this._handleToAdd()}
                                                        icon="fa-plus"
                                                        name="New Customer"/>
                            </div>

                        </div>
                    </div>

                </div>

                <ListCustomer customers={customers}
                              pagination={pagination}
                              onLoading={isLoading}
                              link={this._handleToDetail}
                              handleMovePage={this._handleMovePage}/>

                {!isLoading && (customers.length > 0) ?
                    <div className="row m-b-10">
                        <div className="col-md-12">
                            <PaginationRow pagination={pagination}
                                           onMove={(step) => this._handleMovePage(step)}/>
                        </div>
                    </div> : null}

            </React.Fragment>
        );
    }

}

export default CustomerMain
