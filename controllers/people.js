let {people}=require('../data')    //using let since we may modify the data

const getPeople=(req,res)=>{
  res.status(200).json({success:true, data:people})
}

const postPeople=(req,res)=>{
  const {name}=req.body
  if(!name){
    return res.status(400).json({success:false,msg:'please provide name value'})
  }
  res.status(201).json({success:true, person:name})
}

const postPeoplePostman=(req,res)=>{
  const {name}=req.body
  if(!name){
    return res.status(400).json({success:false,msg:'please provide name value'})
  }
  res.status(201).json({success:true, data:[...people,name]})
}

const updatePeople=(req,res)=>{
  const {id}=req.params
  const {name}=req.body
  const person=people.find((person)=>person.id==id) //short for const person = people.find(function(person) {return person.id == Number(id);}) ***const person=people.find((person)=>{person.id==Number(id)}) doesn't work***
  if(!person){
    return res.status(404).json({success: false, msg: `No person with ${id}`})
  }
  const newPeople=people.map((person)=>{
    if(person.id==id){
      person.name=name
    }
    return person
  })
  res.status(200).json({success: true, data: newPeople})
}

const deletePeople=(req,res)=>{
  const person=people.find((person)=>person.id==req.params.id) //short for const person = people.find(function(person) {return person.id == Number(id);}) ***const person=people.find((person)=>{person.id==Number(id)}) doesn't work***
  if(!person){
    return res.status(400).json({success: false, msg: `No person with ${req.params.id}`})
  }
  const newPeople=people.filter((person)=>{
    if(person.id!=req.params.id){
      return person
    }
  })
  return res.status(200).json({success: true, data: newPeople})
}

module.exports={
  getPeople,
  postPeople,
  postPeoplePostman,
  updatePeople,
  deletePeople
}