import CandidateLayout from '../../layouts/CandidateLayout'

const CandidatesPage = () => {
  return (
    <>
      Candidates Page
    </>
  )
}

CandidatesPage.getLayout = (page) => <CandidateLayout title="Pumpt | Home">{page}</CandidateLayout>
export default CandidatesPage