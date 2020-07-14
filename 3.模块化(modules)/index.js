require('./db/index')
//引入model对象
let StudentsModel=require('./collections/students')
let TeachersModel =require ('./collections/teachers')
StudentsModel.create({
  name:'打工仔',
  age:80,
  hobby:'爱干活',
  info:'勤勤恳恳'
})
TeachersModel.create({
  name:'袁丁',
  age:60,
  hobby:'教书育人',
  info:'教学严谨'
})