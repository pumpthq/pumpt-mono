import CandidateLayout from '../../../../layouts/CandidateLayout'

const CandidatesDiscoverCompaniesPage = () => {
  return (
    <>
      <h2>Discover Companies</h2>
    </>
  )
}

CandidatesDiscoverCompaniesPage.getLayout = (page) => <CandidateLayout title="Pumpt | Home">{page}</CandidateLayout>
export default CandidatesDiscoverCompaniesPage