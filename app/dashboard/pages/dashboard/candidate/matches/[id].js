import CandidateLayout from '../../../../layouts/CandidateLayout'

const CandidatesMatchPage = () => {
  return (
    <>
      <h2>Candidate Match</h2>
    </>
  )
}

CandidatesMatchPage.getLayout = (page) => <CandidateLayout title="Pumpt | Home">{page}</CandidateLayout>
export default CandidatesMatchPage