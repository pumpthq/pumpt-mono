import CompanyLayout from '../../../../layouts/CompanyLayout'

const CompanyProfilePage = () => {
  return (
    <>
      <h1>Company Profile</h1>
    </>
  )
}

CompanyProfilePage.getLayout = (page) => <CompanyLayout title="Pumpt | Company Profile">{page}</CompanyLayout>
export default CompanyProfilePage