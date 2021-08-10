import React, {Component} from 'react'
import {SelectOptionReligion} from "../../../ui/forms/useStore";
import {SelectGender} from "../../../ui/forms/Select";
import {TextareaBox} from "../../../ui/forms/Textarea";
import {CheckBox} from "../../../ui/forms/CheckBox";
import {ButtonIconSplitLight, ButtonIconSplitPrimary} from "../../../ui/components/Buttons";
import {FormGroup} from "../../../ui/forms/FormGroup";
import {createCustomer} from "../../../lib/customers";
import {rootCustomerDetail, rootCustomerMain} from "../../../lib/const";

class CustomerAdd extends Component {

    state = {
        formRequest: {
            name: '',
            religionId: '',
            gender: '',
            address: '',
            admin: 0,
            email: '',
            password: '',
        },
        passState: {}
    }

    _handleSubmit = () => {
        createCustomer(this.state.formRequest)
            .then((resData) => {

                const {passState} = this.state

                const customer = resData.data && resData.data.customer ? resData.data.customer : {}
                if (customer) {

                    this.props.history.push({
                        pathname: rootCustomerDetail(customer.id),
                        state: {
                            passState: passState,
                            customer: customer
                        }
                    })

                }

            })
            .catch((err) => {
                console.log(err)
            })
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

    _handleCancel = () => {

        const {passState} = this.state

        if (Object.keys(passState).length > 0) {
            this.props.history.push({
                pathname: rootCustomerMain,
                state: {restoreState: passState}
            })
        } else {
            this.props.history.push({pathname: rootCustomerMain})
        }

    }

    componentDidMount() {

        const {location} = this.props

        if (location.state && location.state.passState && Object.keys(location.state.passState).length > 0) {
            this.setState({
                passState: location.state.passState
            })
        }

    }

    render() {

        const {formRequest} = this.state

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="mb-4 text-gray-800">Customer Add</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="card mb-4">

                            <div className="card-body">

                                <div className="row">
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
                                                    <FormGroup name="name"
                                                               value={formRequest.name}
                                                               placeholder="Enter your name"
                                                               change={this._handleChangeInput}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30-percent p-b-10 text-vertical-top">
                                                    <p className="fs-20 text-black-custom f-w-600">
                                                        Religion <span className="normal float-right">:</span>
                                                    </p>
                                                </td>
                                                <td className="p-l-10 p-b-10">
                                                    <div className="input-group">
                                                        <SelectOptionReligion name="religionId"
                                                                              unShift="Select Religion"
                                                                              value={formRequest.religionId}
                                                                              change={this._handleChangeInput}/>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30-percent p-b-10 text-vertical-top">
                                                    <p className="fs-20 text-black-custom f-w-600">
                                                        Gender <span className="normal float-right">:</span>
                                                    </p>
                                                </td>
                                                <td className="p-l-10 p-b-10">
                                                    <div className="input-group">
                                                        <SelectGender name="gender" unShift="Select Gender"
                                                                      value={formRequest.gender}
                                                                      change={this._handleChangeInput}/>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30-percent p-b-10 text-vertical-top">
                                                    <p className="fs-20 text-black-custom f-w-600">
                                                        Address <span className="normal float-right">:</span>
                                                    </p>
                                                </td>
                                                <td className="p-l-10 p-b-10">
                                                    <div className="input-group">
                                                        <TextareaBox name="address" placeholder="Input your address"
                                                                     value={formRequest.address}
                                                                     change={this._handleChangeInput}/>
                                                    </div>
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
                                                    <FormGroup name="email"
                                                               value={formRequest.email}
                                                               placeholder="Enter your email"
                                                               change={this._handleChangeInput}
                                                               autoComplete="nope"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30-percent p-b-10 text-vertical-top">
                                                    <p className="fs-20 text-black-custom f-w-600">
                                                        Password <span className="normal float-right">:</span>
                                                    </p>
                                                </td>
                                                <td className="p-l-10 p-b-10">
                                                    <FormGroup type="password"
                                                               name="password"
                                                               value={formRequest.password}
                                                               placeholder="Enter your password"
                                                               change={this._handleChangeInput}
                                                               autoComplete="new-password"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="w-30-percent p-b-10 text-vertical-top">
                                                </td>
                                                <td className="p-l-10 p-b-10">
                                                    <div className="input-group checkbox">
                                                        <CheckBox name="admin" id="customerAdmin"
                                                                  label="Admin"
                                                                  value={formRequest.admin}
                                                                  extraClass="m-r-15"
                                                                  handle={this._handleChangeInput}/>
                                                    </div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-8">
                                        <ButtonIconSplitPrimary type="button"
                                                                extraClass="float-sm-right"
                                                                icon="fa-check"
                                                                handle={this._handleSubmit}
                                                                name="Save"/>
                                        <ButtonIconSplitLight type="button"
                                                              extraClass="float-sm-right m-r-15"
                                                              icon="fa-angle-left"
                                                              handle={this._handleCancel}
                                                              name="Cancel"/>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }

}

export default CustomerAdd
