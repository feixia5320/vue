<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="(el,index) in list" class="swiper-slide" :key="index">
        <img style="width: 100%" class="img" :src="el.src" />
      </div>
    </div>
    <!-- 分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 滚动条 -->
    <div class="swiper-scrollbar"></div>
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
      autoplay: true, /*每隔3秒自动播放*/
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      }, 
    });
  }
};
</script>
<style scoped>
</style>