import CandidateLayout from '../../../../../layouts/CandidateLayout'

const CandidatesEditProfilePage = () => {
  return (
    <>
      <h2>Edit Profile</h2>
    </>
  )
}

CandidatesEditProfilePage.getLayout = (page) => <CandidateLayout title="Pumpt | Home">{page}</CandidateLayout>
export default CandidatesEditProfilePage