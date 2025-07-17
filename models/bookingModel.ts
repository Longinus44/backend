import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
	_id: { type: String, required: true },
	coordinatorId: { type: String, ref: "Coordinator", required: true },
	name: { type: String, required: true },
	email: { type: String, required: true },
	weddingdate: { type: String, required: true },
	guestscount: { type: String, required: true },
});

const Booking = mongoose.model("Booking", BookingSchema);
export default Booking;
