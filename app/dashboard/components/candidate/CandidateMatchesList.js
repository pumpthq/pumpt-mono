import * as React from 'react'
import Match from './CandidateMatch'

const CandidateMatchesList = ({ matches, selectedTab }) => {
  const sortedMatches = matches.sort(function (a, b) { return b.isBookmarked - a.isBookmarked })
  const approvedMatches = matches.filter(match => match.isApproved === true)
  const bookmarkedMatches = matches.filter(match => match.isBookmarked === true)
  const rejectedMatches = matches.filter(match => match.isRejected === true)

  const metaSelection = {
    'Matches': sortedMatches,
    'Bookmarked': bookmarkedMatches,
    'Approved': approvedMatches,
    'Rejected': rejectedMatches
  }

  if (matches.length < 1) {
    return (
      <>
        <div className="empty-match-list">
          No Matches
        </div>
        <style jsx>{`
        .empty-match-list {
        width: 100%;
        height: 100%;
        border: 1px solid blue;
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