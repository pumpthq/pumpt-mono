import db from 'db'

export default async function getCandidates(_, ctx) {
  // ctx.session.authorize("ADMIN")

  const candidates = await db.candidate.findMany()
  return candidates
}