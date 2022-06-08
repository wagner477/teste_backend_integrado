import { Router } from "express";
import { FindAllUniversitiesController } from "./modules/universities/useCases/findAllUniversities/findAllUniversitiesController";

const routes = Router();

const findAllUniversitiesControler = new FindAllUniversitiesController();

routes.get("/universities/", findAllUniversitiesControler.handle);

export { routes };
