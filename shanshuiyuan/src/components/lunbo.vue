<template>
  <div class="box">
    <swiper :options="swiperOption" class="swiper">
      <swiper-slide class="swiperslide" v-for="(item,index) in list" :key="index">
        <div class="itemimg">
          <img :src="item" width="100%" height="100%" />
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import { Const } from "../utils/const";
import Vue from "vue";
export default {
  name: "lunbo",
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 1000, //切换速度
        slidesPerView: 1,
        // spaceBetween: 300,
        // 参数选项,显示小点
        autoplay: true,
        // autoplay: {
        //   delay: 3000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: false
        // },
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          //关键在这儿，通过点击事件拿到对应的元素，从而确定具体index
          tap: function(e) {
            console.log(e, e.target, "click");
            let dom = e.target.parentNode;
            // console.log(dom.dataset.id);
          },
          touchEnd: function (event) {
              //你的事件
          },
        }
      },
      swiperSlides: [1, 2, 3, 4, 5],
      list: Const.carousel
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
}

.box .swiper {
  width: 100%;
  height: 100%;
}

.box .swiper-pagination {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
}

.swiper .swiperslide {
  background-color: #ffffff;
  box-shadow: 0.02rem 0.1rem 1.78rem 0.02rem rgba(0, 0, 0, 0.09);
}

.itemimg {
  width: 100%;
  position: relative;
}
</style>
