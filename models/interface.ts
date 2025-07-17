import mongoose, { Types } from "mongoose";
export interface ICoordinator {
	id: string
	name: string;
	location: string;
	price: number;
	profilephoto: string;
	bio: string;
	availability: string[];
	__v?: number;
}

export interface IBookingForm {
	_id: string;
	coordinatorId: string;
	name: string;
	email: string;
	weddingdate: string;
	guestscount: string;
}