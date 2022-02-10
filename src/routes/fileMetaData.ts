import express from "express";
import { uploadFile } from "../controllers/fileMetaData";

const router = express.Router();

router.route("/").post(uploadFile);

export default router;
