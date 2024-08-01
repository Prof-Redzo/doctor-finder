import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
    username: String,
    password: String,
    role: String,
    createdAt: {type: Date, default: new Date()}, 
    updatedAt: {type: Date, default: new Date()}
});  

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;