<template>
  <div class="detail-contain">
    <h3>应急预案</h3>
    <p>
      应急预案
      是指由于污染物排放或自然灾害、生产安全事故等因素，导致污染物或放射性物质等有毒有害物
      质进入大气、水体、土壤等环境介质，突然造成或可能造成环境质量下降，危及公众身体健康和财
      产安全，或造成生态环境破坏，或造成重大社会影响，需要采取紧急措施予以应对的事件，主要包括
      大气污染、水体污染、土壤污染等突发性环境污染事件和辐射污染事件。
    </p>
    <img src="../../assets/bus_yingjiyuan.jpg" style="width: 40%" alt="">
    <p>
      突发环境事件发生后，涉事企业事业单位或其他生产经营者必须采取应对措施，并立即向当地环境
      保护主管部门和相关部门报告，同时通报可能受到污染危害的单位和居民。
    </p>
  </div>
</template>

<script>
export default {
  name: "Yingjiyuan",
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
