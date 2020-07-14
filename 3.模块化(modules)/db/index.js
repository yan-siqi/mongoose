let mongoose = require("mongoose"); //引入mongoose
//链接指定的数据库
mongoose.connect("mongodb://localhost:27017/ysq_mongoose_modules", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
//绑定事件
mongoose.connection.once("open", (err) => {
  if (err) {
    //node是错误优先机制
    console.log("链接数据库失败", err);
  } else {
    console.log("连接数据库成功");
  }
});
