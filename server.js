
const express = require("express");
const connectDB = require('./config/connectDB');
const User = require("./models/User");
require("dotenv").config({path:"./config/.env"});

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;


app.use(express.json())
app.post('/add',async(req,res)=>{
    const{fullName,email,phone}=req.body;
try {
    const newUser = new User({
        fullName,
        email,
        phone,
    });
    await newUser.save();
    res.send(newUser);
} catch (error) {
    console.log(error);
    
}
});

app.get('/all',async(req,res)=>{
    try {
        const all=await User.find();
        res.send(all)
    } catch (error) {
        console.log(error)
        
    }
})

app.delete('/user/:id',async(req,res)=>{
    try {
         await User.findByIdAndDelete(req.params.id);
        res.send('user deleted')
    } catch (error) {
        console.log(error)
        
    }
})

app.put("/edit/:x",async(req,res)=>{
    try {
        const editedUser = await User.findByIdAndUpdate(req.params.x,{...req.body,},
            {new:true});
            res.send(editedUser);
    } catch (error) {
        console.log(error)
        
    }
})




app.listen(PORT,(err)=>err? console.log(err): console.log(`server is running on port ${PORT}`));