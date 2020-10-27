import http from '../utils/http'

// 获取首页数据
function apihomeList() {
    return http({
        url: '/index'
    })
}
export { apihomeList }