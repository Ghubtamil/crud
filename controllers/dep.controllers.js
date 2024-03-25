import Dep from "../models/Dep.js";

export const createDep = async(req,res,next)=>{
    try {
        const {dept}=req.body;
        const newDep = new Dep({dept:dept});
        await newDep.save()
        return res.send("dep created")
    } catch (error) {
        return res.send("dep not  created")
    }
}