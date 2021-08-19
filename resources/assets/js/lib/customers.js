import {get, post, querySearch} from "./api";
import * as constant from './const'
import * as notify from '../lib/notification'

export function getCustomer(search) {

    return get(constant.srvCustomer + querySearch(search))
        .then((res) => {
            if (res.data.status == 'success') {
                return res.data
            } else {
                return null
            }
        }).catch((err) => {
            notify.error(err.message)
        })

}

export function createCustomer(formRequest) {

    return post(constant.srvCustomerCreate, formRequest)
        .then((res) => {

            if (res.data.status == 'success') {
                notify.apiSuccess(res.data)
            } else {
                notify.apiError(res.data)
            }

            return res.data
        }).catch((err) => {
            notify.error(err.message)
        })

}

export function updateCustomer(formRequest, customerId) {

    return post(constant.srvCustomerUpdate(customerId), formRequest)
        .then((res) => {

            if (res.data.status == 'success') {
                notify.apiSuccess(res.data)
            } else {
                notify.apiError(res.data)
            }

            return res.data
        }).catch((err) => {
            notify.error(err.message)
        })

}
