import CandidateLayout from '../../../../../layouts/CandidateLayout'
import { useRouter } from 'blitz'

const CandidatesMatchPage = () => {
  const { params } = useRouter()
  return (
    <>
      <h2>{`Match details for: ${params.id}`}</h2>
    </>
  )
}

CandidatesMatchPage.getLayout = (page) => <CandidateLayout title="Pumpt | Home">{page}</CandidateLayout>
export default CandidatesMatchPage