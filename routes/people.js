const express=require('express')
const router=express.Router()

const{getPeople,
  postPeople,
  postPeoplePostman,
  updatePeople,
  deletePeople}=require('../controllers/people')

router.get('/',getPeople)


router.post('/',postPeople)

//for POSTMAN tuitorial
router.post('/postman',postPeoplePostman)

//specifically PUT method
router.put('/:id',updatePeople)

//specifically DELETE method
router.delete('/:id',deletePeople)

//we can also chain the routes
/*
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPeoplePostman)
router.route('/:id').put(updatePeople).delete(deletePeople)
*/

module.exports=router