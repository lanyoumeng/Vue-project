import mockjs from "mockjs";

const Mock = {
  // 模拟获取用户数据
  // type: 订单类型，0为用户，1为老师
  getpersonnel(type) {
    let array = [];
    for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
      array.push(
        mockjs.mock({
          category: type == "0" ? "用户" : "老师",
          name: mockjs.Random.cword(2, 5),
          sex: mockjs.Random.pick(["男", "女"]),
          time: mockjs.Random.datetime("yyyy-MM-dd HH:mm:ss"),
          payType: mockjs.Random.boolean(),
          source: mockjs.Random.pick(["QQ", "微信"]),
          phone: mockjs.mock(/\d{11}/),
        })
      );
    }
    return array;
  }, // 模拟获取视频数据

  getVideos(type) {
    let array = [];
    for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
      array.push(
        mockjs.mock({
          name: mockjs.Random.cword(2, 5),
          img: mockjs.Random.dataImage("60x100", "视频封面"),
          brief: mockjs.Random.cword(8, 15),
          class: mockjs.Random.pick(["英语", "语文", "数学"]),
          owner: mockjs.Random.cname(),
          time: mockjs.Random.datetime("yyyy-MM-dd A HH:mm:ss"),
          state: mockjs.Random.boolean(),
        })
      );
    }
    return array;
  },
  getTaskList() {
    // 初始化一个空数组，用于存放模拟数据
    let array = [];

    // 生成随机数量的管理人员数据，数量在 5 到 10 之间
    for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
      array.push(
        mockjs.mock({
          task: mockjs.Random.csentence(), // 随机生成一句话作为任务信息
          techer: mockjs.Random.cword(2, 5),
          student: mockjs.Random.cword(2, 5),
          state: mockjs.Random.boolean(), // 随机生成布尔值作为状态信息
          time: mockjs.Random.datetime("yyyy-MM-dd A HH:mm:ss"), // 随机生成日期时间
        })
      );
    }

    return array;
  },
  getChartsData() {
    let array = [];
    for (let i = 0; i < 6; i++) {
      array.push(mockjs.Random.integer(0, 100));
    }
    return array;
  },
  getTradeData() {
    return mockjs.mock({
      studentNum: mockjs.Random.integer(0, 100),
      taskNum: mockjs.Random.integer(0, 200),
      studentCount: mockjs.Random.integer(0, 100),
      teacherCount: mockjs.Random.integer(0, 100),
      time: mockjs.Random.datetime("yyyy-MM-dd"),
    });
  },
};

export default Mock;
