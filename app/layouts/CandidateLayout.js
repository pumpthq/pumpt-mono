import PrivateNavigation from '../dashboard/components/PrivateNavigation'
import { Link } from 'blitz'


const CandidateLayout = ({ children }) => {
  return (
    <>
      <PrivateNavigation />
      <div className='sidenav'>
        <div className="sidenav-link">
          <Link href="/dashboard/candidate">
            <a>Home</a>
          </Link>
        </div>
        <div className="sidenav-link">
          <Link href="/dashboard/candidate/matches">
            <a>Matches</a>
          </Link>
        </div>
        <div className="sidenav-link">
          <Link href="/dashboard/candidate/conversations">
            <a>Recruiter Chat</a>
          </Link>
        </div>
        <div className="sidenav-link">
          <Link href="/dashboard/candidate/discover">
            <a>Discover</a>
          </Link>
        </div>
        <div className="sidenav-link">
          <Link href="/dashboard/candidate/profile">
            <a>My Profile</a>
          </Link>
        </div>
      </div>
      <div className="content">
        {children}
      </div>
      <style jsx>{`
        .content {
          margin-left:250px;
          padding: 30px;
          height: 90.2vh;
        }
        .sidenav {
          padding-top:25px;
          position: absolute;
          z-index: 10;
          top: 70px;
          left: 0;
          width: 250px;
          height: 90.2vh;
          background-color: black;
        }
        .sidenav-link {
          padding-left: 30px;
          height: 70px;
          z-index: 20;
          width: 100%;
          text-align: center;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .sidenav-link a {
          text-decoration: none;
          color: white;
        }
      `}</style>
    </>
  )
}

export default CandidateLayout