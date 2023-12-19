<template>
  <div>
    <el-container class="content-row">
      <div class="input-tip">视频名称:</div>
      <div class="input-field">
        <el-input v-model="queryParams.name"></el-input>
      </div>
    </el-container>
    <el-container class="content-row">
      <div class="input-tip">上传者:</div>
      <div class="input-field">
        <el-input v-model="queryParams.author"></el-input>
      </div>
    </el-container>

    <el-container class="content-row">
      <div class="input-tip">视频简介:</div>
      <div class="input-field">
        <el-input
          type="textarea"
          :rows="3"
          v-model="queryParams.desc"
        ></el-input>
      </div>
    </el-container>

    <el-container class="content-row">
      <div class="input-tip">视频封面:</div>
      <div class="input-field">
        <el-upload :auto-upload="false" :limit="1" list-type="picture-card">
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
    </el-container>

    <el-container class="content-row">
      <div class="input-tip">视频日期:</div>
      <div class="input-field">
        <el-date-picker
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          v-model="queryParams.timeRange"
        ></el-date-picker>
      </div>
    </el-container>

    <el-container class="content-row">
      <div class="input-tip">视频分类:</div>
      <div class="input-field">
        <el-select v-model="queryParams.category">
          <el-option key="0" label="英语" :value="0"></el-option>
          <el-option key="1" label="数学" :value="1"></el-option>
          <el-option key="2" label="语文" :value="2"></el-option>
        </el-select>
        <!-- <div style="margin-top: 6px">
          <el-button type="primary" size="mini" round>添加分类</el-button>
        </div> -->
      </div>
    </el-container>

    <el-container class="content-row">
      <el-button type="success" plain @click="submit">提交</el-button>
      <div style="margin-left: 40px"></div>
      <el-button type="warning" plain @click="cancel">取消</el-button>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryParams: {
        name: "",
        desc: "",
        timeRange: "",
        category: 0,
        author: "",
      },
    };
  },
  methods: {
    cancel() {
      this.$router.go(-1);
    },
    submit() {
      this.$message({
        type: "success",
        message: "设置视频基本属性: " + JSON.stringify(this.queryParams),
      });
    },
  },
};
</script>
