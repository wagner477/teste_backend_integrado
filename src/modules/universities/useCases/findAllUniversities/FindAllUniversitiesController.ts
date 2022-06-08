import { Request, Response } from "express";
import { FindAllUniversitiesUseCase } from "./findAllUniversitiesUseCase";

export class FindAllUniversitiesController {
  async handle(req: Request, res: Response) {
    const { country } = req.query;

    const findAllUniversitiesUseCase = new FindAllUniversitiesUseCase();

    if (country) {
      const universities = await findAllUniversitiesUseCase.execute(country);
      return res.json(universities);
    } else {
      const universities = await findAllUniversitiesUseCase.execute();
      return res.json(universities);
    }
  }
}
