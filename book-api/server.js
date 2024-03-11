const express = require("express");
const app = express();
const port = 8080;

// ? receiving incoming data from the client config
  app.use(express.json);
const books = [
    {id:'1', title:'Mern stack', author:'Tannu Ahuja'},
    {id:"2", title:'DSA', author:'Tannu Ahuja'},
    {id:"3", title:'Devops', author:'Tannu Ahuja'}
]
//?home route
  app.get("/", (req,res)=>{
    res.json({
        status:'success',
        message:'Welome, to first book API using express',
    });
  });

//?   fetch all books
  app.get("/books", (req,res)=>{
    res.json({
        status:'success',
        message:"all books data fetched successfully",
        data:books,
    });
  });

  //? fetch a single book
  app.get("/books/:id", (req,res)=>{
    // console.log(req.params.id)
    const id = req.params.id;
    const bookFound = books.find((book)=> book.id ===id);
    console.log(bookFound);
    if(!bookFound){
        res.json({
            status:"failed",
            message:`The book with this id : ${id} is not found`,
        });
    }
    res.json({
        status:"success",
        message:"request for single book",
        data :bookFound,
    });
  })   
//!---------------sent some data to a server------------
//? create a book
app.post("/books", (req,res)=>{
    // to access the data from Postman API
    // express could not pass data from the client it needs middleware
    console.log(req.body);
    // push this data to existing book
    const newPost = req.body;
    books.push(newPost);
    res.json({
        status:'success',
        message:"book is created successfully",
    });
  });

//? start the server
app.listen(port, ()=>{
   console.log(`app is listening on port ${port}`)
})