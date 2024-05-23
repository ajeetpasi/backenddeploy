import { Router } from "express";
import {
  postCrouselData,
  PostlatestNewsData,
  PostlatestUpdateData,
  PostExamAndEventData,
  getCrouselData,
} from "../controller/home.controller.js";
import { upload } from "../middleware/multer.middleare.js";

const router = Router();

// router.post("/postCrousel", uploadFields, postCrouselData);

router.post("/postCrousel", upload.single("crouselImg"), postCrouselData);
router.post("/postNews", upload.single("newsImage"), PostlatestNewsData);
router.post(
  "/postlatestUpdate",
  upload.single("latestUpdateImg"),
  PostlatestUpdateData
);
router.post(
  "/postexamandevent",
  upload.single("latestUpdateImg"),
  PostExamAndEventData
);

router.get("/crousel", getCrouselData);

export default router;
