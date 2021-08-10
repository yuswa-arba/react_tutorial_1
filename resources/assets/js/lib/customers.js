import {get, post, querySearch} from "./api";
import * as constant from './const'

export function getCustomer(search) {

    return get(constant.srvCustomer + querySearch(search))
        .then((res) => {
            if (res.data.status == 'success') {
                return res.data
            } else {
                return null
            }
        }).catch((err) => {
            console.log(err)
        })

}

export function createCustomer(formRequest) {

    return post(constant.srvCustomerCreate, formRequest)
        .then((res) => {
            if (res.data.status == 'success') {
                return res.data
            } else {
                return null
            }
        }).catch((err) => {
            console.log(err)
        })

}

export function updateCustomer(formRequest, customerId) {

    return post(constant.srvCustomerUpdate(customerId), formRequest)
        .then((res) => {
            if (res.data.status == 'success') {
                return res.data
            } else {
                return null
            }
        }).catch((err) => {
            console.log(err)
        })

}
