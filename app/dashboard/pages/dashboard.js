import CandidateLayout from '../../layouts/CandidateLayout'
// TODO: Redirect anyone that lands on this page either back to login if no auth, otherwise redirect to appropriate dashboard
const CandidatesPage = () => {
  return (
    <>
      Candidates Page
    </>
  )
}

CandidatesPage.getLayout = (page) => <CandidateLayout title="Pumpt | Home">{page}</CandidateLayout>
export default CandidatesPage