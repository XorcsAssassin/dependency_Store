const mod=require('http')

const server=mod.createServer(           //createServer is a method to create server which requires a callback function as parameter
  (req,res)=>                            //the callback function itself requires two parameter...which are client side input and output respectively...the nomenclature is req(request) and res(response)
  {                                      //function definition
    console.log(req)
    res.setHeader('Content-Type', 'text/html'); //a good practice to and a requirement if direct html injection is present...tells the engine what type of syntax it is present in code.
    res.write('Hello World!!! ')         //since outside any particular logic hence will be shown is every page loaded
    if(req.url === '/')                  //req.url get us the url requested...one of the property of request object
    {
      //res.end is a necessary syntax for page to load
      res.end('Welcome to our home page')//localhost:5000 and localhost:5000/ are the same...hence hello world and welcome to our home page will be shown together
    }
    else if(req.url==='/about')
    {
      res.end('This is our short history')
    }
    //This logic will be executed if other conditions are False
    else
    {
      res.end(`                         
      <h1>"Opps!"</h1>
      <p>"We can't seem to find the page you are looking for"</p>
      <a href="/">Back Home</a>`     //href="/" will send user to home page i.e its 1st(index) page
      )                              //templete string ` ` is required to pass html syntax...otherwise ' ' would have suffice
    }
  }
)
server.listen(5000, ()=>{console.log('Server is listening to port 5000')})  /*syntax for port to which server will listen to(basically connected to...take request and give response)
                                                                              The callback in server.listen ensures you know when the server is running, which is useful for debugging and confirmation.*/

