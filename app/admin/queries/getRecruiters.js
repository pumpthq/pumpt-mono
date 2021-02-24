import db from 'db'

export default async function getRecruiters(_, ctx) {
  // ctx.session.authorize("ADMIN")

  const recruiters = await db.recruiter.findMany()
  return recruiters
}