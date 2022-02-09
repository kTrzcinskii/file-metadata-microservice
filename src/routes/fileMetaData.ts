import express from "express";
import { uploadFile, getFileInfo } from "../controllers/fileMetaData";

const router = express.Router();

router.route("/").post(uploadFile).get(getFileInfo);

export default router;
