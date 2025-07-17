import Booking from "../models/bookingModel";
import { IBookingForm } from "../models/interface";

export class BookingRepo {

	static async createBooking(data: IBookingForm): Promise<void> {
		try {
			await Booking.create(data);
		} catch (error: any) {
			throw new Error(error.message)
		}
	}

	static async findExistingBooking(coordinatorId: string, weddingdate: string) {
		return Booking.findOne({
			coordinatorId,
			weddingdate,
		});
	}
};
