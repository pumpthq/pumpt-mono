import CandidateLayout from '../../../../layouts/CandidateLayout'

const CandidatesDashboardPage = () => {
  return (
    <>
      <h2>Dashboard</h2>
    </>
  )
}

CandidatesDashboardPage.getLayout = (page) => <CandidateLayout title="Pumpt | Home">{page}</CandidateLayout>
export default CandidatesDashboardPage