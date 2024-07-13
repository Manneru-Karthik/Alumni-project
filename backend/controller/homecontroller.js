


const home=(req,res)=>{
  const user=req.user;
  console.log(user);
  res.json({msg:"Home page"});
}


module.exports={home};