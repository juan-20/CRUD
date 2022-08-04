const { request, response } = require('express');
const express = require('express');
const { v4 } = require ('uuid');  

const app = express();

app.use(express.json())

app.listen(3333);

app.get("/recursive", (request, response) => {
   function recursive(){
    for (i= 1; i<=67; i++){
      let divisibleByTwo =  i % 2 
      let divisibleByThree =  i % 3
      let divisibleByTen =  i % 10 

      result = i
      if (divisibleByTen === 0 & divisibleByThree === 0 & divisibleByTwo === 0)return
    }
   }

   recursive()

   return response.json({result})
})

app.get("/multipleByThereeAndFive", (request, response) => {
   function multiple(){
    let anchor = [];
    for (i= 1; i<=100; i++){
      let divisibleByThree =  i % 3
      let divisibleByFive =  i % 5

      result = anchor  
    if (divisibleByFive === 0 & divisibleByThree === 0){
        anchor.push(i)
    }
    }
   }

   multiple()

   return response.json({result})
})


// Criação do usuario


const users = [];

app.post("/createUser", (request, response) => {
    const {name, email, nascimento, telefone} = request.body;
    const id = v4()
    users.push({
      id,
      name,
      email,
      nascimento,
      telefone
    })
    return response.status(201).send()
})
app.get("/getUser", (request, response) => {
    console.log(users)
    return response.status(201).send(users)
})