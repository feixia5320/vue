<template>
  <div class="detail-contain">
    <h3>环保管家</h3>
    <p>
      所谓“环保管家”，
      就是一种“合同环境服务”，主要指环保服务企业为政府、为企业、为园区提供合同式综合环保服务，并视最终
      取得的污染治理成效或收益来收费，是新兴的一种治理环境污染的新商业模式。
    </p>
    <p>
      2016年4月15日，环境保护部印发了《关于积极发挥环境保护作用促进供给侧结构性改革的指导意见》
      （环大气[2016]45号），该意见中指出：“推进环境咨询服务业发展，鼓励有条件的工业园区聘请第
      三方专业环保服务公司作为“环保管家”，向园区提供监测、监理、环保设施建设运营、污染治理等一
      体化环保服务和解决方案”。由此，在环境保护领域正式提出了“环保管家”的概念。
    </p>
    <img src="../../assets/bus_guanjia.jpg" alt="">
    <p>
      “环保管家”通过常态化的“体检”和“问诊”，及时提出预警和针对性
      措施，以此避免环境事故的发生，让专业的人做专业的事。
    </p>
    <p>
      在环保越来越严的形势下，环保能力也是企业生存发展的必备能力。作为专业的“环保管家”，
      对企业环保问题“望闻问切”，对环保疑难杂症进行“科学会诊”，既能找准污染治理主要环节和
      风险隐患突出问题，图文并茂形成“体检报告”，也能开出诊治“药方”，既能有效降低企业治污成本
      ，也能有效提升企业治污能力。
    </p>
  </div>
</template>

<script>
export default {
  name: "Huanbaoguanjia",
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
