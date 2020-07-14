let mongoose = require("mongoose");
//连接数据库
mongoose.connect("mongodb://localhost:27017/ysq_mongoose", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
//创建一个约束对象(schema)
const NbaSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true, //必要性
    unique: true, //唯一性
  },
  age: Number,
  sex: {
    type: Number,
    default: 1,
  },
  hobby: [String], //代表的是字符串类型上午数组
  info: mongoose.SchemaTypes.Mixed, //代表任意类型
  deleted: {
    type: Boolean,
    default: false,
  },
});
//创建集合对象(model)
const NBAStartsModel = mongoose.model("NBAstarts", NbaSchema);
/* //创建模型对象
StudentsModel.create({
    name:'jack',
    age:33,
    hobby:['篮球'],
    info:'篮球之星'
}); */
//将文档对象数据保存到指定的指令集和当中

(async function () {
  try {
    /* let result=await NBAStartsModel.create({
        name:'kobe',
        age:42,
        hobby:['篮球'],
        info:'篮球之星'
    }) */

    //更新
    /*  const result =await NBAStartsModel.updateOne({name:'averson'},{$set:{age:25}})
    console.log('保存成功') */
    //删除==>软删除,数据必须是schema中声明过的数据
    let result = await NBAStartsModel.updateOne(
      { name: "vlians" },
      { $set: { deleted: true } }
    );
    console.log(result,'保存数据成功');
  } catch (error) {
    console.log("操作失败", error);
  }
})();
