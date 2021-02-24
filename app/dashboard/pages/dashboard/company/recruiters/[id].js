import CompanyLayout from 'app/layouts/CompanyLayout'

const CompanyRecruiterPage = () => {
  return (
    <>
      <h1>Recruiter</h1>
    </>
  )
}

CompanyRecruiterPage.getLayout = (page) => <CompanyLayout title="Pumpt | Recruiter Details">{page}</CompanyLayout>
export default CompanyRecruiterPage