const fs = require("fs");
const request = require("superagent");
const superagent = require("superagent-charset")(request);
const cheerio = require("cheerio");
superagent
  .get("https://www.zuowen8.com/chuzhong/zhongkaozuowen/")
  .charset("gbk")
  .end((err, res) => {
    const $ = cheerio.load(res.text);
    $(".alist li").each((index, item) => {
      if (index > 2) return;
      const name = $(item).children().find("a").text();
      const url = $(item).children().find("a").attr("href");
      getDetails({ name, url: "https://www.zuowen8.com" + url });
    });
  });
function getDetails({ name, url }) {
  superagent
    .get(url)
    .charset("gbk")
    .end((err, res) => {
      const $ = cheerio.load(res.text);
      $("#article").children().find("u").remove();
      const content = $("#article").html();
      const text = `{% extends './layout/layout.html' %} 
      {% block title %} ${name} - 作文网 {% endblock %} 
      {% block content %}
        <div>
          <h1>${name}</h1>
          <p>${content}</p>
        </div>
      {% endblock %}`;
      fs.writeFile(`./src/${name}.html`, text, error => {
        if (error) {
          console.log("写入文件失败,原因是" + error.message);
        }
        console.log("写入成功", name);
      });
    });
}
