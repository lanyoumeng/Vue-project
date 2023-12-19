<template>
  <div class="content-container" direction="vertical">
    <div>
      <el-container class="content-row">
        <div class="input-tip">老师:</div>
        <div class="input-field">
          <el-input v-model="queryParams.teacherName"></el-input>
        </div>
        <div class="input-tip">学生:</div>
        <div class="input-field">
          <el-input v-model="queryParams.studentName"></el-input>
        </div>
        <div class="input-tip">课程:</div>
        <div class="input-field">
          <el-select v-model="queryParams.state" placeholder="请选择">
            <el-option key="1" label="语文" value="1"></el-option>
            <el-option key="2" label="数学" value="2"></el-option>
            <el-option key="3" label="英语" value="3"></el-option>
          </el-select>
        </div>
      </el-container>
      <el-container class="content-row">
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button type="primary" @click="clear">清空搜索条件</el-button>
        <el-button type="primary" @click="clearAll">清空所有记录</el-button>
      </el-container>
    </div>
    <div>
      <el-table :data="TaskList" tooltip-effect="dark" style="width: 100%">
        <el-table-column
          label="任务信息"
          width="200"
          prop="task"
        ></el-table-column>

        <el-table-column
          label="学生名"
          width="150"
          prop="student"
        ></el-table-column>

        <el-table-column
          label="老师名"
          width="150"
          prop="techer"
        ></el-table-column>

        <el-table-column
          label="更新时间"
          width="200"
          prop="time"
        ></el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button
              size="mini"
              type="danger"
              @click="deleteItem(scope.$index)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Mock from "../../mock/Mock";

export default {
  data() {
    return {
      queryParams: { teacherName: "", studentName: "", state: "" },
      TaskList: [],
    };
  },
  mounted() {
    this.TaskList = Mock.getTaskList();
  },
  methods: {
    search() {
      //后端获取数据
      this.$message({
        type: "success",
        message: "请求参数:" + JSON.stringify(this.queryParams),
      });
      this.TaskList = Mock.getTaskList();
    },
    clear() {
      this.queryParams = { phone: "", name: "", state: "" };
      this.TaskList = Mock.getTaskList();
    },
    deleteItem(index) {
      // 删除订单的方法参数
      this.TaskList.splice(index, 1);
    },
    clearAll() {
      //后端删除
      this.TaskList = "";
    },
  },
};
</script>
