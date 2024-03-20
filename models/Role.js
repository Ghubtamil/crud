import mongoose from "mongoose";

const RoleSchema = mongoose.Schema(
    {
        pname:{type:String,required:true},
        page:{type:String,required:true}
    },
    {
        timestamps:true
    }
)

export default mongoose.model('Role',RoleSchema);