import CompanyLayout from '../../../../../layouts/CompanyLayout'

const CompanyVacancyPage = () => {
  return (
    <>
      <h1>Vacancy Details</h1>
    </>
  )
}

CompanyVacancyPage.getLayout = (page) => <CompanyLayout title="Pumpt | Vacancy Details">{page}</CompanyLayout>
export default CompanyVacancyPage