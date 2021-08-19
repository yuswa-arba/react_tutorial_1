import toastr from "toastr"

export function success(message, timeout = 3500) {
    toastr.options.timeOut = timeout
    toastr.success(message)
}

export function info(message, timeout = 3500) {
    toastr.options.timeOut = timeout
    toastr.info(message)
}

export function error(message, timeout = 3500) {
    toastr.options.timeOut = timeout
    toastr.error(message)
}

export function warning(message, timeout = 3500) {
    toastr.options.timeOut = timeout
    toastr.warning(message)
}

/**
 {
     "status": "error",
     "msg": "Unknown Error Occurred",
     "data": {},
 },
 */
export function apiError(successData, timeout = 3500) {
    toastr.options.timeOut = timeout
    toastr.error(successData.msg || "Unknown Error Occurred")
}

/**
 {
     "status": "success",
     "msg": "Success",
     "data": {},
 },
 */
export function apiSuccess(successData, timeout = 3500) {
    toastr.options.timeOut = timeout
    toastr.success(successData.msg || "Success")
}
