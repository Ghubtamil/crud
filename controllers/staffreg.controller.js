import Dep from "../models/Dep.js";
import Staffreg from "../models/Staffreg.js";

export const createStaffReg = async(req,res)=>{
    try {
        const {Name,idNumber,inTime,outTime,Remarks} = req.body;
        const branchCollection = await Dep.find({dept:"Kone"});
        const newStaffReg = await new Staffreg({

            Name:Name,
            idNumber:idNumber,
            inTime:inTime,
            outTime:outTime,
            dept:branchCollection,
            Remarks:Remarks
        });
        await newStaffReg.save();
        return res.send("StaffReg ok");
    } catch (error) {
        return res.send("StaffReg Not ok");
        
    }
}

export const getAllStaffReg = async(req,res)=>{
    try {
        const allStaffReg = await Staffreg.find({});
        return res.send(allStaffReg);
    } catch (error) {
        return res.send("ise")
    }
}

export const getAllStaffRegById = async(req,res)=>{
    try {
        const staffRegID = req.params.id;
        const allStaffRegById = await Staffreg.findById({_id:staffRegID});
        return res.send(allStaffRegById)
    } catch (error) {
        
    }
}

export const updateStaffReg = async (req, res) => {
    try {
      const updateID = req.params.id;
      const staffregUpdate = await Staffreg.findById({ _id: updateID });
      if (staffregUpdate) {
        const newData = await Staffreg.findByIdAndUpdate(
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


  export const deleteStaffReg = async (req, res) => {
    try {
      const deleteID = req.params.id;
      const staffregDelete = await Staffreg.findById({ _id: deleteID });
      if (staffregDelete) {
        const newData = await Staffreg.findByIdAndDelete(
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