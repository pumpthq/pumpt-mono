import PublicLayout from 'app/layouts/PublicLayout'

const CandidatesPage = () => {
  return (
    <>
      <main>
        <div className="hero">

          <h1 style={{ fontSize: "70px" }}>We&#39;re <span style={{ color: '#8C50FF' }}>Pumpt</span>. Nice to Meet You.</h1>
          <p style={{ fontSize: "20px", width: '70%' }}>Are you looking for a new job but have no time to do so? Pumpt does your job
          searching, so you don’t have to. Create your profile to uncover opportunities
          matched to you. It only takes a few minutes, and it’s free to join!</p>
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

CandidatesPage.getLayout = (page) => <PublicLayout title="Pumpt | For Candidates">{page}</PublicLayout>
export default CandidatesPage