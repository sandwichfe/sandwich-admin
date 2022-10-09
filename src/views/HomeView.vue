<template>
  <div class="home">
    <!-- 指定load范围为全屏  滚动也会被遮罩 -->
    <div v-loading.fullscreen.lock="fullscreenLoading"></div>

    <!-- 轮播图 -->
    <div class="recommendPage">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
    </div>

    <!-- 抽屉 -->
    <div class="drawer-show">
      <el-button @click="drawer = true" type="plain" class="show-btn">
      </el-button>

      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose"
      >
        <div class="img-upload">
          <el-upload action="" list-type="picture-card" 
          :auto-upload="false"
          :file-list="imgFileList"
          :on-change="handleChange">
            <i slot="default" class="el-icon-plus"></i>
            <div slot="file" slot-scope="{ file }">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleDownload(file)"
                >
                  <i class="el-icon-download"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </div>

        <el-button plain @click="gotoView()">我来啦!</el-button>
         <el-button plain @click="submitUpload()">ok</el-button>
      </el-drawer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getBase, getIp,upLoadFile } from "@/network/base";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      loading: false,
      fullscreenLoading: false,

      // swiper
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },

      // 抽屉
      drawer: false, //默认关闭
      direction: "ltr", //  从左往右展开

      //upload
      imgFileList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      disabled:false
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },

  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },

  methods: {
    openLoad() {
      this.fullscreenLoading = true;
    },

    closeLoad() {
      this.fullscreenLoading = false;
    },

    handleClose(done) {
      //关闭
      done();
      /*
         this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
        */
    },

    gotoView() {
      this.$router.push("/visitorRecord");
    },

    // upload
    handleRemove(file, fileList) {
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    //点击上传图片
			submitUpload() {
				let formData = new FormData(); //  用FormData存放上传文件
				this.imgFileList.forEach(file => {
					console.log(file.raw)
					console.log(file.size)
					formData.append('file', file.raw)
				})
        upLoadFile(formData).then(res=>{
          console.log(res);
        })


			},

        // 图片组件改变时触发事件
        handleChange(file, fileList) {
        this.imgFileList = fileList.slice(-3);
      }



  },

  created() {
    this.openLoad();
    getIp().then((res) => {
      if(res){
      this.closeLoad();
      this.$message("欢迎回来,你的ip为:" + res.data);
      }
    });
  },
};
</script>
<style scoped >
.recommendPage {
  width: 100%;
  display: none;
}

.recommendPage img {
  width: 100%;
  height: 400px;
  max-width: 100%;
  max-height: 100%;
}

.recommendPage .swiper-container {
  position: relative;
  width: 100%;
  background: pink;
}
.recommendPage .swiper-container .swiper-slide {
  width: 100%;
  line-height: 400px;
  background: rgb(215, 218, 233);
  color: #000;
  font-size: 16px;
  text-align: center;
}

.show-btn {
  border: #fff;
}
</style>
