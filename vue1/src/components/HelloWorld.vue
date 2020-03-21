<template>
  <div class="hello">
    <h1>title:{{ msg }}</h1>

    <test> </test>
    <base-checkbox
      v-model="lovingVue"
      v-on:change="eventchange"
    ></base-checkbox>
  </div>
</template>

<script>
/**
 * 引用其他组建
 */
import test from "./Test1.vue";
import prop from "./Prop.vue";

export default {
  name: "HelloWorld",
  components: {
    test,
    "base-checkbox": prop
  },
  data() {
    return {
      msg: "hello world vue",
      lovingVue: true
    };
  },
  methods: {
    eventchange: function(params) {}
  }
};
</script>
