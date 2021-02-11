import CompanyLayout from 'app/layouts/CompanyLayout'

const CompanyVacanciesPage = () => {
  return (
    <>
      <h1>Company Vacancies</h1>
    </>
  )
}

CompanyVacanciesPage.getLayout = (page) => <CompanyLayout title="Pumpt | Vacancies">{page}</CompanyLayout>
export default CompanyVacanciesPage