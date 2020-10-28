import http from '../utils/http'

//个人信息页接口
function apiGetInfo(uid) {
    return http({
        url: `/user/info?${uid}`
    })
}
// 登录的接口
function apiGetLogin({ phone, password, code }) {
    return http({
        url: "/user/login",
        method: "POST",
        data: {
            phone: phone,
            password: password,
            phone_code: code
        }
    })
}

// 发送验证码
function apiGetCode(phone) {
    return http({
        url: "/user/phone_code",
        method: "POST",
        data: {
            phone: phone
        }
    })
}
export { apiGetInfo, apiGetLogin,apiGetCode }