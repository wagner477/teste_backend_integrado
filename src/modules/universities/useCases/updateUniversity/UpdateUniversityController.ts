import { Request, Response } from "express";
import { UpdateUniversityUseCase } from "./UpdateUniversityUseCase";

export class UpdateUniversityController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { web_pages, name, domains } = req.body;

    const updateUniversityUseCase = new UpdateUniversityUseCase();

    const university = await updateUniversityUseCase.execute({
      id,
      web_pages,
      name,
      domains,
    });

    return res.json(university);
  }
}
