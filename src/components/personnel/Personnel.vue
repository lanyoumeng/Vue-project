<template>
  <div class="content-container" direction="vertical">
    <div>
      <el-container class="content-row">
        <div class="input-tip">名称：</div>
        <div class="input-field">
          <el-input v-model="queryParam.name"></el-input>
        </div>
        <div class="input-tip">性别</div>
        <div class="input-field">
          <el-input v-model="queryParam.sex"></el-input>
        </div>
        <div class="input-tip">手机号：</div>
        <div class="input-field">
          <el-input v-model="queryParam.phone"></el-input>
        </div>
      </el-container>

      <el-container class="content-row">
        <div class="input-tip">创建时间</div>
        <div class="input-field">
          <el-date-picker
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            v-model="queryParam.time"
          ></el-date-picker>
        </div>
      </el-container>
    </div>

    <div class="content-row">
      <el-container>
        <!-- 筛选此时是重新获取 -->
        <el-button type="primary" @click="requestData">筛选</el-button>
        <el-button type="danger" @click="clear">清空筛选</el-button>
        <el-button type="primary" @click="exportData">导出</el-button>
      </el-container>
    </div>

    <!-- list -->
    <div>
      <el-tabs type="card" @tab-click="handleClick">
        <el-tab-pane label="全部"></el-tab-pane>
      </el-tabs>

      <el-table
        ref="multipleTable"
        :data="orderList"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column
        ><el-table-column label="姓名" width="55" prop="name"> </el-table-column
        ><el-table-column label="类别" width="100" prop="category">
        </el-table-column>
        <el-table-column label="性别" width="100" prop="sex"> </el-table-column>
        <el-table-column label="手机号" width="100" prop="phone">
        </el-table-column>
        ><el-table-column label="创建时间" width="200" prop="time">
        </el-table-column>
        <el-table-column label="操作" width="200" prop="payType">
          <template #default="scope">
            <el-button
              size="mini"
              type="danger"
              @click="deleteItem(scope.$index)"
              >删除</el-button
            >
            <el-button size="mini" type="primary" @click="callUser(scope.row)"
              >联系</el-button
            >
          </template>
        </el-table-column>
        <el-table-column label="来源" width="200" prop="source">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Mock from "../../mock/Mock";
import Tools from "../../tools/Tools";

export default {
  data() {
    return {
      orderList: [],
      queryParam: {
        phone: "",
        name: "",
        time: "",
        sex: "",
      },
      multipleSelection: [],
    };
  },
  mounted() {
    this.orderList = Mock.getpersonnel(this.$route.params.type);
  },
  beforeRouteUpdate(to) {
    this.orderList = Mock.getpersonnel(to.params.type);
  },
  methods: {
    requestData() {
      this.$message({
        type: "success",
        message: "筛选请求参数: " + JSON.stringify(this.queryParam),
      });
      this.orderList = Mock.getpersonnel(this.$route.params.type);
    },
    handleclick(tab) {
      this.$message({
        type: "success",
        message: "切换tab刷新数据:" + tab.props.label,
      });
      this.orderList = Mock.getpersonnel(this.$route.params.type);
    },
    clear() {
      this.queryParam = {
        phone: "",
        name: "",
        time: "",
        sex: "",
      };
      this.orderList = Mock.getpersonnel(this.$route.params.type);
    },
    exportData() {
      Tools.exportJson("订单.json", JSON.stringify(this.orderList));
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    dispatchGoods() {
      this.$message({
        type: "success",
        message: "发货商品: " + JSON.stringify(this.multipleSelection),
      });
    },
    deleteItem(index) {
      // 删除订单的方法参数
      this.orderList.splice(index, 1);
    },
    callUser(item) {
      console.log(item); // 移至消息之前
      this.$message({
        type: "success",
        message: "联系:" + item.phone,
      });
    },
  },
};
</script>
