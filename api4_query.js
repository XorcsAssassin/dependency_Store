const express=require('express')
const app=express()

const {products: Products}=require('./data') //imports products as Products

app.get('/',(req,res)=>{
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products',(req,res)=>{
  const newProducts=Products.map((Product)=>{   //The callback function (Product) => {...} is executed for each element in the Products array.For each iteration, the current element (product object) is passed as an argument to the callback function, and this element is assigned to the Product parameter. Product is a parameter of the callback function. It represents the current element (object) being processed by the map method in the Products array.
    const {id, name, image}=Product   //an anonymous object/element is created by destructuring, to select only the desired fields
    return {id, name, image}
  })
  res.json(newProducts)
})

//for specific resource with base path(here /api/product) route parameters are used using req.params, productID being the key element or route paramters
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const {productID}=req.params
  const Product1 = Products.find((Product) => {
    return Product.id==productID  //== is typecasted comparision since params returns value in string datatype...we could have also used Product.id===Number(productID)
  })
  if (Product1) {   
    res.status(200).json(Product1);
  } else {    
    res.status(404).send('Product not found');
  }
})

//for filtering and sorting content in base path webpage itself by using req.query, words after ? in URL being the key element or query parametrs
//since /products is taken for route parameter,hence everything after it will act as route parameter....therfore using /product her
app.get('/api/product/query',(req,res)=>{
  // console.log(req.query)
  const {search, limit}=req.query
  let sortedProducts=[...Products]
  //Filtering&Sorting
  if(search){
    sortedProducts=sortedProducts.filter((product)=>{
      return product.name.startsWith(search)
    })
  }
  
  if(limit){
    sortedProducts=sortedProducts.slice(0,Number(limit))
  }
  //Checking if array is empty, as there may be no content(products) that fullfill client query
  if(sortedProducts.length<1){
    //res.status(200).send('<h1>No Products matched your search</h1>') OR
    return res.status(200).json({success: true, data:[]}) //return makes sure no other code is read after reqponse is send...just a good practice(we can technically omit return)
  }
  else{
    return res.status(200).json(sortedProducts)
  }
  //res.send(sortedProducts) //if return was not added and this syntax not commented..there would be a server side error
})
//one can also setup route and query parameters in a single URL like /:productID/reviews on server side...here productID would be route parameter and anything after ? would be query paramter

app.listen(5000,()=>{console.log('Server is listening to port 5000...')})