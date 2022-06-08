import { prisma } from "../../../../database/prismaClient";

interface IUpdateUniversity {
  id: string;
  web_pages: string[];
  name: string;
  domains: string[];
}

export class UpdateUniversityUseCase {
  async execute({ id, web_pages, name, domains }: IUpdateUniversity) {
    const universityExists = await prisma.universities.findUnique({
      where: {
        id,
      },
    });

    if (!universityExists) {
      throw new Error("University not found.");
    }

    const universityUpdate = await prisma.universities.update({
      where: {
        id: id,
      },
      data: {
        web_pages: web_pages,
        name: name,
        domains: domains,
      },
    });

    return universityUpdate;
  }
}
