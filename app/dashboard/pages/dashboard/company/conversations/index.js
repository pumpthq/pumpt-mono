import CompanyLayout from '../../../../../layouts/CompanyLayout'

const CompanyConversationsPage = () => {
  return (
    <>
      <h2>Conversations</h2>
    </>
  )
}

CompanyConversationsPage.getLayout = (page) => <CompanyLayout title="Pumpt | Home">{page}</CompanyLayout>
export default CompanyConversationsPage