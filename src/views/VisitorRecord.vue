<template>
  <div class="block">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="userName" label="用户"> </el-table-column>
      <el-table-column prop="ip" label="ip地址"> </el-table-column>
      <el-table-column prop="area" label="所属区域"> </el-table-column>
      <el-table-column prop="viewTime" label="访问时间"> </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="tablePage.pageNum"
        :page-size="tablePage.pageSize"
        :page-sizes="pageSizes"
        :total="tablePage.total"
        @size-change="handleSizeChange"
        @current-change="handlePageChange"
      />
    </div>
  </div>
</template>
<script>
import { getViewList } from "@/network/base";
export default {
  data() {
    return {
      // 数据
      tableData: [],
      // 分页
      tablePage: {
        pageNum: 1, // 第几页
        pageSize: 20, // 每页多少条
        total: 0, // 总记录数
      },
      // 可选显示条数
      pageSizes: [20, 50],
    };
  },
  created() {
     this.getPageData();
  },
  methods: {
    handlePageChange(currentPage) {
      this.tablePage.pageNum = currentPage;
       // 在此刷新数据
      this.getPageData();
    },
    handleSizeChange(pageSize) {
      this.tablePage.pageSize = pageSize;
      // 在此刷新数据
       this.getPageData();
    },

    /**
     * 分页获取数据
     */
    getPageData(pageNum = this.tablePage.pageNum,pageSize = this.tablePage.pageSize) {
      getViewList(pageNum, pageSize).then((res) => {
        if (res) {
          this.tableData = res.data.data;
          this.tablePage.total =  res.data.total
        }
      });
    },

  },
};
</script>
<style scoped>
</style>