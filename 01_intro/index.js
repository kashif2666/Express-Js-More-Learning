const fs=require('fs');
const express=require('express');
const morgan=require('morgan');

const index=fs.readFileSync('index.html','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));

const products=data.products;

const server=express();


//body parser
server.use(express.json());
// server.use(express.urlencoded());


server.use(morgan('default'));


//it is remote folder that is directly accessed: Static Hosting
server.use(express.static('public'));



// server.use((req,res,next)=>{
//   console.log(req.method,req.ip,req.hostname, new Date(),req.get('User-Agent'));
//   next()
// })

const auth=((req,res,next)=>{
  // console.log(req.query);

  // if (req.body.password=='kashif') {
  //   next()
  // }else{

  //   res.sendStatus(401);
  // }
  next()
})




// API- Endpoint -Route

server.get('/products/:id',auth,(req,res)=>{
  console.log(req.params);
  res.json({type:'GET'})
})

server.post('/',auth,(req,res)=>{
  res.json({type:'POST'})
})

server.put('/',(req,res)=>{
  res.json({type:'PUT'})
})

server.patch('/',(req,res)=>{
  res.json({type:'PATCH'})
})

server.get('/demo',(req,res)=>{
  res.status(201).send('<h1> hello </h1>');
  // res.sendFile('B:/full stack/Express2/01_intro/index.html');
  // res.json(products);
})





server.listen(2000,()=>{
  console.log('Server Started');
});