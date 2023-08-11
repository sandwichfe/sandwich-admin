<template>
  <div class="main">
    <ul>
      <li>
        当前时间：
        <span class="timeText">{{ currentTime }} </span>
        时间戳：
        <span class="timeText">{{ currentTimeStamp }}</span>
      </li>
      <li>
        <el-input
          class="textInput"
          placeholder="请输入时间"
          v-model="time1"
        >
        </el-input>
        <el-button plain @click="time2stamp(time1)">转换</el-button>
        <el-input
          class="textInput mycorsor"
          v-model="timeStamp1"
        >
        </el-input>
      </li>

        <li>
          <el-input
          class="textInput"
          v-model="timeStamp2"
        >
        </el-input>
        <el-button plain @click="stamp2time(timeStamp2)">转换</el-button>
           <el-input
          class="textInput mycorsor"
          v-model="time2"
        >
        </el-input>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      currentTime: "",
      currentTimeStamp: 0,

      time1: "",
      timeStamp1: null,
      time2: "",
      timeStamp2: 0,
    };
  },

  created() {

    // 加载头部
    this.$emit('header', true);

    this.flushCurrentTime();

    this.time1 = this.currentTime;
    this.timeStamp2 = this.currentTimeStamp;
  },

  methods: {
    flushCurrentTime() {
      this.currentTime = this.getCurrentTime();
      this.currentTimeStamp = this.getCurrentTimeStamp();
    },

    getCurrentTime() {
      return this.stamp2localTime(this.getCurrentTimeStamp());
    },

    getCurrentTimeStamp() {
      let timestamp = Date.parse(new Date());
      return timestamp;
    },


    stamp2time(stamp){
       let  time = this.stamp2localTime(stamp);
        this.time2 = time;
    },

      time2stamp(time){
       let  stamp = (new Date(time)).valueOf();
        this.timeStamp1 = stamp;
    },


    stamp2localTime(n) {
      let now = new Date(n),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
      return (
        y +
        "-" +
        (m < 10 ? "0" + m : m) +
        "-" +
        (d < 10 ? "0" + d : d) +
        " " +
        now.toTimeString().substr(0, 8)
      );
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 1600px;
  margin: auto;
}

.textInput {
  width: 200px;
}
.timeText {
  margin-right: 40px;
  color: #5fd9be;
}
ul li {
  list-style: none;
  margin-top: 20px;
  margin-bottom: 20px;
}

/deep/ .mycorsor {
    // 关闭鼠标不可编辑显示
    pointer-events: none;
} 
</style>