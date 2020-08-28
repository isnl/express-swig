const express = require("express");
const appRouter = express.Router();
appRouter.get("/", function (request, response) {
  try {
    response.render("index", {
      title: "首页啊哦",
      content: "Hello World",
      list: [
        { name: "张三", age: 18 },
        { name: "李四", age: 18 },
      ],
    });
  } catch (error) {
    console.log("404");
  }
});
appRouter.get("/:id", function (request, response) {
  try {
    response.render(request.params.id, {
      title: "首页",
      content: "Hello World",
      list: [
        { name: "张三", age: 18 },
        { name: "李四", age: 18 },
      ],
    });
  } catch (error) {
    console.log("404");
  }
});
// 首页
appRouter.get("/index", function (request, response) {
  response.render("index.html", {
    content: "首页",
  });
});
// demo1页面
appRouter.get("/demo1", function (request, response) {
  response.render("page/demo1.html", {
    content: "demo1页面",
  });
});

module.exports = appRouter;
