import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    role: String,
    createdAt: {type: Date, default: new Date()}, 
    updatedAt: {type: Date, default: new Date()}
});  

const User = mongoose.model("User", userSchema);

export default User;