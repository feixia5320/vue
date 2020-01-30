<template>
  <div style="height: 420px">
    <div v-on:mouseover="stop()" v-on:mouseout="play()" class="app">
      <div>
        <transition-group tag="ul" name="image">
          <li v-for="(items,index) in list" v-show="index===currentIndex" :key="items">
            <img :src="items" alt />
          </li>
        </transition-group>
      </div>
      <div v-show="showNextBtn" class="btn-contain">
        <span @click="pre()" class="pre-btn">
          <i class="el-icon-back"></i>
        </span>
        <span @click="next()" class="next-btn">
          <i class="el-icon-right"></i>
        </span>
      </div>
    </div>
    <div style="margin-top: -40px">
      <span
        v-for="(items,index) in list.length"
        :key="index"
        class="nav"
        @click="change(index)"
        :class="{'active':index==currentIndex}"
      >{{items}}</span>
    </div>
  </div>
</template>

<script>
import { Const } from "../utils/const";
export default {
  name: "Carousel",
  data() {
    return {
      intervalFlag: "",
      currentIndex: 0,
      showNextBtn: false,
      list: Const.carousel
    };
  },
  methods: {
    play() {
      this.intervalFlag = setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex == this.list.length) {
          this.currentIndex = 0;
        }
      }, 2000);
      this.showNextBtn = false;
    },
    change(i) {
      this.currentIndex = i;
    },
    stop() {
      this.showNextBtn = true;
      clearInterval(this.intervalFlag);
    },
    pre() {
      if (this.currentIndex == 0) {
        this.currentIndex = this.list.length - 1;
      } else {
        this.currentIndex -= 1;
      }
    },
    next() {
      if (this.currentIndex == this.list.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex += 1;
      }
    }
  },
  created() {
    this.play();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.app {
  height: 420px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.app div {
  height: 420px;
  width: 100%;
}
img {
  width: 100%;
}
ul {
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
li {
  width: 100%;
  height: 420px;
  border: 5px solid white;
  color: white;
  position: absolute;
}

.nav {
  background-color: #c3c3c3;
  color: white;
  margin-left: 10px;
  font-size: 20px;
  border-radius: 50%;
  padding: 0 8px;
  margin-bottom: 10px;
  opacity: 0.5;
  cursor: pointer;
}
.active {
  opacity: 0.9;
}
.image-enter-active {
  transition: all 1.5s linear;
}
.image-leave-active {
  transition: all 1.5s linear;
}
.image-enter-to {
  transform: translateX(0);
}
.image-enter {
  transform: translateX(100%);
}
.image-leave {
  transform: translateX(0);
}
.image-leave-to {
  transform: translateX(-100%);
}

.btn-contain {
  margin-top: 200px;
  position: absolute;
}
.btn-contain span {
  color: white;
  background-color: #6d6666;
  font-size: 50px;
  border-radius: 50%;
  opacity: 0.5;
}
.pre-btn {
  float: left;
  margin-left: 30px;
}
.next-btn {
  float: right;
  margin-right: 30px;
}
</style>

