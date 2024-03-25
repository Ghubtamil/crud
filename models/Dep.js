import mongoose from "mongoose";

const DepSchema = new mongoose.Schema(
    {
        dept:{type:String,required:true}
    }
);

export default mongoose.model("Branch",DepSchema);