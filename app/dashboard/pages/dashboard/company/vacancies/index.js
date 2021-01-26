import CompanyLayout from '../../../../../layouts/CompanyLayout'

const CompanyVacanciesPage = () => {
  return (
    <>
      <h2>Company Vacancies</h2>
    </>
  )
}

CompanyVacanciesPage.getLayout = (page) => <CompanyLayout title="Pumpt | Home">{page}</CompanyLayout>
export default CompanyVacanciesPage