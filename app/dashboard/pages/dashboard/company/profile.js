import CompanyLayout from '../../../../layouts/CompanyLayout'

const CompanyProfilePage = () => {
  return (
    <>
      <h2>Company Profile</h2>
    </>
  )
}

CompanyProfilePage.getLayout = (page) => <CompanyLayout title="Pumpt | Home">{page}</CompanyLayout>
export default CompanyProfilePage