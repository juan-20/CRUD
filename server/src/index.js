const { request, response } = require('express');
const express = require('express');

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

app.post("/People", (request, response) => {
    const body = request.body;
    console.log(body)


   return response.json()
})