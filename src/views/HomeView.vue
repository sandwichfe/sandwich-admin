<template>
  <div class="home">
    <!-- 指定load范围为全屏  滚动也会被遮罩 -->
    <div v-loading.fullscreen.lock="fullscreenLoading"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getBase, getIp } from "@/network/base";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      loading: false,
      fullscreenLoading: false,
    };
  },

  methods: {
    openLoad() {
      this.fullscreenLoading = true;
    },

    closeLoad() {
      this.fullscreenLoading = false;
    },
  },

  created() {
    this.openLoad();
    getIp().then((res) => {
      this.closeLoad();
      this.$message("欢迎回来,你的ip为:" + res.data);
    });
    getBase("p1", "p2").then((res) => {
      // console.log(res);
    });
  },

  mounted() {},
};
</script>
