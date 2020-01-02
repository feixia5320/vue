<template>
  <div>
    <h1>title :{{ msg }}</h1>

    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>

    <h2>作用域插槽访问子组建内容，后备内容，</h2>
    <current-user>
      <template v-slot:default="slotProps">{{ slotProps.user.firstName }}</template>
    </current-user>
    <p>解构赋值方式</p>
    <current-user v-slot="{ user }">{{ user.firstName }}</current-user>
    <h2>vuex :</h2>
    <p>count: {{count}}</p>
    <p>countAlias: {{countAlias}}</p>
    <p>countPlusLocalState:{{countPlusLocalState}}</p>
    <p>getter==getTodoById:{{getTodoById}}</p>
    <p>doneTodos:{{doneTodos}}</p>
    <ul>
      <li v-for="item in items" :key="item.id">{{item.text}}</li>
    </ul>
    <input type="button" v-on:click="clickbtn" value="btn">
    <input type="button" v-on:click="add({num:2})" value="btn2">
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("base-layout", {
  data: function() {
    return {};
  },
  computed: {
    count_base() {
      return this.$store.state.count;
    }
  },
  template: `
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
      <h2>vuex:</h2>
      <p>count_base: {{count_base}}</p>
    </div>
  `
});

Vue.component("current-user", {
  data: function() {
    return {
      user: {
        lastName: "dave",
        firstName: "niu"
      }
    };
  },
  template: `
    <span>
      <slot v-bind:user="user">
        {{ user.lastName }}
      </slot>
    </span>
  `
});

import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
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
      msg: "prop vue"
    };
  },
  methods: {
    clickbtn: function() {
      this.$store.commit("increment", { num: 2 });
    },
    ...mapMutations([
      "increment", // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      "incrementBy" // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: "increment" // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  },
  computed: {
    //局部计算属性
    local() {},
    doneTodosCount() {
      return this.$store.getters.doneTodos;
    },
    getTodoById() {
      return this.$store.getters.getTodoById(2);
    },

    //使用对象展开运算符
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,
      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: "count",
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState(state) {
        return state.count;
      },
      items: "items"
    }),
    // 将getter 映射到局部计算属性：
    ...mapGetters(["doneTodos", "getTodoById"])
  },

  watch: {}
};
</script>

