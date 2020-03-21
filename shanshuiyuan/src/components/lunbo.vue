<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(el,index) in list" class="swiper-slide" :key="index">
        <img class="img" :src="el.src" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { Const } from "../utils/const";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "lunbo",
  data() {
    return {
      list: Const.carousel
    };
  },
  mounted: function() {
    var mySwiper = new Swiper(".swiper-container", {
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      direction: "horizontal" /*横向滑动*/,
      loop: true, //形成环路（即：可以从最后一张图跳转到第一张图
      autoplay: 3000 /*每隔3秒自动播放*/
    });
  }
};
</script>
<style scoped>
</style>