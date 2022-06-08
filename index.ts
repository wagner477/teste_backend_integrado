import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  await prisma.universities.create({
    data: {
      name: "Usp",
      country: "Brazil",
      state_province: "São Paulo",
      domains: ["tal", "tatal"],
      alpha_two_code: "SP",
      web_pages: ["sdsd", "ada"],
    },
  });
}

main()
  .catch(console.error)
  .finally(() => {
    console.log("Query finished!");
    prisma.$disconnect();
  });
