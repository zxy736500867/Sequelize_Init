const express = require('express');
const router = express.Router();
const  models= require('../models');
const {Op, where} = require('sequelize');




//1.查询所有信息
router.get('/routes/userlist', async function(req, res, next) {

  // models.user.findAll().then(userentity =>{

  //   res.json({user:userentity})
  // } )

  //2.按照id倒叙排列
  // const user_list = await models.user.findAll({
  //   order:[['id','DESC']],
  // });
  // res.json({user:user_list});
  const user_list = await models.user.findAll();

  res.json({user:user_list});

});

//2.通过id查询信息
router.get('/routes/userbyid/:id', async function(req, res, next) {

  const user_id = await models.user.findByPk(req.params.id);
  res.json({user:user_id});


});



//3.新增信息
router.post('/routes/insertuser',async function (req,res,next){

  // const insert_user = await models.user.create({
  //   username: '张鑫宇',
  //   password: 'zxyqwe',
  //   sex:'男',
  //   age:58,
  //   dept:'AD',
  //   createdAt:new Date(),
  //   updatedAt:new Date()
  // });
  // res.json({user:inser_user});

  const insert_user = await models.user.create(req.body);
  res.json({user:insert_user});
})

//4.更新信息
router.put('/routes/updateuserbyid/:id',async function (req,res,next){
  const user_id = await models.user.findByPk(req.params.id);
  user_id.update(req.body);
  res.json({user:user_id});

})

//5.删除信息
router.delete('/routes/deletebyid/:id',async function (req,res,next){

  const user_id = await models.user.findByPk(req.params.id);
  user_id.destroy();
  res.json({msg:'删除成功'});
})

//6.模糊查询
router.get('/routes',async function (req,res,next){

  //定义条件语句
  const condition={};

  //模糊查询用户名
  const username = req.query.username;
  if (username){
    condition.username={
      [Op.like]:'%'+username+'%'
    }
  }
  const user_list = await models.user.findAll({
    where:condition
  });

  res.json({user:user_list});


})

//7.对用户信息进行分页
router.get('/routes/userlist/pageInfo',async function (req,res,next){

  //获取当前页
  const currentPage = parseInt(req.query.currentPage)||1;
  //获取分页长度
  const pageSize = parseInt(req.query.pageSize)||5;

  const pageInfoAndUser = await models.user.findAndCountAll({
    offset:(currentPage-1)*pageSize,
    limit:pageSize
  });

  res.json({
    user:pageInfoAndUser.rows,
    pageInfo:{
      currentPage:currentPage,
      pageSize:pageSize,
      total:pageInfoAndUser.count
    }
  })

})

//8. 关联查询
router.get('/routes/relation/:id', async function(req, res, next) {

  const user_id = await models.user.findOne({
    where:{
      id:req.params.id
    },
    include:[models.achievement]
  });
  res.json({user:user_id});


});


module.exports = router;




