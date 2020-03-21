import { lan_zh } from "../i18n/zh";
export class Const {
  static proxyImg = "http://localhost:3000/uploads/";
  static carousel = [
    {
      src: require("../assets/1.jpg")
    },
    {
      src: require("../assets/2.jpg")
    },
    {
      src: require("../assets/3.jpg")
    },
    {
      src: require("../assets/4.jpg")
    },
    {
      src: require("../assets/5.jpg")
    }
  ];
  static carousel2 = [
    require("../assets/2.jpg"),
    require("../assets/3.jpg"),
    require("../assets/4.jpg"),
    require("../assets/5.jpg")
  ];
  static footerLinks = [
    { name: "中央人民政府", url: "http://www.gov.cn/" },
    { name: "生态环境部", url: "http://www.mee.gov.cn/" },
    { name: "国家发展和改革委员会", url: "https://www.ndrc.gov.cn/" },
    { name: "工业和信息化部", url: "http://www.miit.gov.cn/" },
    { name: "水利部", url: "http://www.mwr.gov.cn/" },
    { name: "陕西省人民政府", url: "http://www.shaanxi.gov.cn/" },
    { name: "陕西省生态环境厅", url: "http://sthjt.shaanxi.gov.cn/" },
    { name: "陕西省发展和改革委员会", url: "http://sndrc.shaanxi.gov.cn/" },
    { name: "陕西省工业和信息化厅", url: "http://gxt.shaanxi.gov.cn/" },
    { name: "陕西省水利厅", url: "http://slt.shaanxi.gov.cn/" },
    { name: "西安市生态环境局", url: "http://xaepb.xa.gov.cn/" },
    { name: "咸阳市生态环境局", url: "http://sthj.xianyang.gov.cn/" },
    { name: "渭南市生态环境局", url: "http://hbj.weinan.gov.cn/" },
    {
      name: "铜川市生态环境局",
      url: "http://www.tongchuan.gov.cn/zwgk_list.rt?channlId=2023&channlCid=973"
    },
    { name: "延安市生态环境局", url: "http://sthj.yanan.gov.cn/" },
    { name: "榆林市生态环境局", url: "http://hb.yl.gov.cn/" },
    { name: "汉中市生态环境局", url: "http://hbj.hanzhong.gov.cn/" },
    { name: "安康市生态环境局", url: "http://hbj.ankang.gov.cn/" },
    { name: "商洛市生态环境局", url: "http://sthjj.shangluo.gov.cn/" },
    { name: "韩城市生态环境局", url: "http://sthjj.hancheng.gov.cn:9002/" },
  ];
  static footer = [
    {
      title: "关于我们",
      list: [
        {
          name: "11111",
          url: "11"
        },
        {
          name: "22",
          url: "22"
        },
        {
          name: "3323333",
          url: "33"
        },
        {
          name: "44",
          url: "44"
        }
      ]
    },
    {
      title: "业务版块",
      list: [
        {
          name: "55",
          url: "55"
        }
      ]
    },
    {
      title: "新闻咨询",
      list: [
        {
          name: "33",
          url: "33"
        }
      ]
    },
    {
      title: "相关链接",
      list: [
        {
          name: "44",
          url: "44"
        }
      ]
    }
  ];

  static businessList = [
    {
      title: "环境影响评价",
      state: "huanping",
      url: require("../assets/bus_1.png")
    },
    {
      title: "竣工环保验收",
      state: "jungongyanshou",
      url: require("../assets/bus_2.png")
    },
    {
      title: "环保管家",
      state: "huanbaoguanjia",
      url: require("../assets/bus_3.png")
    },
    {
      title: "排污许可",
      state: "paiwuxuke",
      url: require("../assets/bus_4.png")
    },
    {
      title: "水土保持方案",
      state: "shuitubaochi",
      url: require("../assets/bus_5.png")
    },
    {
      title: "水土保持设施验收",
      state: "shuitubaochisheshi",
      url: require("../assets/bus_6.png")
    },
    {
      title: "应急预案",
      state: "yingjiyuan",
      url: require("../assets/bus_7.png")
    },
    {
      title: "可行性研究报告",
      state: "keyan",
      url: require("../assets/bus_8.png")
    },
    {
      title: "安全评估",
      state: "anquanpinggu",
      url: require("../assets/bus_9.png")
    },
    {
      title: "环保工程",
      state: "huanbaogongcheng",
      url: require("../assets/bus_10.png")
    }
  ];

  static news = [
    {
      title: "标题",
      date: "2019-10-02",
      url: "https://element.eleme.cn/#/zh-CN/component/layout"
    },
    {
      title: "标题",
      date: "2019-10-02",
      url: ""
    },
    {
      title: "标题",
      date: "2019-10-02",
      url: ""
    }
  ];

  static joinus = [
    {
      val: lan_zh.lan.info_componey,
      url: require("../assets/join_goo.png")
    },
    {
      val: lan_zh.lan.info_phone,
      url: require("../assets/join_phone.png")
    },
    {
      val: lan_zh.lan.info_email,
      url: require("../assets/join_mail.png")
    }
  ];
}
