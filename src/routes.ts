import { Router } from "express";
import { CreateUniversityController } from "./modules/universities/useCases/createUniversity/CreateUniversityController";
import { DeleteUniversityController } from "./modules/universities/useCases/deleteUniversity.ts/DeleteUniversityController";
import { FindAllUniversitiesController } from "./modules/universities/useCases/findAllUniversities/findAllUniversitiesController";
import { FindUniversityByIdController } from "./modules/universities/useCases/findUniversityById/FindUniversityByIdController";
import { UpdateUniversityController } from "./modules/universities/useCases/updateUniversity/UpdateUniversityController";

const routes = Router();

const findAllUniversitiesControler = new FindAllUniversitiesController();
const findUniversityByIdController = new FindUniversityByIdController();
const createUniversityController = new CreateUniversityController();
const updateUniversityController = new UpdateUniversityController();
const deleteUniversityController = new DeleteUniversityController();

routes.get("/universities/", findAllUniversitiesControler.handle);
routes.get("/universities/:id", findUniversityByIdController.handle);

routes.post("/universities/", createUniversityController.handle);

routes.put("/universities/:id", updateUniversityController.handle);

routes.delete("/universities/:id", deleteUniversityController.handle);

export { routes };
