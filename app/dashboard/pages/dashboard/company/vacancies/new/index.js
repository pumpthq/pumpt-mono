import CompanyLayout from 'app/layouts/CompanyLayout'


const NewVacancyPage = () => {
  return (
    <>
      <div>
        <h1>Post a New Vacancy</h1>
      </div>
    </>
  )
}

NewVacancyPage.getLayout = (page) => <CompanyLayout title="Pumpt | Vacancies">{page}</CompanyLayout>
export default NewVacancyPage