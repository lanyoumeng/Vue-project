<template>
  <div class="content-container" direction="vertical">
    <el-container class="content-row">
      <div class="info">总学习人数: {{ this.data.studentNum }}</div>
      <div class="info">总学习任务: {{ this.data.taskNum }}</div>
      <div class="info">累计学生人数: {{ this.data.studentCount }}</div>
      <div class="info">累计老师人数: {{ this.data.teacherCount }}</div>
      <div class="info">截止时间: {{ this.data.time }}</div>
    </el-container>
    <el-container class="content-row">
      <el-radio-group @change="changeType" v-model="type">
        <el-radio-button label="学习人数"></el-radio-button>
        <el-radio-button label="任务数量"></el-radio-button>
        <el-radio-button label="学生人数"></el-radio-button>
        <el-radio-button label="老师人数"></el-radio-button>
      </el-radio-group>
    </el-container>
    <!-- 图表 -->
    <Charts id="charts" :xData="xData" :data="chartsData"></Charts>

    <div class="realTime">
      <div class="info">实时数据-更新时间: {{ data.time }}</div>

      <el-container class="content-row">
        <div class="block">
          <div class="title">学习人数: 256</div>
          <div class="subTitle">当日: 190</div>
          <div class="subTitle">昨天: 66</div>
        </div>
        <div class="block">
          <div class="title">任务数量: 100</div>
          <div class="subTitle">当日: 60</div>
          <div class="subTitle">昨天: 40</div>
        </div>
        <div class="block">
          <div class="title">学生人数: 503</div>
          <div class="subTitle">当日: 102</div>
          <div class="subTitle">昨天: 400</div>
        </div>
        <div class="block">
          <div class="title">老师人数: 70</div>
          <div class="subTitle">当日: 50</div>
          <div class="subTitle">昨天: 20</div>
        </div>
      </el-container>
    </div>
  </div>
</template>

<script>
import Charts from "./Charts.vue";
import Mock from "../mock/Mock";

export default {
  data() {
    return {
      xData: ["8月1日", "8月2日", "8月3日", "8月4日", "8月5日", "8月6日"],
      chartsData: [],
      name: "销量",
      type: "总交易额",
      data: {},
    };
  },
  components: {
    Charts: Charts,
  },
  mounted() {
    this.chartsData = Mock.getChartsData();
    this.data = Mock.getTradeData();
  },
  methods: {
    changeType() {
      this.chartsData = Mock.getChartsData();
    },
  },
};
</script>

<style scoped>
#charts {
  width: 1200px;
  height: 400px;
}
.info {
  margin: 15px 40px;
  font-size: 20px;
  color: #777777;
}
.realTime {
  border: #777777 solid 1px;
  width: 1200px;
  height: 300px;
}
.block {
  margin: auto;
  width: 300px;
  padding: 10px 30px;
}
.title {
  font-size: 20px;
  color: #777777;
  margin-bottom: 5px;
}
.subTitle {
  font-size: 18px;
  color: #777777;
  margin-top: 3px;
}
</style>
