import axios from 'axios'

let instance = axios.create({
    baseURL: 'http://rap2api.taobao.org/app/mock/269260',
});

export default instance