import {lan_zh} from "../i18n/zh"
export class Const {
    static proxyImg = "http://localhost:3000/uploads/";
    static carousel = [
        require("../assets/1.jpg"),
        require("../assets/2.jpg"),
        require("../assets/3.jpg"),
        require("../assets/4.jpg"),
        require("../assets/5.jpg"),
    ]
    static footer = [
        {
            title: '关于我们',
            list: [{
                name: '11111',
                url: '11'
            }, {
                name: '22',
                url: '22'
            }, {
                name: '3323333',
                url: '33'
            }, {
                name: '44',
                url: '44'
            }]
        }, {
            title: '业务版块',
            list: [{
                name: '55',
                url: '55'
            }]
        }, {
            title: '新闻咨询',
            list: [{
                name: '33',
                url: '33'
            }]
        }, {
            title: '相关链接',
            list: [{
                name: '44',
                url: '44'
            }]
        },
    ]

    static businessList = [
        {
            title: '环境影响评价',
            state: 'huanping',
            url: require('../assets/bus_1.png')
        }, {
            title: '竣工环保验收',
            state: 'jungongyanshou',
            url: require('../assets/bus_2.png')
        }, {
            title: '环保管家',
            state: 'huanbaoguanjia',
            url: require('../assets/bus_3.png')
        }, {
            title: '排污许可',
            state: 'paiwuxuke',
            url: require('../assets/bus_4.png')
        }, {
            title: '水土保持方案',
            state: 'shuitubaochi',
            url: require('../assets/bus_5.png')
        }, {
            title: '水土保持设施验收',
            state: 'shuitubaochisheshi',
            url: require('../assets/bus_6.png')
        }, {
            title: '应急预案',
            state: 'yingjiyuan',
            url: require('../assets/bus_7.png')
        }, {
            title: '可行性研究报告',
            state: 'keyan',
            url: require('../assets/bus_8.png')
        },{
            title: '安全评估',
            state: 'anquanpinggu',
            url: require('../assets/bus_9.png')
        },{
            title: '环保工程',
            state: 'huanbaogongcheng',
            url: require('../assets/bus_10.png')
        },

    ]

    static news = [
        {
            title: "标题",
            date: '2019-10-02',
            url: "https://element.eleme.cn/#/zh-CN/component/layout",
        },{
            title: "标题",
            date: '2019-10-02',
            url: "",
        },{
            title: "标题",
            date: '2019-10-02',
            url: "",
        }
    ]

    static joinus= [
        {
            val: lan_zh.lan.info_componey,
            url: require("../assets/join_goo.png")
        },{
            val: lan_zh.lan.info_phone,
            url: require("../assets/join_phone.png")
        },{
            val: lan_zh.lan.info_email,
            url: require("../assets/join_mail.png")
        },
    ]

}