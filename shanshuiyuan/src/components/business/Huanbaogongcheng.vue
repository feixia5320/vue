<template>
  <div class="detail-contain">
    <h3>环保工程</h3>
    <p>环保工程是指特定为环境保护所做的工程，由于工业发展导致环境污染，而以某组设想目标为依据，应用有关的科学知识和技术手段，通过一群人的有组织活动将环境污染问题去处理解决的一些工程。</p>
    <p>环保工程的内容主要包括大气污染防治工程、水污染防治工程、固体废物的处理和利用工程，以及噪声控制工程等。</p>
    <img src="../../assets/bus_huanbaogongcheng.jpg" alt />
    <p>
      有机废气治理
      有机废气治理，是指用多种技术措施，通过不同途径减少石油损耗、减少有机溶剂用量或排气净化以消除有机废气污染。有机废气污染源分布广泛。为防止污染，除减少石油损耗、减少有机溶剂用量以减少有机废气的产生和排放外，排气净化是切实可行的治理途径。
    </p>
    <img src="../../assets/bus_huanbaogongcheng2.jpg" alt />
    <p>
      常用方法
      除了常用如吸附法、吸收法、催化燃烧法、热力燃烧法之外，还有生物试剂喷淋法。选用净化方法时，应根据具体情况优先选用费用低、耗能少、无二次污染的方法，尽量做到化害为利，充分回收利用成分和余热。多数情况下，石油化工业因排气浓度高，采用冷凝、吸收、直接燃烧等方法;涂料施工、印刷等行业因排气浓度低，采用吸附、催化燃烧等方法。其中吸附法只是把有机废气吸收到活性炭或者沸石中，并没有真正消除有机废气，反而会产生二次污染，需要定期更换处理废活性炭。
    </p>
  </div>
</template>

<script>
export default {
  name: "Huanbaogongcheng",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
