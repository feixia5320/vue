<template>
  <div class="maincontain">
    <div id="myChart" class="echartBox chart"></div>
  </div>
</template>

<script>
export default {
  name: "Newslist",
  data() {
    return {
    };
  },
  methods: {
    getVisitNum() {
      this.$axios.get("/ip/getVisitNum").then(response => {
        let res = response.data;
        if (res.status == "0") {
          let obj = {
            xList: res.result.dateList,
            yList: res.result.countList
          };
          this.drawLine(obj);
        }
      });
    },
    drawLine(item) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      let option = {
        title: {
          text: "网站访问量统计表"
        },
        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   data: ["邮件营销", "联盟广告"]
        // },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: item.xList
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "访问量",
            type: "line",
            smooth: true,
            data: item.yList
          }
        ]
      };

      myChart.setOption(option, (window.onresize = myChart.resize));
    }
  },
  mounted(){
    this.getVisitNum();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.maincontain{
  width: 80%;
  margin: 0 auto;
}
.chart {
   height: 400px
}
</style>
