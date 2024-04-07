import '../models/connection.js';
import UserSchemaModel from '../models/user.model.js';
import CategorySchemaModel from '../models/category.model.js';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export var save=async (req,res,next)=>{
    var categoryDetails=req.body;
    var caticon=req.files.caticon;
    var caticonname=Date.now()+"-"+caticon.name;
    var uploadpath=path.join(__dirname,"../../UI/public/assets/upload/caticon",caticonname);
    caticon.mv(uploadpath);
    var cList = await CategorySchemaModel.find();
    var l=cList.length;
    var _id=l==0?1:cList[l-1]._id+1;
    var categoryDetails={...categoryDetails,"_id":_id,"caticonnm":caticonname};
    console.log(categoryDetails);
    var category = await CategorySchemaModel.create(categoryDetails);
    if(category)
      return res.status(201).json({"result":"Category added successfully...."});
    else
      return res.status(500).json({"result": "Server Error"});
}

export var updateCategory=async(request,response,next)=>{
  let cDetails = await CategorySchemaModel.findOne({_id: request.body._id});
  if(cDetails){
     let id = request.body._id;
     delete request.body._id;
     let c=await CategorySchemaModel.updateOne({_id: id},{$set: request.body});   
     if(c)
      return response.status(201).json({"msg":"success"});
     else
      return response.status(500).json({error: "Server Error"});
  }
  else
   return response.status(404).json({error: "Requested resource not available"});
}

export var deleteCategory=async(request,response,next)=>{
  var id = request.params.id;
  var cDetails = await CategorySchemaModel.find({_id: id});
  if(cDetails.length!=0){
    let result = await CategorySchemaModel.deleteMany({_id:id}); 
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
  var cList = await CategorySchemaModel.find(condition_object);
  var l=cList.length;
  if(l!=0)
    return res.status(201).json(cList);
  else
    return res.status(500).json({"result": "Server Error"});
}




