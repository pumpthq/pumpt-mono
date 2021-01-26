import CompanyLayout from '../../../../../layouts/CompanyLayout'

const CompanyMatchesPage = () => {
  return (
    <>
      <h2>Company Matches</h2>
    </>
  )
}

CompanyMatchesPage.getLayout = (page) => <CompanyLayout title="Pumpt | Home">{page}</CompanyLayout>
export default CompanyMatchesPage