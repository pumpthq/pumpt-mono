import CompanyLayout from '../../../../../layouts/CompanyLayout'

const CompanyEditProfilePage = () => {
  return (
    <>
      <h1>Edit Profile</h1>
    </>
  )
}

CompanyEditProfilePage.getLayout = (page) => <CompanyLayout title="Pumpt | Edit Profile">{page}</CompanyLayout>
export default CompanyEditProfilePage