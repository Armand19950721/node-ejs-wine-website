function loadProperties(types) {
    $.i18n.properties({
        name: 'lang', // 属性文件名     命名格式： 文件名_国家代号.properties
        path: '/resource/language', // 注意这里路径是你属性文件的所在文件夹
        mode: 'map',
        language: types, // 这就是国家代号 name+language刚好组成属性文件名：strings+zh -> strings_zh.properties
        callback() {
            $('[data-locale]').each(function () {
                try {
                    $(this).html($.i18n.prop($(this).data('locale')));
                }
                catch (e) {
                    console.log({ e })
                }
            });
            // $('[data-locale-title]').each(function () {
            //     var title = $(this).attr('data-locale-title');
            //     try {
            //         $(this).attr('title', $.i18n.prop(title));
            //     }
            //     catch (e) {

            //     }
            // });
            // $('[data-locale-place]').each(function () {
            //     var place = $(this).attr('data-locale-place');
            //     try {
            //         $(this).attr('placeholder', $.i18n.prop(place));
            //     }
            //     catch (e) {

            //     }
            // });
            $('.page-content').css({
                display: 'block'
            });
            $('#isI18nLoaded').val(true);

            console.log(`i18n loaded`);
        }
    });
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return null;
};

function isInt(value) {
    var x = parseFloat(value);
    return !isNaN(value) && (x | 0) === x;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomNotRepeatArrayInt(resLen, maxRange) {
    let arr = []

    while (arr.length < resLen) {
        const newInt = getRandomInt(maxRange)
        const findRes = arr.find(f => f == newInt)
        if (!findRes) {
            arr.push(newInt)
        }
    }

    console.log('getRandomNotRepeatArrayInt', arr)

    return arr
}

// document.addEventListener('scroll', function (event) {
//     console.log($('#product').offset())
// }, true /*Capture event*/);