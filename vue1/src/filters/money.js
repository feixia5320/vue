
export function formatMoney(value) {
    if (value) {
        value = Number(value);
        return '￥ ' + value.toFixed(2);
    }
};