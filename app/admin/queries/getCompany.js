import db from 'db'

export default async function getCompany({ where }, ctx) {
  // ctx.session.authorize("ADMIN")

  const company = await db.company.findOne({ where })
  return company
}