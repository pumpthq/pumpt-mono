import db from "db";

export default async function recruiters(data) {
  const recrutiers = await db.recruiter.create({ data })
  return recruiters
}