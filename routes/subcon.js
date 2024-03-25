import express from "express";
import {createSubcon,getAllSubcon,getAllSubconById,updateSubcon,deleteSubcon} from "../controllers/subcon.controller.js";

const router = express.Router();

router.post("/create", createSubcon);
router.get("/getall", getAllSubcon);
router.get("/getall/:id", getAllSubconById);
router.put("/update/:id", updateSubcon);
router.delete("/delete/:id", deleteSubcon);

export default router;
