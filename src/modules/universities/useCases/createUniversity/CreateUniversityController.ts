import { Request, Response } from "express";
import { CreateUniversityUseCase } from "./createUniversityUseCase";

export class CreateUniversityController {
  async handle(req: Request, res: Response) {
    const {
      alpha_two_code,
      web_pages,
      name,
      country,
      domains,
      state_province,
    } = req.body;

    const createUniversityUseCase = new CreateUniversityUseCase();

    const university = await createUniversityUseCase.execute({
      alpha_two_code,
      web_pages,
      name,
      country,
      domains,
      state_province,
    });

    return res.json(university);
  }
}
