<template>
  <div class="container">
    <div>
      <span>自定义管道，dateFormat:</span>
      <span>{{nowDate | dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
    </div>
    <div>
      <span>管道，moment:</span>
      <span>{{new Date() | moment("YY-MM-DD HH:mm:ss")}}</span>
    </div>
    <div>
      <span>管道，money:</span>
      <span>{{2 | formatMoney}}</span>
    </div>
    <div>
      <span v-for="(item,index) of nowList" :key="index">{{item.type}}===》{{item.now}}</span>
     
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import * as moment from 'moment';
import 'moment/locale/pt-br';

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
      nowList:[],
      now: null,
      now2: null,
      nowDate:new Date().getTime()
      
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      let date = new Date().getTime();
      this.nowList.push({
        type:'gettime',
        now: date
      });

      this.nowList.push({
        type: 'YY-MM-DD hh:mm:ss a',
        now: this.$moment().format('YY-MM-DD hh:mm:ss a')
      });

      this.nowList.push({
        type:'YY-MM-DD hh:mm:ss',
        now: this.$moment(date).format('YY-MM-DD hh:mm:ss')
      });

      this.nowList.push({
        now: this.$moment().format('LLLL')
      });

      this.nowList.push({
        type: 'add',
        now: this.$moment().add(2,'hours'), // 加7小时
      });

      this.nowList.push({
        type: 'moment(string)',
        now: this.$moment('2013-02-08 09:30:26'), // 加7小时
      });
      this.nowList.push({
        type: 'moment(string)',
        now: moment("2010-10-20 4:30",       "YYYY-MM-DD HH:mm"),
      });
      this.nowList.push({
        type: 'moment(string,format)',
        now: moment("2010-10-20 4:30 +0000", "YYYY-MM-DD HH:mm Z"),
      });
      this.nowList.push({
        type: 'moment().format()',
        now: moment().format(),
      });
      this.nowList.push({
        type: 'moment.utc().format()',
        now: moment.utc().format(),
      });
      this.nowList.push({
        type: 'moment().hour()',
        now: moment().hour(0).minute(0).second(0).format()
      });
      this.nowList.push({
        type: "moment().add(7, 'days').subtract(1, 'months').year(2009).hours(0).minutes(0).seconds(0)",
        now: moment().add(7, 'days').subtract(1, 'months').year(2009).hours(0).minutes(0).seconds(0)
      });
      this.nowList.push({
        type: "moment().startOf('hours')",
        now:  moment().startOf('hours')
      });
    }
  },
  computed: {
    
  },

  watch: {
    
  }
}

</script>

<style>
.container span {
  margin-right: 30px;
  display: inline-block
}
</style>