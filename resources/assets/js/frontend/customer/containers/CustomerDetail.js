import React, {Component} from 'react'
import {rootCustomerMain} from "../../../lib/const";
import {FormGroup} from "../../../ui/forms/FormGroup";
import {SelectOptionReligion} from "../../../ui/forms/useStore";
import {SelectGender} from "../../../ui/forms/Select";
import {TextareaBox} from "../../../ui/forms/Textarea";
import {CheckBox} from "../../../ui/forms/CheckBox";
import {ButtonIconSplitLight, ButtonIconSplitPrimary} from "../../../ui/components/Buttons";
import {updateCustomer} from "../../../lib/customers";
import {updateObjectOnList} from "../../../config/manage";

import * as notify from '../../../lib/notification'

class CustomerDetail extends Component {

    state = {
        passState: {},
        customer: {},
        previewEdit: false,
        formRequest: {
            name: '',
            religionId: '',
            gender: '',
            address: '',
            admin: 0,
            email: '',
            password: ''
        }
    }

    _handleUpdateProps = (propsNewCustomer) => {
        if (propsNewCustomer) {
            this.setState((prevState) => {
                let newPassState = prevState.passState

                if (newPassState.customers) {
                    newPassState.customers = updateObjectOnList(newPassState.customers, 'id', propsNewCustomer)
                }

                return {
                    passState: newPassState,
                    customer: propsNewCustomer
                }

            }, () => {
                const {customer, passState} = this.state

                this.props.history.replace({
                    state: {
                        customer: customer,
                        passState: passState
                    }
                })
            })
        }
    }

