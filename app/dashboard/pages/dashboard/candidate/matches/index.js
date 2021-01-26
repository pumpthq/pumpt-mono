
import * as React from 'react'
import CandidateLayout from '../../../../../layouts/CandidateLayout'

const CandidateMatchesPage = () => {
  const [tabData, setTabData] = React.useState({

  })
  return (
    <>
      <h2>Your Matches</h2>
      <p>You can view all of your matches here</p>
      <div className="match-container">
        <div className="match-tabs">
          {/* <div className="match-tab"><p>Matches</p><div className="line"></div></div>
          <div className="match-tab"><p>Approved</p><div className="line"></div></div>
          <div className="match-tab"><p>Bookmarked</p><div className="line"></div></div> */}

        </div>
      </div>
      <style jsx>{`
        .match-container {
          height: 74vh;
          width: 100%;
          margin-top: 50px;
          display: flex;
          border: 1px solid white;
        }
        .match-tabs {
          padding: 0 10px;
          display: flex;
        }
        .match-tab {
          width: 140px;
        }
        .line {
          width: 60%;
          height: 1px;
          border: 1px solid #8C50FF
        }
      `}</style>
    </>
  )
}

CandidateMatchesPage.getLayout = (page) => <CandidateLayout title="Pumpt | Home">{page}</CandidateLayout>
export default CandidateMatchesPage