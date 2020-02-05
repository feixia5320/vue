<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    '$route' (to, from) {
      let arr = to.path.split("/");
      let key = "/" + arr[1];
      if('activedetail' == arr[1]){
        key = "/notice";
      }
      this.$store.commit("updateState", key);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1280px;
}
.view-contain {
  width: 98%; 
  margin:0 auto;
}
.detail-contain {
  width: 80%;
  margin: 0 auto;
  border: 1px dashed gray;
  border-radius: 20px;
  padding: 20px;
}
.detail-contain p {
  text-align: left;
  line-height: 30px;
  text-indent:2em;
}
.detail-contain ol {
  text-align: left;
  line-height: 30px;
}
.detail-contain img {
  width: 70%;
}
</style>
