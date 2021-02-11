import CompanyLayout from '../../../../../../layouts/CompanyLayout'
import { useRouter } from 'blitz'

const CompanyEditRecruiterPage = () => {
  const { params } = useRouter()
  if (!params.id) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    )
  }
  if (params.id) {
    return (
      <>
        <h1>{`Edit Recruiter ${params?.id}`}</h1>
      </>
    )
  }
}

CompanyEditRecruiterPage.getLayout = (page) => <CompanyLayout title="Pumpt | Edit Recruiter Details">{page}</CompanyLayout>
export default CompanyEditRecruiterPage