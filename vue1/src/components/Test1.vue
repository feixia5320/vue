<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 表单 -->
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <div>
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>
      <p>reverse is: {{ reversedMessage }} </p>
      <p>watch : {{ watchMsg }}</p>
    </div>

    <div>
      <select v-model="selected">
        <option v-for="option in options" 
          v-bind:value="option.value"
          v-bind:key="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <!-- 自定义组建component -->
    <div>
      <h2>2.自定义组建component</h2>
      <button-counter></button-counter>
      <p>v-for使用，监听子组建事件</p>
      <div :style="{ fontSize: postFontSize + 'em' }">
        <blog-post
          v-for="post in posts"
          v-bind:key="post.id"
          v-bind:post="post"
          v-on:enlarge-text="onEnlargeText"
        ></blog-post>
      </div>
      <custom-input v-model="searchText"></custom-input>
    </div>

  </div>
</template>

<script>
import Vue from "vue";

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

// 监听子组建事件
Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button  v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `,

})
// v-model
Vue.component('custom-input', {
  props: ['value'],
  template: `
    <input
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    >
  `
})
export default {
  name: 'Test1',
  data () {
    return {
      msg: 'test1 vue',
      checkedNames: [],
      message:"",
      watchMsg:"",
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ],
      postFontSize: 1,
      posts: [
        { id: 1, title: 'My journey with Vue' },
        { id: 2, title: 'Blogging with Vue' },
        { id: 3, title: 'Why Vue is so fun' }
      ],
      searchText:"testmodel"
    }
  },
  methods:{
    watchMsgFn:function(name) {
      this.watchMsg = name;
    },
    
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  },

  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    message: function (n, oldQuestion) {
      this.watchMsgFn(n)
    }
  }
}

</script>

