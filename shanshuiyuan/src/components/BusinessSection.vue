<template>
  <div class="contain">
    <div v-for="(items,index) in list" :key="index" class="item" @click="clickBus(items)">
      <img :src="items.url" alt />
      <br />
      <span>{{items.title}}</span>
    </div>
  </div>
</template>

<script>
import { Const } from "../utils/const";

export default {
  name: "BusinessSection",
  data() {
    return {
      list: Const.businessList,
    };
  },
  methods: {
    clickBus(items) {
      this.$store.commit('updateState', '/business');
      this.$router.push('/business/' + items.state)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  width: 90%;
  height: 300px;
  margin: 0 auto;
}
.item {
  width: 17%;
  height: 100px;
  display: inline-block;
  margin: 10px;
  text-align: center;
  cursor: pointer;
}
.item img {
  background-color: #12cde0;
  border-radius: 50%;
}
.item span {
  width: 100%;
  height: 100px;
}
</style>
