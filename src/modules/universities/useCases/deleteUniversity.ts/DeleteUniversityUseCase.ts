import { prisma } from "../../../../database/prismaClient";

interface IDeleteUniversity {
  id: string;
}

export class DeleteUniversityUseCase {
  async execute({ id }: IDeleteUniversity) {
    const university = await prisma.universities.findUnique({
      where: {
        id: id,
      },
    });

    if (!university) {
      throw new Error("University not found.");
    }

    const universityDeleted = await prisma.universities.delete({
      where: {
        id,
      },
    });

    return universityDeleted;
  }
}
