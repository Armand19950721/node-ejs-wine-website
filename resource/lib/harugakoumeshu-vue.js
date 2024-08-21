var app = new Vue({
    el: '#app',
    data: {
        checkAge: {
            isShow: true,
            // isShow: false,
            birthday: [
                { placeholder: "日期", maxlength: "2", min: "1", max: "31", val: "" },
                { placeholder: "月份", maxlength: "2", min: "1", max: "12", val: "" },
                { placeholder: "年份", maxlength: "4", min: "1911", max: "1", val: "" },
            ],
            langDropDownChoose: '中文',
            langDropDown: [
                { name: '中文', lang: 'zh' },
                { name: 'English', lang: 'en' },
            ]
        },
        product: {
            One: {
                details: [
                    { key: 'productKey-1', val: 'productOneVal-1' },
                    { key: 'productKey-2', val: 'productOneVal-2' },
                    { key: 'productKey-3', val: 'productOneVal-3' },
                    { key: 'productKey-4', val: 'productOneVal-4' },
                    { key: 'productKey-5', val: 'productOneVal-5' },
                    { key: 'productKey-6', val: 'productOneVal-6' },
                ],
                descNote: [
                    'productOneDescNote-1',
                    'productOneDescNote-2',
                    'productOneDescNote-3',
                ]
            }
        },
        photos: {
            urls: [
                { title: 'photosTitle-1', desc: 'photosDesc-1', fileName: '一堆酒.jpg' },
                { title: 'photosTitle-1', desc: 'photosDesc-1', fileName: '一堆酒.jpg' },
                { title: 'photosTitle-1', desc: 'photosDesc-1', fileName: '一堆酒.jpg' },
                { title: 'photosTitle-1', desc: 'photosDesc-1', fileName: '一堆酒.jpg' },
                { title: 'photosTitle-1', desc: 'photosDesc-1', fileName: '一堆酒.jpg' },
                { title: 'photosTitle-1', desc: 'photosDesc-1', fileName: '一堆酒.jpg' },
            ]
        },
        news: {
            items: [
                { key: 'newsItemKey-1', val: 'newsItemVal-1', href: 'https://www.sogo.com.tw/tp3/news/22123016165095' },
                // { key: 'newsItemKey-2', val: 'newsItemVal-2', href: 'https://www.sogo.com.tw/tp3/news/22123016165095' },
            ]
        },
        sideMenuBtn: {
            open: true
        },
        sideMenu: {
            list: [
                { name: 'Story', id: 'story' },
                { name: 'Product', id: 'product' },
                { name: 'News', id: 'news' },
                { name: 'HotTopic', id: 'talk' },
                { name: 'Gallary', id: 'gallary' },
                { name: 'Contact', id: 'contact' },
            ],
            sites: [
                { className: 'fa-brands fa-instagram fa-xl', href: 'https://www.instagram.com/haotaohua_tw/' },
                { className: 'fa-brands fa-facebook fa-xl', href: 'https://www.facebook.com/Haotaohua' },
                { className: 'fa-brands fa-youtube fa-xl', href: 'https://www.youtube.com/@haotaohua' },
                { className: 'fa-brands fa-line fa-xl', href: 'https://lin.ee/2D58fd0' },
            ]
        },
        talk: {
            randomIdx: getRandomNotRepeatArrayInt(6, 42),
            images: [
                { name: 'IMG_0099-min.PNG', href: 'https://www.instagram.com/p/CnL0OI1LBHp/?utm_source=ig_web_copy_link' },
                { name: 'IMG_0102-min.PNG', href: 'https://www.instagram.com/p/CmqnRDlSVmt/?utm_source=ig_web_copy_link' },
                { name: 'IMG_0103-min.PNG', href: 'https://www.instagram.com/p/CmeV9saSd1b/?utm_source=ig_web_copy_link' },
                { name: 'IMG_0104-min.PNG', href: 'https://www.instagram.com/p/CmOQOrQSJId/?utm_source=ig_web_copy_link' },
                { name: 'IMG_0105-min.PNG', href: 'https://www.instagram.com/p/CmMDkX_pz-q/?utm_source=ig_web_copy_link' },
                { name: 'IMG_0106-min.PNG', href: 'https://www.instagram.com/p/CmGubRFS03u/?utm_source=ig_web_copy_link' },
                { name: 'IMG_0107-min.PNG', href: '' },
                { name: 'IMG_0180-min.PNG', href: 'https://www.instagram.com/p/CnQvefdJBOU/?utm_source=ig_web_copy_link' },
                { name: 'IMG_0181-min.PNG', href: 'https://www.instagram.com/p/CnO0GdQSfWu/?utm_source=ig_web_copy_link' },
                { name: 'IMG_0182-min.PNG', href: 'https://www.instagram.com/p/CnQvefdJBOU/?utm_source=ig_web_copy_link' },
                { name: 'IMG_0183-min.PNG', href: 'https://www.instagram.com/p/CmeNvmxy1yW/?utm_source=ig_web_copy_link' },
                { name: 'IMG_0184-min.PNG', href: '' },
                { name: 'IMG_0187-min.PNG', href: '' },
                { name: 'S__75161611-min.png', href: 'https://www.instagram.com/p/Com4Q4sSx-5/?utm_source=ig_web_copy_link' },
                { name: 'S__75161616-min.png', href: 'https://www.instagram.com/p/CocJinip65e/?utm_source=ig_web_copy_link' },
                { name: 'S__75161617-min.png', href: 'https://www.instagram.com/p/CoZih-Zrp1W/?utm_source=ig_web_copy_link' },
                { name: 'S__75161618-min.png', href: 'https://www.instagram.com/p/CocGPG2vwBD/?utm_source=ig_web_copy_link' },
                { name: 'S__75161619-min.png', href: 'https://www.instagram.com/p/ComFtVnSN_q/?utm_source=ig_web_copy_link' },
                { name: 'S__75161620-min.png', href: 'https://www.instagram.com/p/Coj2Z_qvyLi/?utm_source=ig_web_copy_link' },
                { name: 'S__75161621-min.png', href: 'https://www.instagram.com/p/CoY90cHrQSK/?utm_source=ig_web_copy_link' },
                { name: 'gillstalk_IMG_2484-min.jpeg', href: 'https://www.instagram.com/p/CpH8TWsv_QI/?utm_source=ig_web_copy_link' },
                { name: 'angelcheng1026_IMG_2495-min.jpeg', href: 'https://www.instagram.com/p/CoWMOS1OcNV/?utm_source=ig_web_copy_link' },
                { name: 'christinadesignc_IMG_2474-min.jpeg', href: 'https://www.instagram.com/p/CoBUDUSh3g7/?utm_source=ig_web_copy_link' },
                { name: '85.hanhan_IMG_2480-min.jpeg', href: 'https://www.instagram.com/p/CpLIL6LyWnB/?utm_source=ig_web_copy_link' },
                { name: 'triple_meat_couple_IMG_2478-min.jpeg', href: 'https://www.instagram.com/p/CpNTIwnva5z/' },
                { name: 'jhaoyu1207_IMG_2479-min.jpeg', href: 'https://www.instagram.com/p/CpLFwIDy__o/?utm_source=ig_web_copy_link' },
                { name: 'Ianinini1357_IMG_2491-min.jpeg', href: 'https://www.instagram.com/reel/CoeyUAEDVp2/?utm_source=ig_web_copy_link' },
                { name: 'strawmoon_IMG_2496-min.jpeg', href: 'https://www.instagram.com/p/CoCkq_zvViz/?utm_source=ig_web_copy_link' },
                { name: 'linda199709_IMG_2475-min.jpeg', href: 'https://www.instagram.com/p/CpXmfupBx8A/?utm_source=ig_web_copy_link' },
                { name: 'mieno1028_IMG_2481-min.jpeg', href: 'https://www.instagram.com/p/CpKpGi_hJoz/?utm_source=ig_web_copy_link' },
                { name: 'sunny1996606_IMG_2486-min.jpeg', href: 'https://www.instagram.com/p/CpH6oWxyETg/?utm_source=ig_web_copy_link' },
                { name: 'jenni_0928_IMG_2476-min.jpeg', href: 'https://www.instagram.com/p/CpVHGELSNEl/?utm_source=ig_web_copy_link' },
                { name: 'cherry7162000_IMG_2482-min.jpeg', href: 'https://www.instagram.com/p/CpJY0ptPX_i/' },
                { name: 'arielle911_IMG_2487-min.jpeg', href: 'https://www.instagram.com/p/Cow0jMSSyl5/?utm_source=ig_web_copy_link' },
                { name: 'ciao_0204_IMG_2472-min.jpeg', href: 'https://www.instagram.com/p/CpYsRWXS5fg/?utm_source=ig_web_copy_link' },
                { name: 'jessica66995_IMG_2477-min.jpeg', href: 'https://www.instagram.com/p/CpSlnHjyroX/?utm_source=ig_web_copy_link' },
                { name: 'mini_bear0111_IMG_2494-min.jpeg', href: 'https://www.instagram.com/p/CoY90cHrQSK/?utm_source=ig_web_copy_link' },
                { name: 'Ianinini1357_IMG_2491-min.jpeg', href: 'https://www.instagram.com/p/Cpc4SLchgq4/?utm_source=ig_web_copy_link' },
                { name: 'ru820741_IMG_2497-min.jpeg', href: 'https://www.instagram.com/p/ComRMcvytd7/?utm_source=ig_web_copy_link' },
                { name: 'jolyn168_IMG_2504-min.jpeg', href: 'https://www.instagram.com/reel/CoPRFnRL_7t/?utm_source=ig_web_copy_link' },
                { name: 'tiff.ni22_IMG_2498-min.jpeg', href: 'https://www.instagram.com/p/CnZ2W_gB88s/' },
                { name: 'chiang_065_IMG_2505-min.jpeg', href: 'https://www.instagram.com/p/CmuFbebSqH-/?utm_source=ig_web_copy_link' },
            ]
        },
        gallary: {
            images: [
                '1.png',
                '2.png',
                '3.png',
                '4.png',
                '5.png',
                '6.png',
                '7.png',
                '8.png',
                'IMG_0188.JPG',
                'IMG_0189.JPG',
                'IMG_0199.JPG',
                'IMG_0200.JPG',
                'IMG_0298.JPG',
                'IMG_0406.JPG',
                'IMG_0407.JPG',
                'IMG_0408.JPG',
                'IMG_0409.JPG',
                'IMG_0410.JPG',
                'IMG_0411.JPG',
                'IMG_0415.JPG',
                'IMG_0416.JPG',
                'IMG_0417.JPG',
                'IMG_0419.JPG',
                '16-min.jpg',
                '08-min.JPG',
                '07-min.JPG',
                '14-min.JPG',
                '12-min.JPG',
                '11-min.JPG',
                '10-min.JPG',
                '09-min.JPG',
                '13-min.JPG',
                '06-min.JPG',
                '05-min.JPG',
                '04-min.JPG',
                '03-min.JPG',
                '02-min.JPG',
                '01-min.JPG',
                '18-min.jpg',
                '17-min.jpg',
                '15-min.jpg',
            ]
        },
        showPhoto: {
            isShow: false,
            src: '',
        },
        contact: {
            addr: [
                { city: 'Taipei', storeCount: 3, phonePickUpIdx: 3 },
                { city: 'NewTaipei', storeCount: 2, phonePickUpIdx: -1 },
                { city: 'Tainan', storeCount: 1, phonePickUpIdx: -1 },
                { city: 'Taitung', storeCount: 1, phonePickUpIdx: -1 },
            ],
            sites: [
                {
                    btnClass: 'btn-instagram',
                    iconClass: 'fa-brands fa-instagram fa-lg',
                    href: 'https://www.instagram.com/haotaohua_tw/',
                    span: 'Instagram: haotaohua_tw',
                },
                {
                    btnClass: 'btn-facebook',
                    iconClass: 'fa-brands fa-facebook fa-lg',
                    href: 'https://www.facebook.com/Haotaohua',
                    span: 'Facebook: Haotaohua',
                },
                {
                    btnClass: 'btn-youtube',
                    iconClass: 'fa-brands fa-youtube fa-lg',
                    href: 'https://www.youtube.com/@haotaohua',
                    span: 'Youtube: @haotaohua',
                },
                {
                    btnClass: 'btn-line',
                    iconClass: 'fa-brands fa-line fa-lg',
                    href: 'https://lin.ee/2D58fd0',
                    span: 'Line: haotaohua_tw',
                },
            ]
        },
    },
    created() {
        let lang = 'zh'
        let urlLang = getUrlParameter('lang')
        if (!!urlLang) lang = urlLang
        console.log({ lang })

        loadProperties(lang)

        // update current year 
        this.checkAge.birthday[2].max = new Date().getFullYear()

        // init
        this.checkAgeValidState();

        if (!this.checkAge.isShow) {
            $("body").css("overflow", "auto");
        }

        // gallary set width css
        setInterval(() => {
            $('.gallary-img').css('height', $('.gallary-img').css('width'))
        }, 1000);

    },
    mounted() {
        loadProperties('zh')

        // cuz padding
        const photos = $('#photos .item')

        for (let i = 0; i < photos.length; i++) {
            if (i % 2 == 0) {
                $(photos[i]).addClass('left')
            } else {
                $(photos[i]).addClass('right')

            }
        }
    },
    methods: {
        openShowPhoto: function (fileName) {
            this.showPhoto.isShow = true
            this.showPhoto.src = '/resource/img/gallary/' + fileName
        },
        closeShowPhoto: function () {
            console.log('closeShowPhoto')
            this.showPhoto.isShow = false
        },
        fillRandomArr: function () {
            console.log('fillRandomArr')

            return [1, 3, 5]
        },
        goto: function (target) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(target).offset().top + 3
            }, 1000);

            this.sideMenuBtn.open = true
            $(".sideMenuBtn").removeClass("sideMenuBtnClose")
            $(".sideMenu").removeClass("openSideMenu")
            setTimeout(() => {
                $(".sideMenuBtnReturn").removeClass("sideMenuBtnReturnClose")
            }, 100);
        },
        checkAgeValidState: function () {
            if (!this.checkAge.isShow) {
                console.log('isShow is default false. wont check LS')
                return
            }

            const lastVaildData = localStorage.getItem('agePassDay')

            console.log({ lastVaildData })
            if (!lastVaildData) {
                // not pass
                console.log('cant find LS agePassDay')
                this.openVaildAge()

                return
            }

            const today = moment().format('YYYY-MM-DD')
            if (moment(today).isAfter(lastVaildData)) {
                // not pass
                this.openVaildAge()
            } else {
                // pass
                this.checkAge.isShow = false
                $("body").css("overflow", "auto");
            }
        },
        openVaildAge: function () {
            $('html,body').animate({ scrollTop: 0 }, 'slow');
        },
        validAge: function () {

            for (let i = 0; i < 3; i++) {
                if (this.checkAge.birthday[i].val == '') {
                    alert('請輸入生日')
                    return
                }
            }

            const yearInput = this.checkAge.birthday[2].val;
            const yearCurrent = this.checkAge.birthday[2].max;

            if (yearCurrent - yearInput <= 18) {
                alert("未成年者請勿瀏覽本網站")
                return
            }

            // pass
            this.checkAge.isShow = false;
            localStorage.setItem('agePassDay', moment().format('YYYY-MM-DD'))
            $("body").css("overflow", "auto");
            console.log('validAge pass')
            setTimeout(() => {
                loadProperties('zh')
            }, 500);
        },
        changeAgeHandler: function () {
            try {
                for (let i = 0; i < 3; i++) {
                    // console.log(this.checkAge.birthday[i].val)
                    if (parseInt(this.checkAge.birthday[i].val) > parseInt(this.checkAge.birthday[i].max)) {
                        // console.log('reset to =>' + this.checkAge.birthday[i].max)
                        if (i <= 1) {
                            this.checkAge.birthday[i].val = this.checkAge.birthday[i].max
                        } else {
                            this.checkAge.birthday[i].val = this.checkAge.birthday[i].min
                        }
                    }
                }
            } catch (error) {
                console.log(error)
                for (let i = 0; i < 3; i++) {
                    this.checkAge.birthday[i].val = this.checkAge.birthday[i].max
                }
            }
        },
        changeLang: function (lang) {
            if (lang == 'zh' || lang == 'en') {
                loadProperties(lang)
            } else {
                loadProperties('zh')
            }

            if (lang == 'zh') {
                this.checkAge.langDropDownChoose = '中文'
            } else {
                this.checkAge.langDropDownChoose = 'English'
            }
        },
        displaySideMenu: function (isOpen) {
            if (isOpen) {
                this.sideMenuBtn.open = false
                $(".sideMenuBtn").addClass("sideMenuBtnClose")
                $(".sideMenu").addClass("openSideMenu")

                setTimeout(() => {
                    $(".sideMenuBtnReturn").addClass("sideMenuBtnReturnClose")
                }, 100);

            } else {
                this.sideMenuBtn.open = true
                $(".sideMenuBtn").removeClass("sideMenuBtnClose")
                $(".sideMenu").removeClass("openSideMenu")
                setTimeout(() => {
                    $(".sideMenuBtnReturn").removeClass("sideMenuBtnReturnClose")
                }, 100);
            }
        }
    },
});