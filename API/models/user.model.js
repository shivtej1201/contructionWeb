//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    required : ["Name is required",true],
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    required : ["Email is required",true],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required : ["Password is required",true],
    maxlength: 10,
    minlength:5,
    trim: true
  },
  mobile: {
    type: String,
    required : ["Mobile is required",true],
    maxlength: 10,
    minlength:10,
    trim: true
  },
  address: {
    type: String,
    required : ["Address is required",true],
    trim: true
  },
  city: {
    type: String,
    required : ["City is required",true],
    trim: true
  },
  gender: {
    type: String,
    required : ["Gender is required",true],
  },
  role: String,
  status: Number,
  info: String
});

// Apply the uniqueValidator plugin to UserSchema.
UserSchema.plugin(uniqueValidator);

// compile schema to model
const UserSchemaModel = mongoose.model('user_collection',UserSchema);

export default UserSchemaModel