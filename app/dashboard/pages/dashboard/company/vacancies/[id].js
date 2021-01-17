import CompanyLayout from '../../../../../layouts/CompanyLayout'

const CompanyVacancyPage = () => {
  return (
    <>
      <h2>Vacancy Details</h2>
    </>
  )
}

CompanyVacancyPage.getLayout = (page) => <CompanyLayout title="Pumpt | Home">{page}</CompanyLayout>
export default CompanyVacancyPage