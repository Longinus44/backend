import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { Database } from './models/db';
import coordinatorRoutes from './routes/coordinatorRoutes';
import bookingRoutes from './routes/bookingRoutes';

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/coordinators", coordinatorRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (_, res) => res.send("Wedding Marketplace API is running"));

(async () => {
	try {
		await Database.connect();

		server.listen(PORT, () => {
			console.log(` Server is running on http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error('Failed to start server:', error);
	}
})();
