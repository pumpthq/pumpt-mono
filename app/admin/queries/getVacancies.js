import db from 'db'

export default async function getVacancies(_, ctx) {
  // ctx.session.authorize("ADMIN")
  const vacancies = await db.vacancy.findMany()
  return vacancies
}