import Coordinator from "../models/coordinatorModel";
import { ICoordinator } from "../models/interface";

export class CoordinatorRepo {
	static async fetchCoordinatorById(id: string): Promise<ICoordinator> {
		try {
			const coordinator = await Coordinator.findOne(({ id: String(id) })).lean();
			if (!coordinator) {
				throw new Error("Coordinator not found");
			}

			return coordinator
		} catch (error: any) {
			throw new Error(error.message)
		}
	}


	static async fetchAllCoordinators(): Promise<ICoordinator[] | []> {
		try {
			const coordinators = await Coordinator.find().lean();
			return coordinators;
		} catch (error: any) {
			throw new Error(error.message);
		}
	}
};
