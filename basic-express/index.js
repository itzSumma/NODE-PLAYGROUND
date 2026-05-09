const express = require('express')
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello from express learning World!')
})
// Another route

const users =[
    {id:1,name:"John Doe",email: "a@b.com"},
    {id:2,name:"Jane Doe",email: "c@d.com"},
    {id:3,name:"Bob Smith",email: "e@f.com"},
]

app.get("/users",(req,res)=>{
    // res.send("Users route here")
res.send(users);
});


    /*
  *Nodemon installed globally:
  *npm install -g nodemon

  *Why?
 * - Automatically server restart kore
  *- Every change er por abar node run korte hoy na
 * - Development faster hoy
*/

//Another route
app.get("/service",(req,res)=>{
    res.send("Service route here")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
