const express = require("express");
let router = express.Router();
let {User, validateUserLogin} = require("../../models/user")
var bcrypt = require('bcryptjs');
const _ = require("lodash"); 
const jwt = require("jsonwebtoken"); 
const config = require("config");
const auth = require("../../middlewares/auth");

router.post('/register', async (req, res) =>{
  let user = await User.findOne({email: req.body.email});
  if(user) return  res.status(400).send("User with this email already exists!"); 
  user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  await user.generateHashedPassword();
  await user.save();
  let token = jwt.sign({_id: user._id, name: user.name, role: user.role} , config.get("jwtPrivateKey"))
    res.send(token ); 
    let datatoReturn ={
      name: user.name,
      email: user.email,
      token: user.token
    }
  return res.send(datatoReturn);
});

router.post("/login", async(req,res) =>{
    let user = await User.findOne({email: req.body.email});
    if(!user) return  res.status(400).send("User is not registered!"); 
    let isValid = await bcrypt.compare(req.body.password,user.password);
    if(!isValid) return res.status(401).send("Invalid password!")
    let token = jwt.sign({_id: user._id, name: user.name,  role: user.role} , config.get("jwtPrivateKey"))
    res.send(token );
})


module.exports = router;
