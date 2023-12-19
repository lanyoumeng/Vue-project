<template>
  <div class="content-container" direction="vertical">
    <!-- input -->
    <div>
      <el-container class="content-row">
        <div class="input-tip">视频名称:</div>
        <div class="input-field">
          <el-input v-model="queryParam.name"></el-input>
        </div>

        <div class="input-tip">视频分类:</div>
        <div class="input-field">
          <el-select v-model="queryParam.category" placeholder="请选择分类">
            <el-option
              v-for="item in categories"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </div>
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
    <!-- operation -->
    <div class="content-row">
      <el-container>
        <el-button type="primary" @click="requestData">检索</el-button>
        <el-button type="primary" @click="clear">显示全部</el-button>
        <el-button type="success" @click="addVideo">新增视频</el-button>
      </el-container>
    </div>
    <!-- list -->
    <div>
      <el-table :data="goodsData" tooltip-effect="dark" style="width: 100%">
        <el-table-column label="视频" width="100" prop="name">
          <template #default="scope">
            <div style="text-align: center">
              <el-image
                :src="scope.row.img"
                style="width: 60px; height: 100px"
              ></el-image>
            </div>
          </template>
        </el-table-column>

        <el-table-column
          label="视频名称"
          width="100"
          prop="name"
        ></el-table-column>

        <el-table-column
          label="视频简介"
          width="100"
          prop="brief"
        ></el-table-column>

        <el-table-column
          label="上传者"
          width="100"
          prop="owner"
        ></el-table-column>
        <el-table-column
          label="视频分类"
          width="100"
          prop="class"
        ></el-table-column>
        <el-table-column
          label="创建时间"
          width="200"
          prop="time"
        ></el-table-column>
        <el-table-column label="操作" width="100" prop="name">
          <template #default="scope">
            <el-button
              :type="scope.row.state ? 'danger' : 'success'"
              @click="operate(scope.row)"
            >
              {{ scope.row.state ? "展示" : "隐藏" }}
            </el-button>
          </template>
        </el-table-column>
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
      goodsData: [],
      categories: ["全部", "英语", "语文", "数学"],
      queryParam: {
        name: "",
        id: "",
        category: "",
        sellMode: 2, //0否 1是 2全部
        expMode: 2,
        time: "",
      },
    };
  },
  computed: {
    sellModeString: {
      get() {
        return this.queryParam.sellMode === 2
          ? "全部"
          : this.queryParam.sellMode === 0
          ? "否"
          : "是";
      },
      set(val) {
        this.queryParam.sellMode = val;
      },
    },
    expModeString: {
      get() {
        return this.queryParam.expMode === 2
          ? "全部"
          : this.queryParam.expMode === 0
          ? "否"
          : "是";
      },
      set(val) {
        this.queryParam.expMode = val;
      },
    },
  },
  mounted() {
    this.goodsData = Mock.getVideos(this.$route.params.type);
  },
  beforeRouteUpdate(to) {
    this.goodsData = Mock.getVideos(to.params.type);
  },
  methods: {
    requestData() {
      this.$message({
        type: "success",
        message: "筛选请求参数: " + JSON.stringify(this.queryParam),
      });
      this.goodsData = Mock.getVideos(this.$route.params.type);
    },
    operate(item) {
      item.state = !item.state;
    },
    clear() {
      this.queryParam = {
        name: "",
        id: "",
        category: "",
        sellMode: 2,
        expMode: 2,
      };
      this.goodsData = Mock.getVideos(this.$route.params.type);
    },
    addVideo() {
      this.$router.push({
        name: "AddVideo",
        params: { type: this.$route.params.type },
      });
    },
    deleteItem(index) {
      // 删除订单的方法参数
      this.goodsData.splice(index, 1);
    },
  },
};
</script>
