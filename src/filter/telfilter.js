// 导入 vue
import Vue from 'vue'
Vue.filter('telfilter', (value) => {
    if(value){
        return value.replace(/^(\d{3})\d{4}(\d+)/,"$1****$2");
    }
    return
})