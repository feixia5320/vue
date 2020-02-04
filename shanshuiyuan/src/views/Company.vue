<template>
  <div  class="view-contain">
    <Header></Header>
    <div class="detail-contain">
      <h3>公司简介</h3>
      <h4>Company Profile</h4>
      <p>
        陕西山水源环保科技有限公司，是一家全方位环保技术咨询服务的综合企业。公司以环境技术咨询和环
        保工程为业务主导，全方位、多领域开展工程咨询、环境影响评价、排污许可、环保管家、清洁生产、环
        境监理、水土保持、安全评价、突发环境事件应急预案等业务。
      </p>
      <p>
        我公司现有各类技术人员，形成了一支专业齐全、经验丰富、用于开拓的高素质人才队伍，为公司的整体良
        性发展提供了坚实的保障。
      </p>
      <img src="../assets/company.jpg" alt style="width: 70%" />
      <h3>业务范围</h3>
      <h4>Core Business</h4>
      <p>
        环境影响评价、竣工环保验收、环保管家、排污许可、水土保持方案、水土保持设施摊手、应急预案、
        可行性研究报告、安全评估、风险评价、环保工程、各类环保咨询。
      </p>
      <img src="../assets/company2.png" alt style="width: 70%" />

      <h3>企业文化</h3>
      <h4>company culture</h4>
      <p>
        必须树立和践行绿水青山就是金山银山的理念，坚持节约资源和保护环境的基本国策，像对待生命一样对待生
        态环境，统筹山水林田湖草系统治理，实行最严格的生态环境保护制度，形成绿色发展方式和生活方式，坚定
        走生产发展、生活富裕、生态良好的文明发展道路，建设美丽中国，为人民创造良好生产生活环境，为全球生
        态安全作出贡献。
      </p>
      <img src="../assets/company3.jpg" alt style="width: 70%" />
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "Company",
  data() {
    return {};
  },
  components: {
    Header,
    Footer
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
