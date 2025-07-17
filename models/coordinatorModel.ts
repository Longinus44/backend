import mongoose, { Types } from "mongoose";

const CoordinatorSchema = new mongoose.Schema({
	id: { type: String, required: true },
	name: { type: String, required: true },
	location: { type: String, required: true },
	price: { type: Number, required: true },
	profilephoto: { type: String, required: true },
	bio: { type: String, required: true },
	availability: [{ type: String, required: true }],
});

const Coordinator = mongoose.model("Coordinator", CoordinatorSchema);
export default Coordinator;
