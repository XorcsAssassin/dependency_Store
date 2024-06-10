const logger=(req,res,next)=>{
  const method=req.method
  const url=req.url
  const time=new Date().getFullYear()
  console.log(method, url, time)
  next()  //***IMP syntax, when using middleware, devs need to EITHER terminate the cycle by res.send or ress.json OR pass control to the next function using next() which is used more frequently
}

module.exports=logger