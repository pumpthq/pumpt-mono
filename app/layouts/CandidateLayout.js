import PrivateNavigation from '../dashboard/components/PrivateNavigation'
import SidebarLink from '../components/SidebarLink'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser, faBuilding, faComment, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { useCurrentUser } from "app/hooks/useCurrentUser"
import Skeleton from 'react-loading-skeleton'


const CandidateLayout = ({ children }) => {
  return (
    <>
      <PrivateNavigation />
      <div className='sidenav'>
        <div className="sidenav-link">
          <SidebarLink activeClassName="selected" href="/dashboard/candidate">
            <a><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faHouseUser}></FontAwesomeIcon>Home</a>
          </SidebarLink>
        </div>
        <div className="sidenav-link">
          <SidebarLink activeClassName="selected" href="/dashboard/candidate/matches">
            <a><FontAwesomeIcon className="icon" style={{ marginRight: '10px' }} icon={faBuilding}></FontAwesomeIcon>Matches</a>
          </SidebarLink>
        </div>
        <div className="sidenav-link">
          <SidebarLink activeClassName="selected" href="/dashboard/candidate/conversations">
            <a><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faComment}></FontAwesomeIcon>Recruiter Chat</a>
          </SidebarLink>
        </div>
        <div className="sidenav-link">
          <SidebarLink activeClassName="selected" href="/dashboard/candidate/discover">
            <a><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faSearch}></FontAwesomeIcon>Discover</a>
          </SidebarLink>
        </div>
        <div className="sidenav-link">
          <SidebarLink activeClassName="selected" href="/dashboard/candidate/profile">
            <a><FontAwesomeIcon style={{ marginRight: '10px' }} icon={faUser}></FontAwesomeIcon>My Profile</a>
          </SidebarLink>
        </div>
      </div>
      <div className="mobile-sidebar">
        <div className="sidenav-link">
          <SidebarLink activeClassName="selected" href="/dashboard/candidate">
            <a><FontAwesomeIcon icon={faHouseUser}></FontAwesomeIcon></a>
          </SidebarLink>
        </div>
        <div className="sidenav-link">
          <SidebarLink activeClassName="selected" href="/dashboard/candidate/matches">
            <a><FontAwesomeIcon icon={faBuilding}></FontAwesomeIcon></a>
          </SidebarLink>
        </div>
        <div className="sidenav-link">
          <SidebarLink activeClassName="selected" href="/dashboard/candidate/conversations">
            <a><FontAwesomeIcon icon={faComment}></FontAwesomeIcon></a>
          </SidebarLink>
        </div>
        <div className="sidenav-link">
          <SidebarLink activeClassName="selected" href="/dashboard/candidate/discover">
            <a><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></a>
          </SidebarLink>
        </div>
        <div className="sidenav-link">
          <SidebarLink activeClassName="selected" href="/dashboard/candidate/profile">
            <a><FontAwesomeIcon icon={faUser}></FontAwesomeIcon></a>
          </SidebarLink>
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
          position: fixed;
          z-index: 10;
          top: 70px;
          left: 0;
          width: 250px;
          height: 92.4vh;
          background-color: transparent;
          border-right: 1px solid #2b333d;
        }
        .sidenav-link {
          padding-left: 30px;
          height: 70px;
          z-index: 20;
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .sidenav-link a {
          text-decoration: none;  
          color: white;
          width: 150px;
        }
        a.selected {
          font-weight: bold;
        }
        a.selected::after {
          position: absolute;
          left: 227px;
          display: inline-block;
          margin-left: 20px;
          content: "";
          border:1px solid #8C50FF;
          width: 0px;
          height: 30px;
          color: white;
        }
        .mobile-sidebar {
          display: none;
          aria-hidden: true;
          padding-top:25px;
          position: fixed;
          z-index: 10;
          top: 70px;
          left: 0;
          width: 250px;
          height: 92.4vh;
          background-color: transparent;
          border-right: 1px solid #2b333d;
        }
        @media(max-width: 1200px){
          .sidenav {
            display: none;
          }
          .mobile-sidebar {
            display flex;
            flex-direction: column;
            width: 75px;
          }
          a.selected::after {
            left: 52px;
          }
          .content {
            margin-left: 75px;
          }
        }

      `}</style>
    </>
  )
}

export default CandidateLayout