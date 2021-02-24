import db from 'db'

export default async function getRecruiter({ where }, ctx) {
  // ctx.session.authorize("ADMIN")

  const recruiter = await db.recruiter.findOne({ where })
  return recruiter
}