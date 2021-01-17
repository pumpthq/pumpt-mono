import CandidateLayout from '../../../../../layouts/CandidateLayout'

const CandidateConversationsPage = () => {
  return (
    <>
      <h2>Conversations</h2>
    </>
  )
}

CandidateConversationsPage.getLayout = (page) => <CandidateLayout title="Pumpt | Home">{page}</CandidateLayout>
export default CandidateConversationsPage