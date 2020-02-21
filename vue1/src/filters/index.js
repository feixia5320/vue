import moment from 'moment'

export function dateFormat(daraStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(daraStr).format(pattern);
}

export function formatMoney(value) {
    if (value) {
        value = Number(value);
        return '￥ ' + value.toFixed(2);
    }
};