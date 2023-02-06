import { Router } from "express";
import { JOB_GET, JOB_POST } from "./job";

const router = Router()

router.get("/job/get", JOB_GET)
router.post("/job/post", JOB_POST)

export default router
