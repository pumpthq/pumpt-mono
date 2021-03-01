import PublicLayout from 'app/layouts/PublicLayout'

const EmployersPage = () => {
  return (
    <>
      <main>
        <div className="hero">

          <h1 style={{ fontSize: "70px" }}>We&#39;re <span style={{ color: '#8C50FF' }}>Pumpt</span>. Nice to Meet You.</h1>
          <p style={{ fontSize: "20px", width: '70%' }}>Join Pumpt to get matched with pre-vetted and qualified Candidates in the digital media, ad tech, and SaaS/Enterprise industries.</p>
        </div>


      </main>

      <style>{`
        main {
          max-width: 1500px;
          margin: 0 auto;
          border: 1px solid white
          margin-top: 40px;
          display: block;
        }
        .hero {
          margin-top: 60px;
          min-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start
        }
      `}</style>
    </>
  )
}


EmployersPage.getLayout = (page) => <PublicLayout title="Pumpt | For Employers">{page}</PublicLayout>
export default EmployersPage