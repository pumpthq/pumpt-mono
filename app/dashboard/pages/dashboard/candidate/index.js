import { Link } from 'blitz'
import CandidateLayout from '../../../../layouts/CandidateLayout'
import { useCurrentUser } from "app/hooks/useCurrentUser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine as Matches, faCommentAlt as Chats, faTasks as Progress, faExternalLinkSquareAlt as MatchLink, faExternalLinkAlt, faCheckSquare as Approve, faWindowClose as Reject, faBookmark as Bookmark } from "@fortawesome/free-solid-svg-icons"
import { matchData } from '../../../matchData'


const EmptyMatchesTable = () => {
  return (
    <>
      <div className="empty-table">
        <p>You have no matches</p>
        <img src="/assets/resume_cv.png" />
      </div>
      <style jsx>{`
        .empty-table {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center
        }
      `}</style>
    </>
  )
}

const CandidatesDashboardPage = () => {
  const handleAction = (event, id) => {
    event.preventDefault()
    console.log(id)
  }
  const user = useCurrentUser()
  return (
    <>

      <h2>Dashboard</h2>
      <div className="welcome-banner">
        <div className="welcome-heading">
          <h3>Welcome back{user ? `, ${user.profile.firstName}!` : "!"}</h3>
          <p>See how your profile matches up with our partners!</p>
        </div>
        <div className="welcome-image">
          <img src='/assets/engagement.png' style={{ height: '280px', marginBottom: '50px', marginRight: '100px' }} />
        </div>
      </div>
      <div className="dashboard-container">
        <div className="parent">
          <div className="div1 dash-meta-data">
            <FontAwesomeIcon style={{ marginRight: "25px", fontSize: "50px", color: "#cfcf4e" }} icon={Matches} />
            <span style={{ fontSize: "30px" }}>5 New Matches</span>
          </div>
          <div className="div2 dash-meta-data">
            <FontAwesomeIcon style={{ marginRight: "25px", fontSize: "50px", color: "#FA485D" }} icon={Chats} />
            <span style={{ fontSize: "30px" }}>1 New Message</span>
          </div>
          <div className="div3 dash-meta-data">
            <FontAwesomeIcon style={{ marginRight: "25px", fontSize: "50px", color: "#38c949" }} icon={Progress} />
            <span style={{ fontSize: "30px" }}>2 More Steps</span>
          </div>
          <div className="div4 match-table">
            <div className="match-table-head">
              <span className="company-name"><strong>Company</strong></span>
              <span className="vacancy-title"><strong>Job Title</strong></span>
              <span className="vacancy-location"><strong>Location</strong></span>
              <span className="actions"><strong>Actions</strong></span>
              <div className="matches-link"><Link href="/dashboard/candidate/matches"><a><FontAwesomeIcon icon={faExternalLinkAlt} /></a></Link></div>
            </div>
            <div className="match-table-rows">
              {matchData.length < 1 && (<EmptyMatchesTable />)}
              {matchData.map(match => {
                return (
                  <div className="match-table-row">
                    <span className="company-name"><strong>{match.company.name}</strong></span>
                    <span className="vacancy-title">{match.vacancy.title}</span>
                    <span className="vacancy-location">{match.vacancy.location}</span>
                    <div className="actions">
                      <FontAwesomeIcon onClick={(e) => handleAction(e, match.id)} icon={Bookmark} style={{
                        cursor: 'pointer', fontSize: "20px", margin: '10px', color: "#5A83F5"
                      }} />
                      <FontAwesomeIcon onClick={(e) => handleAction(e, match.id)} icon={Approve} style={{
                        cursor: 'pointer', fontSize: "20px", margin: '10px', color: "#38c949"
                      }} />
                      <FontAwesomeIcon onClick={(e) => handleAction(e, match.id)} icon={Reject} style={{
                        cursor: 'pointer', fontSize: "20px", margin: '10px', color: "#FA485D"
                      }} />
                    </div>
                    <div className="matches-link"><Link href="/dashboard/candidate/matches"><a><FontAwesomeIcon icon={MatchLink} /></a></Link></div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="div5 tasks">
            <h2>Your Tasks</h2>

            <hr />
          </div>
        </div>
      </div>
      <style jsx>{`
        .welcome-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 30px;
          height: 200px;
          width: 100%;
          border-radius: 10px;
          background: #8C50FF;
          background: -webkit-linear-gradient(to right, #5A83F5, #8C50FF);
          background: linear-gradient(to right, #5A83F5, #8C50FF);
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);

        }
        .welcome-heading {
          width: 40%;
        }
        .welcome-banner h3{
          font-size: 30px;
          margin: 10px 0;
          display: inline-block;
        }
        .dashboard-container {
          margin-top: 20px;
          width: 100%;
          height: 100%;
        }
        .parent {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: repeat(7, 1fr);
          grid-column-gap: 12px;
          grid-row-gap: 12px;
        }
        .dash-meta-data {
          background: #2f2f2f;
          border-radius: 10px;
          padding: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
        }
        .match-table {
          background: #2f2f2f;
          border-radius: 10px;
          overflow-y: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none;
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
        }
        .match-table::-webkit-scrollbar {
          width: 0px;
          background: transparent; /* make scrollbar transparent */
        }
        .match-table-head{
          border-radius: 10px 10px 0 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 70px;
          background: #121212;
          position: sticky;
          top: 0;
        }
        .match-table-head span{
          text-align: center;
        }
        .match-table-rows{
          width: 100%;

        }
        .match-table-row span{
          text-align: center;
        }
        .match-table-row {
          height: 65px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid white;
        }
        .company-name {
          width: 30%
        }
        .vacancy-title {
          width: 20%

        }
        .vacancy-location {
          width: 25%

        }
        .actions {
          width: 15%;
          text-align: center;
        }
        .matches-link {
          height: 30px;
          background: #8C50FF;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 15px;
          cursor: pointer;
        }
        .matches-link a {
          text-decoration: none;
          color: white;
        }
        .tasks {
          background: #2f2f2f;
          border-radius: 10px;
          padding: 25px;
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
        }
        .div1 { 
          grid-area: 1 / 1 / 3 / 3; 
        }
        .div2 { 
          grid-area: 1 / 3 / 3 / 5; 
        }
        .div3 { 
          grid-area: 1 / 5 / 3 / 7; 
        }
        .div4 { 
          grid-area: 3 / 1 / 8 / 5; 
        }
        .div5 { 
          grid-area: 3 / 5 / 8 / 7; 
        }
      `}</style>
    </>
  )
}

CandidatesDashboardPage.getLayout = (page) => <CandidateLayout title="Pumpt | Home">{page}</CandidateLayout>
export default CandidatesDashboardPage