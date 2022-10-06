import express from 'express'
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 3000;
let user = [];
app.post("/user",(req,res)=>{
    console.log(req.body);
    user.push(req.body);
    res.send("user is created");
})
app.get("/user",(req,res)=>{
    //res.send("here is your user");
    res.send(user);
})
app.put("/user",(req,res)=>{
    res.send("your user is modified");
})
app.delete("/user",(req,res)=>{
    res.send("user is deleted");
})
app.get('/', (req, res) => {
    console.log("my server");
    res.send('Hello World!')
  })
  app.get('/profile', (req, res) => {
    console.log("my server");
    res.send('this is my profile')
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
