<template>
  <div class="contain">
    <div class="item" @click="clickBus(0)">
      <div class="img0"></div>
      <br />
      <span>{{list[0].title}}</span>
    </div>
    <div class="item" @click="clickBus(1)">
      <div class="img1"></div>
      <br />
      <span>{{list[1].title}}</span>
    </div>
    <div class="item" @click="clickBus(2)">
      <div class="img2"></div>
      <br />
      <span>{{list[2].title}}</span>
    </div>
    <div class="item" @click="clickBus(3)">
      <div class="img3"></div>
      <br />
      <span>{{list[3].title}}</span>
    </div>
    <div class="item" @click="clickBus(4)">
      <div class="img4"></div>
      <br />
      <span>{{list[4].title}}</span>
    </div>
    <div class="item" @click="clickBus(5)">
      <div class="img5"></div>
      <br />
      <span>{{list[5].title}}</span>
    </div>
    <div class="item" @click="clickBus(6)">
      <div class="img6"></div>
      <br />
      <span>{{list[6].title}}</span>
    </div>
    <div class="item" @click="clickBus(7)">
      <div class="img7"></div>
      <br />
      <span>{{list[7].title}}</span>
    </div>
    <div class="item" @click="clickBus(8)">
      <div class="img8"></div>
      <br />
      <span>{{list[8].title}}</span>
    </div>
    <div class="item" @click="clickBus(9)">
      <div class="img9"></div>
      <br />
      <span>{{list[9].title}}</span>
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
.item {
  width: 100px;
  height: 100px;
  display: inline-block;
  margin: 10px 60px 50px 50px;
  text-align: center;
  cursor: pointer;
  vertical-align: top;
}
.item div {
  width: 100px;
  height: 100px;
  border: 1px solid;
  background-image: url("../assets/icons.png");
  background-repeat: no-repeat;
  border-radius: 50%;
}
.item span {
  width: 100%;
  height: 100px;
}
.img0 {
  background-position: -10px -5px;
  transition: transform 2s ease-out;
}
.img0:hover {
  transform: rotateY(360deg);
}
.img1 {
  background-position: -113px -7px;
  transition: transform 2s ease-out;
}
.img1:hover {
  transform: rotateY(360deg);
}
.img2 {
  background-position: -220px -6px;
  transition: transform 2s ease-out;
}
.img2:hover {
  transform: rotateY(360deg);
}
.img3 {
  background-position: -331px -3px;
  transition: transform 2s ease-out;
}
.img3:hover {
  transform: rotateY(360deg);
}
.img4 {
  background-position: -449px -3px;
  transition: transform 2s ease-out;
}
.img4:hover {
  transform: rotateY(360deg);
}
.img5 {
  background-position: -558px -5px;
  transition: transform 2s ease-out;
}
.img5:hover {
  transform: rotateY(360deg);
}
.img6 {
  background-position: -658px -3px;
  transition: transform 2s ease-out;
}
.img6:hover {
  transform: rotateY(360deg);
}
.img7 {
  background-position: -761px -7px;
  transition: transform 2s ease-out;
}
.img7:hover {
  transform: rotateY(360deg);
}
.img8 {
  background-position: -873px -8px;
  transition: transform 2s ease-out;
}
.img8:hover {
  transform: rotateY(360deg);
}
.img9 {
  background-position: -980px -6px;
  transition: transform 2s ease-out;
}
.img9:hover {
  transform: rotateY(360deg);
}
</style>
