import Role from "../models/Role.js";

export const createRole = async(req,res)=>{
    try {
        const {pname,page} = req.body;
        const newRole = await new Role({pname:pname,page:page});
        await newRole.save();
        return res.send("Role ok")
    } catch (error) {
        
        return res.send("Role not ok");

    }
}

export const getAll = async(req,res)=>{
    try {
        const allRole = await Role.find({});
        return res.send(allRole)
    } catch (error) {
        return res.send("ise")
        
    }
}

export const getAllById = async(req,res)=>{
    try {
        const roleID = req.params.id;
        const allRoleByid = await Role.findById({_id:roleID})
        return res.send(allRoleByid);
    } catch (error) {
        return res.send("ise")
    }
}

export const updateRole = async(req,res)=>{
    try {
        const updateID = req.params.id;
        const roleUpdate = await Role.findById({_id:updateID});
        if (roleUpdate) {
            const newData = await Role.findByIdAndUpdate(updateID,{$set:req.body},{new:true});
            return res.send("role update");
        } else {
            return res.send("role not update");
            
        }
    } catch (error) {
        return res.send("ise");
        
    }
}

export const deleteRole = async(req,res)=>{
    try {
        const deleteID = req.params.id;
        const roleDelete = await Role.findById({_id:deleteID});
        if (roleDelete) {
            const newData = await Role.findByIdAndDelete(deleteID,{$set:req.body},{new:true});
            return res.send("role delete");
        } else {
            return res.send("role not delete");
            
        }
    } catch (error) {
        return res.send("ise");
        
    }
}


