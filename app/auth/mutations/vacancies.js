import db from "db";

export default async function vacancies(data) {
  const vacancies = await db.vacancy.create({ data })
  return vacancies
}