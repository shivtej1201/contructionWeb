import '../models/connection.js';
import UserSchemaModel from '../models/user.model.js';
import sendEmail from './mail.controller.js';
import url from 'url';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';

export var updateUser=async(req,response,next)=>{
  let userDetails = await UserSchemaModel.findOne(req.body.condition);
  if(userDetails){
     let user=await UserSchemaModel.updateOne(req.body.condition,req.body.set);   
     if(user)
      return response.status(201).json({"msg":"success"});
     else
      return response.status(500).json({error: "Server Error"});
  }
  else
   return response.status(404).json({error: "Requested resource not available"});
}

export var deleteUser=async(request,response,next)=>{
  var id = request.params.id;
  var user = await UserSchemaModel.find({_id: id});
  if(user.length!=0){
    let result = await UserSchemaModel.deleteMany({_id:id}); 
    if(result)
     return response.status(201).json({"msg":"success"});
    else
     return response.status(500).json({error: "Server Error"});
  }
  else
    return response.status(404).json({error: "Resource not found"}); 
}

export var fetch=async (req,res,next)=>{
  var condition_object=url.parse(req.url,true).query;
  var userList = await UserSchemaModel.find(condition_object);
  var l=userList.length;
  if(l!=0)
    return res.status(201).json(userList);
  else
    return res.status(500).json({"result": "Server Error"});
}

export var save = async (req,res,next)=>{
  var userDetails=req.body
  sendEmail(userDetails.email,userDetails.password);
  var userList = await UserSchemaModel.find();
  var l=userList.length;
  var _id=l==0?1:userList[l-1]._id+1;
  userDetails={...userDetails,"_id":_id,"status":0,"role":"user","info":Date()};
  var user = await UserSchemaModel.create(userDetails);
  if(user)
    return res.status(201).json({"status":true});
  else
    return res.status(500).json({"status": false});
}

export var login=async (req,res,next)=>{
  var userDetails=req.body;
  userDetails={...userDetails,"status":1};
  var userList = await UserSchemaModel.find(userDetails);
  var l=userList.length;
  if(l!=0)
  {
    let payload={"subject":userList[0].email};
    let key=rs.generate();
    let token=jwt.sign(payload,key);
    return res.status(201).json({"token":token,"userDetails":userList[0]});
  }
  else
    return res.status(500).json({"token": "error"});
}
