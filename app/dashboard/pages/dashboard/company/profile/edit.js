import CompanyLayout from '../../../../../layouts/CompanyLayout'

const CompanyEditProfilePage = () => {
  return (
    <>
      <h2>Edit Profile</h2>
    </>
  )
}

CompanyEditProfilePage.getLayout = (page) => <CompanyLayout title="Pumpt | Home">{page}</CompanyLayout>
export default CompanyEditProfilePage