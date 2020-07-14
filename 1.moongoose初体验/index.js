let mongoose=require('mongoose')
//连接数据库
mongoose.connect('mongodb://localhost:27017/ysq_mongoose',{ useUnifiedTopology: true,useNewUrlParser: true,useCreateIndex:true  })
//创建一个约束对象(schema)
const studentsSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,//必要性
        unique:true//唯一性
    },
    age:Number,
    sex:{
        type:Number,
        default:1
    },
    hobby:[String],//代表的是字符串类型上午数组
    info:mongoose.SchemaTypes.Mixed,//代表任意类型
})
//创建集合对象(model)
const StudentsModel=mongoose.model('students',studentsSchema)
//创建一个文档对象
const studentA=new StudentsModel({
    name:'杨九郎',
    age:50,
    hobby:['唱流行歌曲','说相声'],
    info:'德云社演员-小杨'

})
//将文档对象数据保存到指定的指令集和当中

studentA.save()
  .then(() => {
    console.log('保存成功');
  })
  .catch(err => {
    console.log('保存失败, ', err);
  })
