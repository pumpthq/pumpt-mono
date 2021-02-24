import db from 'db'

export default async function getCompanies(_, ctx) {
  // ctx.session.authorize("ADMIN")

  const companies = await db.company.findMany()
  return companies
}