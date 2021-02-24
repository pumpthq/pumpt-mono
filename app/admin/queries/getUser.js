import db from 'db'

export default async function getUser({ where }, ctx) {
  // ctx.session.authorize("ADMIN")

  const user = await db.user.findOne({ where })
  return user
}