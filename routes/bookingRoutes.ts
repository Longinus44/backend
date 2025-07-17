import { Router } from "express";
import { BookingController } from "../controller/bookingController";

const router = Router();

router.post("/", BookingController.submitBooking);

export default router;
