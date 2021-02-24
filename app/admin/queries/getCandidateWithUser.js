import db from 'db'

export default async function getCandidateWithUser({ where }, ctx) {
  // ctx.session.authorize("ADMIN")

  const candidate = await db.candidate.findOne({
    where,
    include: {
      user: true
    }
  })
  return candidate
}