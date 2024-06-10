const authorize=(req, res, next)=>{
  const {user}=req.query
  if(user==='John'){
    req.user={name: 'John', id:3}//adding property named user to req object...which can be logged if required using req.user
    next()
  }
  else{
    res.status(401).send('<h3>Unauthorized</h3>')
  }
}

module.exports=authorize