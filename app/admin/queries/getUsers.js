import db from 'db'

export default async function getUsers(_, ctx) {
  // ctx.session.authorize("ADMIN")

  const users = await db.user.findMany()
  return users
}