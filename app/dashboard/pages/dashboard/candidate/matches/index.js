import Tabs from 'app/dashboard/components/Tabs'
import * as React from 'react'
import CandidateLayout from '../../../../../layouts/CandidateLayout'
import { tabsData } from '../../../../components/candidate/candidateTabData'

const CandidateMatchesPage = () => {
  const [tabData, setTabData] = React.useState(tabsData)
  const [selectedTab, setSelectedTab] = React.useState('Matches')
  console.log(tabData)
  React.useEffect(() => {
    console.log(selectedTab)
  })
  return (
    <>
      <h2>Your Matches</h2>
      <p>You can view all of your matches here</p>
      <div className="match-container">
        <div className="match-tabs">
          <Tabs tabs={tabData} selectTabHandler={setSelectedTab} selectedTab={selectedTab} />

        </div>
      </div>
      <style jsx>{`
        .match-container {
          height: 74vh;
          width: 100%;
          margin-top: 50px;
          display: flex;
        }
        .match-tabs {
          width: 35%
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