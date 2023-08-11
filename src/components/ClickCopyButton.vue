<template>
  <button @click="handleClick" :class="buttonClass">
    <slot></slot>
  </button>
</template>
 
<script>
export default {
  name: 'ClickCopyButton',
  props: {
    buttonClass: {
      type: String,
      default: ''
    },
    copyText:{
        type:String,
        default:''
    }
  },
  methods: {
    handleClick() {
      // 处理按钮点击事件的逻辑
      this.copy(this.copyText)
    },
      // 复制功能
    copy(val) {
      console.log(val)
      let inputNode = document.createElement("textarea"); // 创建input
      inputNode.value = val; // 赋值给 input 值
      document.body.appendChild(inputNode); // 插入进去
      inputNode.select(); // 选择对象
      document.execCommand("Copy"); // 原生调用执行浏览器复制命令
      inputNode.className = "oInput";
      inputNode.style.display = "none"; // 隐藏
      this.$message.success("复制成功");
    },
  }
}
</script>
 
<style scoped>
/* 组件的样式 */
.buttonClass {
}
</style>