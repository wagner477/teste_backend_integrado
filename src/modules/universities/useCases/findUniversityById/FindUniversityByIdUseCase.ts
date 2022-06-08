import { prisma } from "../../../../database/prismaClient";

export class FindUniversityByIdUseCase {
  async execute(id: string) {
    const university = await prisma.universities.findUnique({
      where: {
        id: id,
      },
    });

    if (!university) {
      throw new Error("University not found");
    }

    return university;
  }
}
