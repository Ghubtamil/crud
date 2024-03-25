import express from "express";
import {
  createStaffReg,
  deleteStaffReg,
  getAllStaffReg,
  getAllStaffRegById,
  updateStaffReg
} from "../controllers/staffreg.controller.js";

const router = express.Router();

router.post("/create", createStaffReg);
router.get("/getall", getAllStaffReg);
router.get("/getall/:id", getAllStaffRegById);
router.put("/update/:id", updateStaffReg);
router.delete("/delete/:id", deleteStaffReg);

export default router;
