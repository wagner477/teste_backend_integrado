import { Request, Response } from "express";
import { DeleteUniversityUseCase } from "./DeleteUniversityUseCase";

export class DeleteUniversityController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const deleteUniversityUseCase = new DeleteUniversityUseCase();

    await deleteUniversityUseCase.execute({ id });

    return res.json({ message: "University deleted." });
  }
}
