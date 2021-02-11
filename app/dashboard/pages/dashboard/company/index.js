import CompanyLayout from '../../../../layouts/CompanyLayout'

const CompanyDashboardPage = () => {
  return (
    <>
      <h1>Company Dashboard</h1>
    </>
  )
}

CompanyDashboardPage.getLayout = (page) => <CompanyLayout title="Pumpt | Company Dashboard">{page}</CompanyLayout>
export default CompanyDashboardPage