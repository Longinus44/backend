import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export class Database {
	static async connect(): Promise<void> {
		const MONGO_URI = process.env.MONGO_URI;

		if (!MONGO_URI) {
			console.error("MONGO_URI is not defined in environment variables.");
			process.exit(1);
		}

		try {
			await mongoose.connect(MONGO_URI);


			console.log("Database connected successfully");
		} catch (error) {
			console.error("Database connection error:", error);
			process.exit(1);
		}
	}
}