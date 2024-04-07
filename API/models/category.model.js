//Require Mongoose
import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const CategorySchema = mongoose.Schema({
  _id: Number,
  catnm: {
    type: String,
required : ["Name is required",true],
    lowercase: true,
    unique: true,
    trim: true,
  },
  caticonnm: {
    type: String,
    required : ["Category icon is required", true],
    trim: true
  }
});

// Apply the uniqueValidator plugin to UserSchema.
CategorySchema.plugin(uniqueValidator);

// compile schema to model
const CategorySchemaModel = mongoose.model('category_collection',CategorySchema);

export default CategorySchemaModel