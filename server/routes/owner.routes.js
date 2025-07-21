import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { changeRoleToOwner } from "../controllers/owner.controller.js"
const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleToOwner);

export default ownerRouter;
