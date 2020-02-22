import moment from 'moment';
import Vue from 'vue'

//moment()
const dateFormat = (daraStr, pattern = 'YYYY-MM-DD HH:mm:ss') => {
    return Vue.moment(daraStr).format(pattern);
}

export { dateFormat }