    _handleChangeInput = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState((prevState) => {

            let newFormRequest = prevState.formRequest
            newFormRequest[name] = value

            return {
                formRequest: newFormRequest
            }

        })

    }

    _resPreviewEdit = (allow) => {

        let previewEdit = this.state.previewEdit
        if (allow) {
            previewEdit = true
        } else {
            previewEdit = false
        }

        this.setState((prevState) => {
            let newFormRequest = prevState.formRequest
            let customer = this.state.customer

            Object.keys(newFormRequest).forEach(key => {
                if (key !== 'password') {

                    if (key === 'religionId') {
                        newFormRequest[key] = previewEdit ? (customer.religion ? customer.religion.id : '') : ''
                    } else if (key === 'gender') {
                        newFormRequest[key] = previewEdit ? customer.gender.toLocaleLowerCase() : ''
                    } else {
                        newFormRequest[key] = previewEdit ? customer[key] : ''
                    }

                }
            })

            return {
                formRequest: newFormRequest,
                previewEdit: previewEdit
            }
        })

    }

    _handleGoBack = () => {
        this.props.history.push({pathname: rootCustomerMain})
    }

    _handleGoBackCancel = () => {

        const {passState} = this.state

        if (Object.keys(passState).length > 0) {
            this.props.history.push({
                pathname: rootCustomerMain,
                state: {restoreState: passState}
            })
        } else {
            this._handleGoBack
        }

    }

    _handleSubmit = () => {
        const {formRequest, customer} = this.state

        updateCustomer(formRequest, customer.id)
            .then((resData) => {

                if (resData && resData.status === 'success') {

                    const customer = resData.data && resData.data.customer ? resData.data.customer : {}
                    if (customer) {

                        this.setState((prevState) => {

                            let newFormRequest = prevState.formRequest

                            Object.keys(newFormRequest).forEach(key => {
                                newFormRequest[key] = ''
                            })

                            return {
                                formRequest: newFormRequest,
                                customer: customer,
                                previewEdit: false
                            }

                        })

                        this._handleUpdateProps(customer)

                    }

                }

            })
            .catch((err) => {
                notify.error(err.message)
            })

    }

    componentDidMount() {
        const {location} = this.props

        if (this.props.match.params.id && location.state && location.state.customer
            && Object.keys(location.state.customer).length > 0) {

            const customerSelected = location.state.customer
            if (customerSelected && customerSelected.id == this.props.match.params.id) {
                this.setState({
                    passState: location.state.passState || {},
                    customer: location.state.customer
                }, () => {
                    // this._getRequestEdit()
                })
            } else {
                // notify.error('ID is not the same as selected!')
                this._handleGoBackCancel()
            }
        } else {
            this._handleGoBackCancel()
        }
    }

    render() {

        const {customer, previewEdit, formRequest} = this.state
        console.log(formRequest)

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="mb-4 text-gray-800">Customer Detail</h3>
                            </div>
                            <div className="col-md-6">
                                <ButtonIconSplitPrimary type="button"
                                                        extraClass="float-md-right"
                                                        handle={this._handleGoBackCancel}
                                                        icon="fa-angle-left"
                                                        name="Customers List"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card mb-4">

                            <div className="card-body">
                                <div className="row">

                                    {!previewEdit ? (<div className="col-md-12">
                                        <span className="fs-18 float-md-right text-primary cursor m-t-0"
                                              onClick={() => this._resPreviewEdit(true)}>
                                            <i className="fa fa-edit"/> Edit
                                        </span>
                                    </div>) : null}

                                    <div className="col-md-8">

                                        <table className="full-width">
                                            <tbody>
                                            <tr>
                                                <td className="w-30-percent p-b-10 text-vertical-top">
                                                    <p className="fs-20 text-black-custom f-w-600">
                                                        Name <span className="normal float-right">:</span>
                                                    </p>
                                                </td>
                                                <td className="p-l-10 p-b-10">
                                                    {previewEdit ?
                                                        (<FormGroup name="name"
                                                                    value={formRequest.name}
                                                                    placeholder="Enter your name"
                                                                    change={this._handleChangeInput}/>) :
                                                        (<p className="fs-18 text-black-custom">{customer.name}</p>)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30-percent p-b-10 text-vertical-top">
                                                    <p className="fs-20 text-black-custom f-w-600">
                                                        Religion <span className="normal float-right">:</span>
                                                    </p>
                                                </td>
                                                <td className="p-l-10 p-b-10">
                                                    {previewEdit ?
                                                        (<div className="input-group">
                                                            <SelectOptionReligion name="religionId"
                                                                                  unShift="Select Religion"
                                                                                  value={formRequest.religionId}
                                                                                  change={this._handleChangeInput}/>
                                                        </div>) :
                                                        (<p className="fs-18 text-black-custom">
                                                            {customer.religion && customer.religion.name ? customer.religion.name : '-'}
                                                        </p>)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30-percent p-b-10 text-vertical-top">
                                                    <p className="fs-20 text-black-custom f-w-600">
                                                        Gender <span className="normal float-right">:</span>
                                                    </p>
                                                </td>
                                                <td className="p-l-10 p-b-10">
                                                    {previewEdit ?
                                                        (<div className="input-group">
                                                            <SelectGender name="gender" unShift="Select Gender"
                                                                          value={formRequest.gender}
                                                                          change={this._handleChangeInput}/>
                                                        </div>) :
                                                        (<p className="fs-18 text-black-custom">{customer.gender}</p>)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30-percent p-b-10 text-vertical-top">
                                                    <p className="fs-20 text-black-custom f-w-600">
                                                        Address <span className="normal float-right">:</span>
                                                    </p>
                                                </td>
                                                <td className="p-l-10 p-b-10">
                                                    {previewEdit ?
                                                        (<div className="input-group">
                                                            <TextareaBox name="address" placeholder="Input your address"
                                                                         value={formRequest.address}
                                                                         change={this._handleChangeInput}/>
                                                        </div>) :
                                                        (<p className="fs-18 text-black-custom">{customer.address}</p>)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30-percent p-b-10 text-vertical-top">
                                                    <p className="fs-25 text-black-custom f-w-600 bold">
                                                        Login
                                                    </p>
                                                </td>
                                                <td className="p-l-10 p-b-10">
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30-percent p-b-10 text-vertical-top">
                                                    <p className="fs-20 text-black-custom f-w-600">
                                                        E-Mail <span className="normal float-right">:</span>
                                                    </p>
                                                </td>
                                                <td className="p-l-10 p-b-10">
                                                    {previewEdit ?
                                                        (<FormGroup name="email"
                                                                    value={formRequest.email}
                                                                    placeholder="Enter your email"
                                                                    change={this._handleChangeInput}
                                                                    autoComplete="nope"/>) :
                                                        (<p className="fs-18 text-black-custom">{customer.email}</p>)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30-percent p-b-10 text-vertical-top">
                                                    <p className="fs-20 text-black-custom f-w-600">
                                                        Password <span className="normal float-right">:</span>
                                                    </p>
                                                </td>
                                                <td className="p-l-10 p-b-10">
                                                    {previewEdit ?
                                                        (<FormGroup type="password"
                                                                    name="password"
                                                                    value={formRequest.password}
                                                                    placeholder="Enter your password"
                                                                    change={this._handleChangeInput}
                                                                    autoComplete="new-password"/>) :
                                                        (<p className="fs-18 text-black-custom">****</p>)}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30-percent p-b-10 text-vertical-top">
                                                </td>
                                                <td className="p-l-10 p-b-10">
                                                    {previewEdit ?
                                                        (<CheckBox name="admin" id="customerAdmin"
                                                                   label="Admin"
                                                                   value={formRequest.admin}
                                                                   extraClass="m-r-15"
                                                                   checked={formRequest.admin}
                                                                   handle={this._handleChangeInput}/>) :
                                                        (<p className="fs-18 text-black-custom">
                                                        <span
                                                            className={"fa " + (customer.admin ? "fa-check text-primary" : "fa-times text-danger")}/> Admin
                                                        </p>)}

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>

                                {previewEdit ?
                                    (<div className="row">
                                        <div className="col-md-8">
                                            <ButtonIconSplitPrimary type="button"
                                                                    extraClass="float-sm-right"
                                                                    icon="fa-check"
                                                                    handle={this._handleSubmit}
                                                                    name="Save"/>
                                            <ButtonIconSplitLight type="button"
                                                                  extraClass="float-sm-right m-r-15"
                                                                  icon="fa-angle-left"
                                                                  handle={() => this._resPreviewEdit(false)}
                                                                  name="Cancel"/>
                                        </div>
                                    </div>) : null}

                            </div>

                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

}

export default CustomerDetail
