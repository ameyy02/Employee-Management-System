import express from "express";
import { createTask, getMyTasks, updateTaskStatus } from "../controllers/taskcontroller.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post(
    "/",
    authenticate,
    authorize("admin"),
    createTask
);
router.get(
    "/my-tasks",
    authenticate,
    authorize("employee"),
    getMyTasks
);
router.patch(
    "/:id/status",
    authenticate,
    authorize("employee"),
    updateTaskStatus
);
export default router;