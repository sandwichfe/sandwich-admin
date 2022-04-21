<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import {getBase,getIp} from '@/network/base'


export default {
  name: 'HomeView',
  components: {
    
  },

  created(){
    getIp().then(res=>{
       this.$message('欢迎回来,你的ip为:'+res.data);
    })

    getBase('p1','p2').then(res=>{
      // console.log(res);
    });


  }


}
</script>
