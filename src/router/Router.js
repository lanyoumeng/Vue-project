import { createRouter, createWebHashHistory } from "vue-router";

import Login from "../components/login/Login.vue";
import Home from "../components/home/Home.vue";
import Store from "../store/Storage";
import Personnel from "../components/personnel/Personnel.vue";
import Video from "../components/video/Video.vue";
import AddVideo from "@/components/video/AddVideo.vue";
import TaskList from "@/components/task/Task.vue";
import History from "@/components/history/History.vue";
import DataCom from "../financial/DataCom.vue";
const Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      children: [
        {
          path: "personnel/:type",
          name: "personnel",
          component: Personnel,
        },
        {
          path: "Video", // 修正这里的路径
          name: "Video",
          component: Video,
        },
        {
          path: "addVideo", // 修正这里的路径
          name: "AddVideo",
          component: AddVideo,
        },
        {
          path: "taskList",
          component: TaskList,
          name: "TaskList",
        },
        {
          path: "history",
          component: History,
          name: "History",
        },
        {
          path: "data",
          component: DataCom,
          name: "DataCom",
        },
      ],
      redirect: "/home/personnel/0",
    },
  ],
});

Router.beforeEach((from) => {
  let isLogin = Store.getters.isLogin;
  if (isLogin || from.name == "login") {
    return true;
  } else {
    return { name: "login" };
  }
});

export default Router;
