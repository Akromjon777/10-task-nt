import { Router } from "express";
import { EMPLOYEES_GET, EMPLOYEES_POST, MIGRATIONS_POST } from "./employees";

const router = Router()

router.get("/employees/get", EMPLOYEES_GET)
router.post("/employees/post/:id", EMPLOYEES_POST)
router.post("/migrations/post", MIGRATIONS_POST)

export default router
