<template>
  <div class="home">
  </div>
</template>

<script>
// @ is an alias to /src
import {getBase} from '@/network/base'


export default {
  name: 'HomeView',
  components: {
    
  },

  created(){

    getBase('p1','p2').then(res=>{
      console.log(res);
    });


  }


}
</script>
