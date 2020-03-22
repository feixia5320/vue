<template>
  <div class="detail-contain">
    <h3>排污许可</h3>
    <p>
      排污许可，
      是指环境保护主管部门依排污 单位的申请和承诺，通过发放排污许可证法律文书形式，依法依规 规
      范和限制排污单位排污行为并明确环境管理要求，依据排污许可 证对排污单位实施监管执法的环境管理制度
      。 本规定所称排污单位特指纳入排污许可分类管理名录的企业事业单位和其他生产经营者。
    </p>
    <img src="../../assets/bus_paiwuxuke.jpg" style="width: 50%" alt="">
    <p>下列排污单位应当实行排污许可管理：</p>
    <ol>
      <li>排放工业废气或者排放国家规定的有毒有害大气污染物的企业事业单位。</li>
      <li>集中供热设施的燃煤热源生产运营单位。</li>
      <li>直接或间接向水体排放工业废水和医疗污水的企业事业单位。</li>
      <li>城镇或工业污水集中处理设施的运营单位。</li>
      <li>依法应当实行排污许可管理的其他排污单位。</li>
    </ol>
    <img src="../../assets/bus_paiwuxuke2.jpg" alt="">
    <p>
      环境保护部依法制定并公布固定污染源排污许可分类管理名录，明确纳入排污许可管理的范围和申
      领时限。纳入固定污染源排污许可分类管理名录的企业事业单位和其他生产经营者（以下简称排污单
      位）应当按照规定的时限申请并取得排污许可证；未纳入固定污染源排污许可分类管理名录的排污单
      位，暂不需申请排污许可证。排污单位应当依法持有排污许可证，并按照排污许可证的规定排放污染
      物。应当取得排污许可证而未取得的，不得排放污染物。
    </p>
  </div>
</template>

<script>
export default {
  name: "Paiwuxuke",
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
