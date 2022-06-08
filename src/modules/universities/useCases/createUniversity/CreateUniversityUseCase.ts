import { prisma } from "../../../../database/prismaClient";

interface ICreateUniversity {
  alpha_two_code: string;
  web_pages: string[];
  name: string;
  country: string;
  domains: string[];
  state_province: string;
}

export class CreateUniversityUseCase {
  async execute({
    alpha_two_code,
    web_pages,
    name,
    country,
    domains,
    state_province,
  }: ICreateUniversity) {
    const universityExists = await prisma.universities.findFirst({
      where: {
        name,
        country,
        state_province,
      },
    });

    if (universityExists) {
      throw new Error("University already exists.");
    }

    const university = await prisma.universities.create({
      data: {
        alpha_two_code,
        web_pages,
        name,
        country,
        domains,
        state_province,
      },
    });

    return university;
  }
}
