import db from 'db'

export default async function getMatch({ where }, ctx) {
  // ctx.session.authorize("ADMIN")

  const match = await db.match.findOne({ where })
  return match
}