


const home=(req,res)=>{
  const user=req.user;
  console.log(user);
  res.json({user});
}


module.exports={home};