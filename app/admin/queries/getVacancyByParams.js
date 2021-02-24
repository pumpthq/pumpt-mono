import db from 'db'

export default async function getVacancyByParams({ where }, ctx) {
  // ctx.session.authorize("ADMIN")
  const vacancy = await db.vacancy.findOne({ where })
  return vacancy
}