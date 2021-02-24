import CompanyLayout from '../../../../layouts/CompanyLayout'

const CompanyMatchPage = () => {
  return (
    <>
      <h1>Company Match</h1>
    </>
  )
}

CompanyMatchPage.getLayout = (page) => <CompanyLayout title="Pumpt | Match Details">{page}</CompanyLayout>
export default CompanyMatchPage