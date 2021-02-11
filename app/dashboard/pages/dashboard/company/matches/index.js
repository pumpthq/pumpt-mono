import CompanyLayout from '../../../../../layouts/CompanyLayout'

const CompanyMatchesPage = () => {
  return (
    <>
      <h1>Company Matches</h1>
    </>
  )
}

CompanyMatchesPage.getLayout = (page) => <CompanyLayout title="Pumpt | Matches">{page}</CompanyLayout>
export default CompanyMatchesPage