import db from "db";

export default async function keywords(data) {
  const keywords = await db.keywords.create({ data })
  return keywords
}