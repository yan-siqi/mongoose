const mongoose=require ('mongoose')
const TeachersSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique:true
  },
  age:Number,
  hobby:[String],
  info:mongoose.SchemaTypes.Mixed,//代表任意类型
  deleted:{
    type:Boolean,
    default:false
  }
})
//创建model对象
const TeachersModel=mongoose.model('teachers',TeachersSchema)
//向外暴露数据
module.exports=TeachersModel