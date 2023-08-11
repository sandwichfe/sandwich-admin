<template>
  <div class="main">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-submenu index="2" class="submenus">
        <template slot="title">工具</template>
        <el-menu-item index="2-1" @click="$router.push('/timetool')"
          >时间戳转换</el-menu-item >
        <el-menu-item index="2-2" @click="openPage('prop2yml','_blank')"
          >prop-yml格式互转
        </el-menu-item>
          
      </el-submenu>

      <el-menu-item index="3" >笔记</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "toolHeader",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    openPage(targetPage,target) {
      let page = this.$router.resolve({ name: targetPage, params: { id: 11 } });
      if("_blank"==target){
      window.open(page.href, target);
      }else{
        window.location=page.href;
      }
      
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 1600px;
  margin: auto;
  border: 1px #ddd solid;
}

/** 去掉下拉箭头 */
/deep/ .submenus .el-submenu__icon-arrow {
  display: none;
}
</style>