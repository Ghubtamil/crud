import mongoose from "mongoose";

const SubconSchema = mongoose.Schema(
    {
        Name: { type: String, required: true },
        idNumber: { type: String, required: true },
        inTime: { type: String, required: true },
        outTime: { type: String,  },
        Remarks: { type: String,  } 
    }, 

    { timestamps: true }
);

export default mongoose.model("subcontractor", SubconSchema);