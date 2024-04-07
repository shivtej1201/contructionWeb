import mongoose from 'mongoose';
const url="mongodb://localhost:27017/Shiv";
mongoose.connect(url);
console.log("Successfully connected to mongodb database");
