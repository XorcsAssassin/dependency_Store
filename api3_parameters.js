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

app.get('/api/products/:productID', (req, res) => {   //'productID' is a placeholder. It can be named anything but is generally named logically acc to parameter searched
  // console.log(req)
  // console.log(req.params)
  const {productID}=req.params    //deconstruction req.param
  const Product1 = Products.find((Product) => {
    return Product.id==productID  //== is typecasted comparision since params returns value in string datatype...we could have also used Product.id===Number(productID)
  })
  if (Product1) {   
    res.status(200).json(Product1);
  } else {    
    res.status(404).send('Product not found');
  }
});

//It can get more complex with req.params..e.g-
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const {productID, reviewID}=req.params
  if(reviewID==="abc")    //for e.g purpose
    res.status(200).send('Good Product')
  else
  res.status(404).send('<h4>Review not Found<h4>')
});

app.listen(5000,()=>{console.log('Server is listening to port 5000...')})