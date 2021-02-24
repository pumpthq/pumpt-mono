import Tabs from 'app/dashboard/components/Tabs'
import * as React from 'react'
import CompanyLayout from '../../../../../layouts/CompanyLayout'
import { tabsData } from '../../../../components/candidate/candidateTabData'
import CandidateMatchesList from 'app/dashboard/components/candidate/CandidateMatchesList'
import { matchData } from '../../../../matchData'

const CompanyMatchesPage = () => {
  const [tabData, setTabData] = React.useState(tabsData)
  const [selectedTab, setSelectedTab] = React.useState('All Matches')

  return (
    <>
      <h1>Your Matches</h1>
      <p>You can view all of your matches here</p>
      <div className="match-container">
        <div className="match-tabs">
          <Tabs tabs={tabData} selectTabHandler={setSelectedTab} selectedTab={selectedTab} />

        </div>
        <div className="match-tab-content">
          <CandidateMatchesList matches={matchData} selectedTab={selectedTab} />
        </div>
      </div>
      <style jsx>{`
        .match-container {
          min-height: 74vh;
          width: 100%;
          margin-top: 50px;
          display: flex;
          flex-direction: column;
        }
        .match-tabs {
          display: block;
          height: 45px;
        }
        .match-tab-content {
          overflow-y: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none;
          height: 100%;
        }
        .match-tab-content::-webkit-scrollbar {
          width: 0px;
          background: transparent; /* make scrollbar transparent */
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
CompanyMatchesPage.getLayout = (page) => <CompanyLayout title="Pumpt | Matches">{page}</CompanyLayout>
export default CompanyMatchesPage