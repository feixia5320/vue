<template>
  <div>
    <h1>title :{{ msg }}</h1>
    
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "base-checkbox",
  model: {},
  props: {
    propF: {
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      msg: "nav vue",
      items: [
        {
          key: 1,
          label: "aaaa"
        },
        {
          key: 2,
          label: "bbb"
        },
        {
          key: 3,
          label: "ccc"
        }
      ]
    };
  },
  methods: {
    
  },
  computed: {},

  watch: {}
};
</script>

