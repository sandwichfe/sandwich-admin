<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="userName" label="用户" > </el-table-column>
      <el-table-column prop="ip" label="ip地址" > </el-table-column>
      <el-table-column prop="area" label="所属区域" > </el-table-column>
      <el-table-column prop="viewTime" label="访问时间" > </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { getViewList } from "@/network/base";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  created() {
    getViewList(1, 20).then((res) => {
      console.log(res.data);
      if (res) {
        this.tableData = res.data.data;
      }
    });
  },
};
</script>
<style scoped>
</style>