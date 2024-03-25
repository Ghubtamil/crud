import mongoose, { Schema } from "mongoose";

const StaffregSchema = mongoose.Schema(
    {
        Name: { type: String, required: true },
        idNumber: { type: String, required: true },
        inTime: { type: String, required: true },
        outTime: { type: String, },
        dept:{type:[Schema.Types.ObjectId],ref:"Branch",required:true},
        Remarks: { type: String, }
    },

    { timestamps: true }
);

export default mongoose.model("Register", StaffregSchema);