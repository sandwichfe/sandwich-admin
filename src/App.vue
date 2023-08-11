<template>
  <div id="app">


    <!-- 
    <router-view /> -->

    <app-header v-if="header_show"></app-header>
    <!-- 内容窗口 -->
    <router-view v-on:header="header" v-on:footer="footer"></router-view>
    <app-footer v-if="footer_show"></app-footer>


  </div>
</template>


<script>
import Header from '@/views/tools/toolHeader.vue'
import Footer from '@/components/footer'
export default {
  name: 'App',
  data(){
      return {
          // 默认不加载
          header_show:false,
          footer_show:false,
      }
  },
  components: {
        'app-header':Header,
        'app-footer':Footer,
  },
  methods:{
      //是否显示头部
      header:function (bool) {
        this.header_show = bool;
      },
      //是否显示底部
      footer:function (bool) {
          this.footer_show = bool;
      }
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
</style>
