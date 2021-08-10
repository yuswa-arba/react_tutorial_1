import {makeObservable, observable, action, computed} from 'mobx'
import {getReligion} from "../../../lib/components";

async function configManageStore(URL, callback) {

    URL.then((resData) => {

        let data = {}
        let isLoading = false

        if (resData && resData.data) {
            data = resData.data
        } else if (resData && resData.status && resData.status == 'cancel') {
            isLoading = true
        }

        callback(data, isLoading)

    }).catch((err) => {
        console.log(err)
    })

}

export class ManageReligionStore {
    religions

    constructor() {
        makeObservable(this, {
            religions: observable,
            runGetData: action,
            getReligions: computed,
        })
        this.religions = []
    }

    runGetData() {

        let self = this

        configManageStore(getReligion(), function (result) {
            self.religions = result && result.religions || []
        })

    }

    get getReligions() {
        return this.religions
    }

}
