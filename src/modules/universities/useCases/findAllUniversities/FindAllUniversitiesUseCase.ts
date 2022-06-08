import { prisma } from "../../../../database/prismaClient";
import { RequestHandler } from "express";

export class FindAllUniversitiesUseCase {
  async execute(country?: any) {
    if (country) {
      const universities = await prisma.universities.findMany({
        select: {
          id: true,
          name: true,
          country: true,
          state_province: true,
        },
        take: 20,
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
        take: 20,
      });

      return universities;
    }
  }
}
