const express=require('express')
const app=express()

const people=require('./routes/people')
const auth=require('./routes/auth')

//static assets
app.use(express.static('./methods-public'))

//for Trad Form
//parse form data
//creates a object in request body with clients input
app.use(express.urlencoded({extended:false}))

//for Js Form
//parse json
app.use(express.json())

//to use apis or routes with different method we setup this .use function with base route
app.use('/api/people',people)

//similarly for /login
app.use('/login',auth)

app.listen(5000,()=>{console.log('Server is listening to port 5000...')})

/*A client submits a form with application/x-www-form-urlencoded data to /login.
The request hits your server.
The express.urlencoded({ extended: false }) middleware parses the form data and populates req.body.
The request continues to the /login route handler in routes/auth.js.
In the route handler, req.body is available and contains the parsed form data.
This mechanism ensures that all incoming requests with URL-encoded data will have their body parsed and available in req.body before any route-specific logic is executed, no matter which file the route is defined in.*/
