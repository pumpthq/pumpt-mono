import db from 'db'

export default async function getCompanyRecruiters({ where }, ctx) {
  const recruiters = await db.recruiter.findMany({ where })
  return recruiters
}