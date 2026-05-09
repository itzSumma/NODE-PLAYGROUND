const express = require('express')
const app = express();

const cors = require('cors');
const port = process.env.PORT || 4000;

/*
 * Middleware
 */

app.use(cors());
app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
  res.send('Hello from express learning World!')
})
// Another route

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 28,
    role: "admin",
    isActive: true
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 24,
    role: "user",
    isActive: true
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    age: 30,
    role: "user",
    isActive: false
  }
];

app.get("/users",(req,res)=>{
    // res.send("Users route here")
res.send(users);
});
// Post Method
app.post("/users", (req, res) => {
  console.log("data in request body",req.body);

  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  res.json({
    success: true,
    data: newUser,
    message: "User added successfully"
  });
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
