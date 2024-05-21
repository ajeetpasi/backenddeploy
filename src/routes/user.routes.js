import { Router } from "express";
import { schoolRegistration } from "../controller/user.contoller.js";

const router = Router();

router.post("/registerSchool", schoolRegistration);

export default router;
