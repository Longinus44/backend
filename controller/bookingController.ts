import { Request, Response } from 'express';
import { IBookingForm } from '../models/interface';
import { BookingRepo } from '../repository/bookingRepo';


export class BookingController {
	static async submitBooking(req: Request, res: Response) {
		const min = 1;
		const max = 50;
		const randomId = String(Math.floor(Math.random() * (max - min + 1)) + min);

		try {
			const bookingDetails: IBookingForm = {
				...req.body,
				_id: randomId,
			};

			const { coordinatorId, name, email, weddingdate, guestscount } = bookingDetails;

			if (!coordinatorId || !name || !email || !weddingdate || !guestscount) {
				return res.status(400).json({
					success: false,
					message: "Missing required booking information. Please provide all details.",
				});
			}


			const existingBooking = await BookingRepo.findExistingBooking(coordinatorId, weddingdate);

			if (existingBooking) {
				return res.status(409).json({
					success: false,
					message: "The selected coordinator is already booked on your chosen date.",
				});

			}

			const result = await BookingRepo.createBooking(bookingDetails);

			res.status(201).json({
				success: true,
				message: "Booking successfully submitted!",
			});
		} catch (error: unknown) {
			console.error("Error creating booking:", error);

			res.status(500).json({
				success: false,
				message: "An unexpected error occurred while submitting your booking. Please try again later.",
			});
		}
	}
}
