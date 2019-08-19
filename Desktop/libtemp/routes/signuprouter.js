var express=require('express');

const router=express.Router();
router.get("/",function(req,res){
    res.render("signup",{pagetitle:"Library",nav:[{link:"books",title:"Books"},{link:"authors",title:"Authors"},{link:"/signup",title:"SIGN UP"},{link:"/login",title:"LOGIN"},{link:"/addbooks",title:"ADD BOOKS"}]});
})
module.exports=router;