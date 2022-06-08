import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

// Lista de paises
const countries = [
  "argentina",
  "brazil",
  "chile",
  "colombia",
  "paraguay",
  "peru",
  "suriname",
  "uruguay",
];

async function getCountry(country) {
  const { data } = await axios.get(
    `http://universities.hipolabs.com/search?country=${country}`
  );

  const uniqueDatas = data.filter(function (a) {
    return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
  }, Object.create(null));

  uniqueDatas.forEach(async (university) => {
    await prisma.universities.createMany({
      data: {
        alpha_two_code: university.alpha_two_code,
        country: university.country,
        domains: university.domains,
        name: university.name,
        state_province: university.state_province,
        web_pages: university.web_pages,
      },
    });
  });
}

async function main() {
  countries.forEach((country) => {
    getCountry(country);
  });

  console.log("importing universities!");
}

main();
