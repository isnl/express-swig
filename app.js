const fs = require("fs");
const title = "标题";
const content = Math.random();
const text = `{% extends './layout/layout.html' %} 
{% block title %} 文章标题 {% endblock %} 
{% block content %}
  <div>
    <h1>${title}</h1>
    <p>${content}</p>
  </div>
{% endblock %}`;
fs.writeFile("./src/at-11083.html", text, error => {
  if (error) return console.log("写入文件失败,原因是" + error.message);
  console.log("写入成功");
});
