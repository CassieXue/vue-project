<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <div>
      <pre>
      /* create the project */
        npm install vue-cli -g;
        npm install webpack -g;
        vue init webpack myvue-project;
        cd myvue-project;
        npm install;
        npm run dev;
      </pre>
    </div>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/bhnddowinf/vuejs2-learn/blob/master/learn-vue-cli/vue-cli.md" target="_blank">
          如何使用 vue-cli
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
    <h2>一些优秀的基于vue的UI框架</h2>
    <ul class="frameworks">
      <li class="pc">
        <h3>PC端</h3>
        <ul>
          <li><a href="https://bootstrap-vue.js.org/docs/" target="_blank" title="响应式，移动优先">bootstrap-vue</a></li>
          <li><a href="http://element-cn.eleme.io/#/zh-CN" target="_blank" title="基于 Vue 2.0 的桌面端组件库">ElementUI</a></li>
          <li><a href="https://www.iviewui.com/docs/guide/introduce" target="_blank" title="TalkingData开发的主要服务于 PC 界面的中后台产品">iView</a></li>
          <li><a href="https://fe-driver.github.io/vue-beauty/#/components/start" target="_blank" title="基于 vue.js 和 ant-design样式 的PC端 UI 组件库">vue-beauty</a></li>
          <li><a href="http://okoala.github.io/vue-antd/#!/components" target="_blank" title="Ant Design of Vue, 开发和服务于企业级后台产品,目前项目还不稳定，不建议在生产环境使用">vue-antd</a></li>
        </ul>
      </li>
      <li class="mobile">
        <h3>移动端</h3>
        <ul>
          <li><a href="http://mint-ui.github.io/#!/zh-cn" target="_blank" title="基于 Vue.js 的移动端组件库">Mint UI</a></li>
          <li><a href="https://didi.github.io/cube-ui/#/zh-CN/docs/introduction" target="_blank" title="滴滴内部组件库移动端组件库">Cube-ui</a></li>
          <li><a href="http://vue.ydui.org/" target="_blank" title="基于Vue2.x的移动端&微信UI">Vue-ydui</a></li>
          <li><a href="https://onsen.io/vue/" target="_blank">Onsen UI for Vue (混合移动端APP的 HTML5 UI 框架)</a></li>
        </ul>
      </li>
    </ul>
    <div class="circle">
      <div id="circle_bot"></div>
      <div id="circle_mid"></div>
      <div id="circle_top"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    text-align: center;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li:not(.pc) {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#circle_bot {
  background-color: #E09;
  width: 150px;
  height: 150px;
  margin: 0;
  border-radius: 50%;
}
#circle_mid {
  background-color: #EAA;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: -125px 0 0 25px;
}
#circle_top {
  background-color: #ED9;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: -75px 0 0 50px;
}
</style>
