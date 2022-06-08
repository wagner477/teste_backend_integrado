import { Request, Response } from "express";
import { FindUniversityByIdUseCase } from "./FindUniversityByIdUseCase";

export class FindUniversityByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const findUniversityByIdUseCase = new FindUniversityByIdUseCase();

    const university = await findUniversityByIdUseCase.execute(id);

    return res.json(university);
  }
}
