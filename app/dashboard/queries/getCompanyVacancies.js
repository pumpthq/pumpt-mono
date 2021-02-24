import db from 'db'

export default async function getCompanyVacancies({ where }, ctx) {
  const vacancies = await db.vacancy.findMany({ where }, { include: { recruiter: true, company: true } })
  return vacancies
}