import db from 'db'

export default async function getMatches(_, ctx) {
  // ctx.session.authorize("ADMIN")

  const matches = await db.match.findMany()
  return matches
}