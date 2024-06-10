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

app.get('/api/products/1', (req, res) => {
  const Product1 = Products.find((Product) => {
    return Product.id === 1; // Return the result of the comparison
  });
  if (Product1) {   //checks if Product1 has a value or is null, if there is a value, then the comparision is True and the syntax inside if ares executed,
    res.json(Product1);
  } else {    //if Product1 is null, the comparision is False and the syntax under else syntax are executed
    res.status(404).send('Product not found');
  }
});


app.listen(5000,()=>{console.log('Server is listening to port 5000...')})