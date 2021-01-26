import db from "db";

export default async function companies(data) {
  const companies = await db.company.create({ data })
  return companies
}