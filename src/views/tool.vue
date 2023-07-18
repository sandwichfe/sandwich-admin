<template>
  <div class="main" >
    
    <div class = "left " >
          <prism-editor class="my-editor scorll-appearance" 
      v-model="codeLeft" 
      :highlight="highlighter" 
      :readonly="false" 
      :line-numbers="true"
      placeholder="properties文件内容:" >
      </prism-editor>
    </div>

    <div class="buttonBox">
        <div  class="converButtonDiv"> 
        <el-tooltip class="item" effect="light" content="properties转yml" placement="left-end">
        <Button 
          @click="propToYml(codeLeft)"> 
          <i class="el-icon-arrow-right"></i>   
        </Button>
      </el-tooltip>
        </div>
        
        <div class="converButtonDiv">
        <el-tooltip class="item" effect="light" content="yml转properties" placement="right-end">
          <Button 
         @click="ymlToProp(codeRight)"> 
         <i class="el-icon-arrow-left"></i> 
         </Button> <!-- yml转properties -->
        </el-tooltip> 
        </div>
    </div>
      
     <div class = "right ">
        <prism-editor class="my-editor scorll-appearance" 
      v-model="codeRight" 
      :highlight="highlighter" 
      :readonly="false" 
      :line-numbers="true"
      placeholder="yml文件内容:" >
      </prism-editor>

     </div>
  </div>
</template>
 
<script>
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
// import 'prismjs/themes/prism-solarizedlight.css';  // 代码的其他样式风格
// import 'prismjs/themes/prism-coy.css';
// import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/themes/prism.css';  // 如果想代码换个样式风格，把这个注释了，上面的三个放开一个
import { propToYml, ymlToProp } from "@/network/base";
export default {
  components: { PrismEditor },
  data(){
    return {
      codeLeft: '',
      codeRight: '',
    }
  },
  created(){},
  mounted() {
    window.addEventListener('keydown', this.handleEvent)
},
    beforeDestroy() {
        window.removeEventListener('keydown', this.handleEvent) // 在页面销毁的时候记得解除
    },
  methods:{
    async handleEvent(event) {
      switch (event.keyCode) {
        // case 83:
        //   console.log('ctrl + s')
        //   event.preventDefault()
        //   event.returnValue = false // 阻止直接保存网页
        //   this.$message.success("保存成功！")  
        //   break
      }
    },

     highlighter(code) {
        return highlight(code, languages.js)
    },

    propToYml(propStr){
         propToYml(propStr).then((res) => {
                if(res){
                // this.closeLoad();
                // this.$message("欢迎回来,你的ip为:" + res.data);
                this.codeRight =  res.data
                }
         });
         
    },

    ymlToProp(ymlStr){
         ymlToProp(ymlStr).then((res) => {
                if(res){
                this.codeLeft =  res.data
                }
         });
    },

  }
}
</script>


<style lang="less" scoped>
    .main {
        display: flex;
        justify-content: space-between;
    }

    .buttonBox {
        display: flex;
        flex-direction:column;
        height: 150px;
        width: 82px;
        // border: #000 solid 1px;
    }

    .converButtonDiv {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .converButtonDiv button {
        height: 30px;
        width: 100%;
        text-decoration: none;
        color: #333;
        background-color: #fff;
        border: #e3e3e3 solid 1px;
    }

    .scorll-appearance {
    height: 100%;
    overflow: scroll;
    }
    .scorll-appearance::-webkit-scrollbar-track-piece {
    background-color: #f8f8f800;
    }
    .scorll-appearance::-webkit-scrollbar {
    width: 6px;
    transition: all 2s;
    }
    .scorll-appearance::-webkit-scrollbar-thumb {
    background-color: #dddddd;
    border-radius: 100px;
    }
    .scorll-appearance::-webkit-scrollbar-thumb:hover {
    background-color: #bbb;
    }
    .scorll-appearance::-webkit-scrollbar-corner {
    background-color: rgba(255, 255, 255, 0);
    }


  .my-editor {
    // background: #d4ecea30;
    background: #fff;
    color: #000;
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 16px;
    line-height: 1.5;
    padding: 5px;
    font-weight: 500;
    height: 600px;
    width: 800px;
    border: solid 0.8px #e2e7ec;
    border-top: none;
  }
 
  .my-editor /deep/ .prism-editor__textarea::selection{
    background-color: #8092a9 !important;
    color: #000 !important;
    user-select:none;
  }
 
  .my-editor /deep/ .prism-editor__textarea:focus {
      border: 0px solid #007bff;
      outline: none; 
  }
 
  .my-editor /deep/ .prism-editor__line-numbers{
    padding-right: 10px;
  }
</style>
 