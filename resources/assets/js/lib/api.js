import axios from 'axios'

export function querySearch(search) {
    let queryParam = ''
    if (search != null) {
        Object.keys(search).forEach((key) => {

            queryParam == '' ? queryParam += '?' : queryParam += '&'
            queryParam += key + '=' + search[key]

        })
    }

    return queryParam
}

export async function get(url, other, headers = {}) {

    return await axios({
        method: 'GET',
        url: url,
        headers: {
            // 'Authorization': `Bearer ${Auth.state.api_token}`
            headers
        },
        ...other
    })

}

export async function post(url, payload, others, headers = {}) {
    return await axios({
        method: 'POST',
        url: url,
        data: payload,
        headers: {
            // 'Authorization': `Bearer ${Auth.state.api_token}`,
            headers
        },
        ...others
    })
}
