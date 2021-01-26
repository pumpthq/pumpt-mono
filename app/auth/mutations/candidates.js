import db from "db";


export default async function candidates(data) {
  const candidates = await db.candidate.create({ data })
  return candidates
}