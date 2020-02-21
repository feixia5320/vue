<template>
  <div>
    <span>管道，dateFormat</span>
    <div class="time">{{nowDate | dateFormat('YYYY-MM-DD HH:mm')}}</div>

    <span>管道，moment</span>
    <p>{{new Date() | moment("YY-MM-DD HH:mm:ss")}}</p>
    <p>{{now}}</p>

  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: 'moment-time',
  model: {
    
  },
  props:{
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  },
  data () {
    return {
      msg: 'moment',
      now: null,
      nowDate:new Date().getTime()
      
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      let now = new Date().getTime()
      this.now = this.$moment(now).format('YY-MM-DD hh:mm:ss a')
    }
  },
  computed: {
    
  },

  watch: {
    
  }
}

</script>

