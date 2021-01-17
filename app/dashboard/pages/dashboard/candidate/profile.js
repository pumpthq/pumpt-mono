import CandidateLayout from '../../../../layouts/CandidateLayout'

const CandidatesProfilePage = () => {
  return (
    <>
      <h2>Candidate Profile</h2>
    </>
  )
}

CandidatesProfilePage.getLayout = (page) => <CandidateLayout title="Pumpt | Home">{page}</CandidateLayout>
export default CandidatesProfilePage