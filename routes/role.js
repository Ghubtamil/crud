import express from "express"
import { createRole ,deleteRole,getAll, getAllById, updateRole } from "../controllers/role.controller.js"

const router = express.Router()

router.post("/create",createRole)
router.get("/all",getAll)
router.get("/all/:id",getAllById)
router.put("/update/:id",updateRole)
router.delete("/delete/:id",deleteRole)

export default router;