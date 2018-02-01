<template>
  <div id="app">
    <div class="layout">
      <Layout :style="{height: '100%'}">
        <Header :style="{position: 'fixed', width: '100%'}">
          <Menu mode="horizontal" :theme="theme" active-name="1">
            <div class="layout-logo">
              <img src="./assets/logo.png" v-bind:title="vueLogo">
              <img src="../static/imgs/iview.png">
              </div>
            <ul class="layout-nav">
              <menu-item name="1"><Icon type="ios-navigate"></Icon>Item 1 </menu-item>
              <menu-item name="2"><Icon type="ios-keypad"></Icon>Item 2 </menu-item>
              <menu-item name="3"><Icon type="ios-analytics"></Icon>Item 3 </menu-item>
              <menu-item name="4"><Icon type="ios-paper"></Icon>Item 4 </menu-item>
            </ul>
          </Menu>
        </Header>
        <Layout :style="{'margin-top': '64px'}">
          <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :style="{'background-color': '#fff'}">
            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" :class="menuitemClasses">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon> <span>Item 1</span>
                </template>
                <menu-item name="1-1">Option 1 </menu-item>
                <menu-item name="1-2">Option 2 </menu-item>
                <menu-item name="1-3">Option 3 </menu-item>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon><span>Item 2</span>
                </template>
                <menu-item name="2-1">Option 1 </menu-item>
                <menu-item name="2-2">Option 2 </menu-item>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon><span>Item 3</span>
                </template>
                <menu-item name="3-1">Option 1 </menu-item>
                <menu-item name="3-2">Option 2 </menu-item>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{padding: '0 24px 24px'}">
            <Breadcrumb :style="{margin: '24px 0'}">
              <BreadcrumbItem>
                <Icon @click.native="collapsedSider" :class="rotateIcon" type="navicon-round" size="24"></Icon>
              </BreadcrumbItem>
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Components</BreadcrumbItem>
              <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>
            <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                <span>{{message}}</span>
                <router-view/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      message: '页面加载于' + new Date().toLocaleString(),
      vueLogo: '这是vue项目',
      theme: 'drak',
      isCollapsed: false
    }
  },
  computed: {
    menuitemClasses: function () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    },
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    }
  }
}
</script>

<style>
  #app, .layout {
    height: 100%;
  }
  .layout{
    border: 1px solid #d7dde4;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    height: 30px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-logo img {
    height: 100%;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
    color: #fff;
  }
  .menu-icon{
    transition: all .3s;
  }
  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item span{
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }
  .menu-item i{
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .collapsed-menu span + i.ivu-menu-submenu-title-icon {
    float: none;
  }
  .collapsed-menu .ivu-menu-item {
    padding-left: 0 !important;
    padding-right: 0 !important;
    text-align: center;
  }
  .collapsed-menu .ivu-menu-opened > * > .ivu-menu-submenu-title-icon {
    transform: rotate(180deg) translateX(-50%);
  }
</style>
