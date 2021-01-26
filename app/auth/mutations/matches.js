import db from "db";

export default async function matches(data) {
  const matches = await db.matching.create({ data })
  return matches
}