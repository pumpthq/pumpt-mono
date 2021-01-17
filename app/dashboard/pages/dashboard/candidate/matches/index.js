import CandidateLayout from '../../../../../layouts/CandidateLayout'

const CandidateMatchesPage = () => {
  return (
    <>
      <h2>Candidate Matches</h2>
    </>
  )
}

CandidateMatchesPage.getLayout = (page) => <CandidateLayout title="Pumpt | Home">{page}</CandidateLayout>
export default CandidateMatchesPage