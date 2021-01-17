import CompanyLayout from '../../../../layouts/CompanyLayout'

const CompanyDashboardPage = () => {
  return (
    <>
      <h2>Company Dashboard</h2>
    </>
  )
}

CompanyDashboardPage.getLayout = (page) => <CompanyLayout title="Pumpt | Home">{page}</CompanyLayout>
export default CompanyDashboardPage