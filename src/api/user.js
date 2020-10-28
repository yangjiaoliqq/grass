import http from '../utils/http'

function apiGetInfo(uid) {
    return http({
        url:`/user/info?${uid}`
    })
}
export { apiGetInfo }