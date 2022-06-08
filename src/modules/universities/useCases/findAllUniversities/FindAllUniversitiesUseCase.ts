import { prisma } from "../../../../database/prismaClient";

export class FindAllUniversitiesUseCase {
  async execute(country?: any) {
    try {
      if (country) {
        const universities = await prisma.universities.findMany({
          select: {
            id: true,
            name: true,
            country: true,
            state_province: true,
          },
          take: 40,
          where: {
            country: country,
          },
        });

        return universities;
      } else {
        const universities = await prisma.universities.findMany({
          select: {
            id: true,
            name: true,
            country: true,
            state_province: true,
          },
          take: 40,
        });

        return universities;
      }
    } catch (e) {
      throw new Error("Unexpected error.");
    }
  }
}
