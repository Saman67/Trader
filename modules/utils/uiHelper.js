import Utils from './utils'

export default {
    handleSizes() {

        var fs = $('.fos');
        if(fs.length) {
            var s = Utils.calculateColumnWidth(fs.width(), 250, 220, 300);
            fs.find('.fo').css('width', s);
        }

        var hh = $(window).height(), els = $('.fit-bottom'), pls = $('.fill-bottom');

        els.each(function (i, el) {
            $(this).height(hh - $(this).offset().top);
        });

        pls.each(function(i, el) {
            let ss = $(this), sSize = 0, sbl = ss.next(),
                pp = ss.parent().css('padding-bottom').replace("px", "");
            while (sbl.length) {
                sSize += sbl.outerHeight();
                sbl = sbl.next();
            }
            var yy = ss.offset().top;
            ss.height(hh - yy - sSize - pp);
        });

    }
};