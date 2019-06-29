module.exports = {

    formatNumber: function(num, n) {
        if(!num) return num;

        if(n == undefined || n < 0)
            n = 2;

        num = num.toFixed(n) + '';
        var x = num.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    },

    formatMoney: function (num, n, x) {
        if(!num) return num;
        var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
        return '$' + num.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
    }
};
