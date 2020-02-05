<template>
  <div class="view-contain">
    <Header></Header>
    <div class="detail-contain">
      <h3>{{title}}</h3>
      <div v-for="(item, index) in content" :key="index">
        <p v-if="item.type == 'txt'" style="word-break: break-all;">{{item.val}}</p>
        <img v-if="item.type == 'img' && item.val" :src="proxy + item.val" alt />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../Header";
import Footer from "../Footer";
import { Const } from "../../utils/const";
export default {
  name: "Activedetail",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: "",
      content: [],
      proxy: Const.proxyImg
    };
  },
  methods: {
    getActiveDetail() {
      let id = this.$route.params.id;
      this.$axios
        .get("/ip/getActiveDetail", {
          params: {
            id: id
          }
        })
        .then(response => {
          let res = response.data;
          if (res.status == "0") {
            this.title = res.msg[0].title;
            this.content = JSON.parse(res.msg[0].content);
          }
        });
    },
  },
  mounted() {
    this.getActiveDetail();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  width: 60%;
  margin: 0 auto;
}
</style>
