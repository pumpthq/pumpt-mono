import db from 'db'

export default async function getCandidateByParams({ where }, ctx) {
  // ctx.session.authorize("ADMIN")

  const candidate = await db.candidate.findOne({ where })
  return candidate
}