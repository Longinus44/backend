import { Router } from "express";
import { CoordinatorController } from "../controller/coordinatorController";

const router = Router();

router.get("/", CoordinatorController.getAllCoordinators);
router.get("/:id", CoordinatorController.getCoordinatorById);

export default router;
