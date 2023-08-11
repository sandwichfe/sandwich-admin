<template>
  <div class="main" >
    
    <div class = "left textBox" >
        <click-copy-button class="copyButton"
      :copyText = codeLeft>copy
      </click-copy-button>

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
      
     <div class = "right textBox">
        <click-copy-button class = "copyButton"
      :copyText = codeRight>copy
      </click-copy-button>
      
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
// import 'prismjs/themes/prism.css';  // 如果想代码换个样式风格，把这个注释了，下面的三个放开一个
// import 'prismjs/themes/prism-solarizedlight.css';  // 代码的其他样式风格
import 'prismjs/themes/prism-tomorrow.css';

import { propToYml, ymlToProp } from "@/network/base";
import ClickCopyButton from '@/components/ClickCopyButton'
export default {
  components: 
  { PrismEditor,
    ClickCopyButton,
  },
  data(){
    return {
      codeLeft: '',
      codeRight: '',
    }
  },
  created(){
      // 加载头部
      // this.$emit('header', true);
  },
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
        margin: auto;
        width: 1800px;
        height: 850px;
        display: flex;
        justify-content: space-between;
        // border: #007bff 1px solid;
    }

    .buttonBox {
        display: flex;
        flex-direction:column;
        height: 150px;
        // border: #000 solid 1px;
    }

    .converButtonDiv {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .converButtonDiv button {
        width: 50px;
        height: 30px;
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
    // padding: 5px;
    // font-weight: 500;
    // height: 600px;
    width: 875px;
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

  .copyButton {
    width: 60px;
    height: 30px;
    display: none;
    text-decoration: none;
    color: #bc8d8d;
    background-color: #bbc4c28c;
    border: #e3e3e3 solid 1px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05);
  }
  .main :hover .copyButton {
    display: block;
    position: absolute;
    right: 0;
    z-index: 10;
  }
  .textBox {
      position: relative;
  }

</style>
 