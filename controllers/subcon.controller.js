import Subcon from "../models/Subcon.js";
import Staffreg from "../models/Subcon.js";

export const createSubcon = async(req,res)=>{
    try {
        const {Name,idNumber,inTime,outTime,Remarks} = req.body;
        const newSubcon = await new Subcon({

            Name:Name,
            idNumber:idNumber,
            inTime:inTime,
            outTime:outTime,
            Remarks:Remarks
        });
        await newSubcon.save();
        return res.send("Subcon ok");
    } catch (error) {
        return res.send("Subcon Not ok");
        
    }
}

export const getAllSubcon = async(req,res)=>{
    try {
        const allSubcon = await Subcon.find({});
        return res.send(allSubcon);
    } catch (error) {
        return res.send("ise")
    }
}

export const getAllSubconById = async(req,res)=>{
    try {
        const subconID = req.params.id;
        const allSubconById = await Subcon.findById({_id:subconID});
        return res.send(allSubconById)
    } catch (error) {
        
    }
}

export const updateSubcon = async (req, res) => {
    try {
      const updateID = req.params.id;
      const subconUpdate = await Subcon.findById({ _id: updateID });
      if (subconUpdate) {
        const newData = await Subcon.findByIdAndUpdate(
          updateID,
          { $set: req.body },
          { new: true }
        );
        return res.send("update successfully");
      } else {
        return res.send("Not update ");
      }
    } catch (error) {
      return res.send("ISE");
    }
  };


  export const deleteSubcon = async (req, res) => {
    try {
      const deleteID = req.params.id;
      const subconDelete = await Subcon.findById({ _id: deleteID });
      if (subconDelete) {
        const newData = await Subcon.findByIdAndDelete(
          deleteID,
          { $set: req.body },
          { new: true }
        );
        return res.send("delete successfully");
      } else {
        return res.send("Not delete ");
      }
    } catch (error) {
      return res.send("ISE");
    }
  };