import {get} from "./api";
import * as constant from './const'

export function customerActiveMonthly() {
    return get(constant.srvDashboardCustomerActiveMonthly)
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

export function customerGender() {
    return get(constant.srvDashboardCustomerGender)
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

export function allHeaderData() {
    return get(constant.srvDashboardHeaderAll)
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

export function customerReligion() {
    return get(constant.srvDashboardCustomerReligion)
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

export function customerActivity() {
    return get(constant.srvDashboardCustomerActivity)
        .then((res) => {

            if (res.data.status == 'success') {
                return res.data
            } else {
                return null
            }

        })
}
