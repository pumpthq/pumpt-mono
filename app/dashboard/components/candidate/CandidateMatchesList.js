import * as React from 'react'
import Match from './CandidateMatch'
import CandidateMatchSkeleton from './CandidateMatchSkeleton'

const CandidateMatchesList = ({ matches, selectedTab }) => {
  const [matchesState, setMatchesState] = React.useState(null)
  React.useEffect(() => {
    setTimeout(setMatchesState(matches), 5000)
  }, [])
  const sortedMatches = matchesState && matchesState.sort(function (a, b) { return b.isBookmarked - a.isBookmarked })
  const approvedMatches = matchesState && matchesState.filter(match => match.isApproved === true)

  const rejectedMatches = matchesState && matchesState.filter(match => match.isRejected === true)



  const metaSelection = {
    'Matches': sortedMatches,
    'Approved': approvedMatches,
    'Rejected': rejectedMatches
  }

  if (!matchesState) {
    return (
      <>
        <div className="loading-match-list">
          Loading
        </div>
        <style jsx>{`
      .loading-match-list {
      width: 100%;
      height: 100%;
    }
      `}</style>
      </>
    )
  }

  if (matchesState.length < 1) {
    return (
      <>
        <div className="empty-match-list">
          No Matches
        </div>
        <style jsx>{`
        .empty-match-list {
        width: 100%;
        height: 100%;
      }
        `}</style>
      </>
    )
  }

  return (
    <>
      <div className="matches-list">
        {metaSelection[selectedTab].map(match => {
          return <Match match={match} />
        })}
      </div>
      <style jsx>{`
      .matches-list {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
      }
    `}</style>
    </>
  )
}

export default CandidateMatchesList