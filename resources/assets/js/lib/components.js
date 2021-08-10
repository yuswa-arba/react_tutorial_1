import {get} from "./api";
import * as constant from './const'

export function getReligion() {
    return get(constant.srvComponentReligion)
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
