import CompanyLayout from '../../../../../../layouts/CompanyLayout'
import { useRouter } from 'blitz'

const CompanyEditVacancy = () => {
  const { params } = useRouter()
  if (!params.id) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    )
  }
  if (params.id) {
    return (
      <>
        <h2>{`Edit Vacancy ${params?.id}`}</h2>
      </>
    )
  }
}

CompanyEditVacancy.getLayout = (page) => <CompanyLayout title="Pumpt | Home">{page}</CompanyLayout>
export default CompanyEditVacancy