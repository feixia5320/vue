<template>
  <div class="contain">
    <div v-for="(items, index) in list" :key="index" class="itemnew" @click="clickBus(index)">
      <img :src="items.url" alt="" />
      <span>{{ items.title }}</span>
    </div>
  </div>
</template>

<script>
import { Const } from "../utils/const";

export default {
  name: "BusinessSection",
  data() {
    return {
      list: Const.businessList
    };
  },
  methods: {
    fun(i) {
      return this.position[i];
    },
    clickBus(key) {
      this.$store.commit("updateState", "/business");
      this.$router.push("/business/" + this.list[key].state);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  width: 90%;
  height: 350px;
  margin: 0 auto;
}
.itemnew {
  width: 20%;
  height: 100px;
  display: inline-block;
  text-align: center;
  text-align: -webkit-center;
  cursor: pointer;
}

.itemnew img {
  margin: 0 auto;
  display: block;
  width: 100px;
  height: 100px;
  background-position: -10px -5px;
  transition: transform 2s ease-out;
}
.itemnew img:hover{
 transform: rotateY(360deg);
}
.itemnew span {
  width: 100%;
  height: 100px;
}

</style>
