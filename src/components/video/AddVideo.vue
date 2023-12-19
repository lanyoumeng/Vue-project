<template>
  <div class="content-container" direction="vertical">
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane label="视频设置" name="1">
        <base-setting></base-setting>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import VideoBaseSetting from "./VideoBaseSetting.vue";

export default {
  data() {
    return {
      activeTab: "1",
    };
  },
  components: {
    BaseSetting: VideoBaseSetting,
  },
  methods: {
    handleClick(tab, event) {
      // Handle tab click if needed
    },
  },
};
</script>
