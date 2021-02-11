import db from 'db'

export default async function getVacancy({ where }, ctx) {
  // ctx.session.authorize("ADMIN")
  const vacancy = await db.vacancy.findOne({ where })
  return vacancy
}