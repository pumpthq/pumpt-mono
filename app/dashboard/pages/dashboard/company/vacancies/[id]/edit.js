import CompanyLayout from 'app/layouts/CompanyLayout'
import { useRouter } from 'blitz'

const CompanyEditVacancy = () => {
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
        <h1>{`Edit Vacancy ${params?.id}`}</h1>
      </>
    )
  }
}

CompanyEditVacancy.getLayout = (page) => <CompanyLayout title="Pumpt | Edit Vacancy Details">{page}</CompanyLayout>
export default CompanyEditVacancy