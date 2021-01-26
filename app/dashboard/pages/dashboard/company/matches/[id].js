import CompanyLayout from '../../../../layouts/CompanyLayout'

const CompanyMatchPage = () => {
  return (
    <>
      <h2>Company Match</h2>
    </>
  )
}

CompanyMatchPage.getLayout = (page) => <CompanyLayout title="Pumpt | Home">{page}</CompanyLayout>
export default CompanyMatchPage