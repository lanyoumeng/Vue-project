<template>
  <el-container id="container">
    <el-aside width="250px">
      <el-container id="top" style="height: 8vh">
        <img
          style="width: 25px; height: 25px; margin: auto; margin-right: 0"
          src="../../assets\1.jpg"
        />
        <div
          style="
            margin: auto;
            margin-left: 10px;
            color: #0d0c0c;
            font-size: 17px;
          "
        >
          后台管理
        </div>
      </el-container>
      <el-menu
        router="true"
        :default-active="$route.path"
        style="height: 100%"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>人员管理</span>
          </template>
          <el-menu-item-group title="一">
            <el-menu-item index="/home/personnel/0">用户</el-menu-item>
            <el-menu-item index="/home/personnel/1">老师</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>视频管理</span>
          </template>
          <el-menu-item-group title="视频">
            <el-menu-item index="/home/video">普通视频</el-menu-item>
            <el-menu-item index="/home/addVideo">上传视频</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <i class="el-icon-s-custom"></i><span>学习</span>
          </template>
          <el-menu-item index="/home/taskList">待学任务</el-menu-item>
          <el-menu-item index="/home/history">学习记录</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/home/data">数据统计</el-menu-item>
      </el-menu>
    </el-aside>
    <el-main style="padding: 0">
      <!-- 添加一个通用的头部 -->
      <el-header
        :style="{
          margin: 0,
          padding: 0,
          height: '80px',
          display: containerVisible ? 'block' : 'none',
        }"
      >
        <el-container
          style="
            background-color: blanchedalmond;
            margin: 0;
            padding: 0;
            height: 80px;
          "
        >
          <div style="margin: auto; margin-left: auto">
            <h1>欢迎您登录后台管理系统，管理员用户!</h1>
          </div>

          <div style="margin: auto; margin-right: 50px">
            <el-button type="primary" @click="logout">注销</el-button>
          </div>
          <div style="margin: 0; margin-right: 0px">
            <el-button type="primary" @click="hid">隐藏</el-button>
          </div>
        </el-container>
      </el-header>
      <!-- 这里用来渲染具体的功能模块 -->

      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Store from "@/store/Storage";

export default {
  name: "Home",
  data() {
    return {
      containerVisible: true, // 根据需要初始化显示或隐藏
    };
  },
  methods: {
    logout() {
      Store.commit("clearUserInfo");
      this.$router.push({ name: "login" });
    },
    hid() {
      this.containerVisible = !this.containerVisible;
    },
  },
};
</script>
@/store/Storage
