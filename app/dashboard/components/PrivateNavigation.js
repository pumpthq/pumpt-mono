import * as React from 'react'
import { Link } from 'blitz'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft as Back } from '@fortawesome/free-solid-svg-icons'
import CandidateDropdown from '../components/candidate/CandidateAccountDropdown'
import CompanyDropdown from '../components/company/CompanyAccountDropdown'
import BurgerIcon from '../../components/BurgerIcon'
import MobileMenu from '../../components/MobileMenu'
import { useCurrentUser } from "app/hooks/useCurrentUser"

const PrivateNavigation = () => {
  const user = useCurrentUser()
  const [open, setOpen] = React.useState(false)
  console.log('user: ', user)
  return (
    <>
      <header className="header">
        <div className="brand">
          <img src="/logo.png" />
        </div>
        <div className="login-buttons">
          {
            user?.user.role === "CANDIDATE"
              ? <CandidateDropdown user={user} />
              : user?.user.role === "RECRUITER"
                ? <CompanyDropdown user={user} />
                : <Link href="/">
                  <a style={{ color: "white", textDecoration: 'none' }}><FontAwesomeIcon style={{ marginRight: '10px' }} icon={Back} />Go Back</a>
                </Link>}
          {/* <Link href="/signup">
            <a className="nav-link">Account</a>
          </Link> */}
        </div>
        <BurgerIcon open={open} setOpen={setOpen} />
        <MobileMenu open={open} setOpen={setOpen} />
      </header>
      <style jsx>{`
      .sign-up{
          height: 40px;
          width: 120px;
          background-color: #8C50FF;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
        }

        .header {
          position: sticky;
          top: 0;
          background: rgb(28,28,28);
          z-index: 100;
          padding: 15px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .links-container {
          display: flex;
          align-items: center;

        }
        .login-buttons {
          display: flex;
          align-items: center;
          justify-content: space-between
        }
        .nav-link {
          margin: 0 15px;
          text-decoration: none;
          color:#E8EFF3;
        }

        @media(max-width: 1210px){
          .nav-links{
            display: none
          }
          .login-buttons{
            display: none
          }
        }
      `}</style>
    </>
  )
}

export default PrivateNavigation