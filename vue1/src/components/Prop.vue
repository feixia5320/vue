<template>
  <div>
    <h1>title :{{ msg }}</h1>
    <input
      type="checkbox"
      v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)"
    >
  </div>
</template>

<script>
import axios from 'axios';

export default {
  /**
   * 定义 v-model
   */
  name: 'base-checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props:{
    checked: Boolean,
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
  data () {
    return {
      msg: 'prop vue',
      
    }
  },
  methods:{
    getdata: function(){
       axios.get("/rest/vnf")
       .then( (res) =>{
       })

       this.$axios.get("sdf")
       .then( res => {

       })

    }
  },
  computed: {
    
  },

  watch: {
    
  }
}

</script>

