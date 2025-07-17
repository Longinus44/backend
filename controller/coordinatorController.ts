import { Request, Response } from "express";
import { CoordinatorRepo } from "../repository/coordinatorRepo";
import { ICoordinator } from "../models/interface";



export class CoordinatorController {
	static getAllCoordinators = async (req: Request, res: Response) => {
		try {
			const coordinators = await CoordinatorRepo.fetchAllCoordinators();
			if (!coordinators || coordinators.length === 0) {
				return res.status(404).json({ message: "No coordinators found" });
			}
			return res.status(200).json(coordinators);
		} catch (error: any) {
			console.error("Error fetching coordinators:", error);
			return res.status(500).json({ message: "Failed to retrieve coordinators" });
		}
	};


	static getCoordinatorById = async (req: Request, res: Response) => {
		try {
			const { id } = req.params;
			const coordinator = await CoordinatorRepo.fetchCoordinatorById((id));

			if (!coordinator) {
				return res.status(404).json({ message: "Coordinator not found" });
			}
			return res.status(200).json(coordinator);
		} catch (error: any) {
			console.error("Error fetching coordinator:", error);
			return res.status(500).json({ message: "Internal server error" });
		}
	};

};
