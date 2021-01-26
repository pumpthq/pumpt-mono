import * as React from 'react'
import { Link } from 'blitz'
import BurgerIcon from './BurgerIcon'
import MobileMenu from './MobileMenu'

const PublicNavigation = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <header className="header">
        <div className="brand">
          <img src="/logo.png" />
        </div>
        <div className="nav-links">
          <Link href="/candidates">
            <a className="nav-link">For Candidates</a>
          </Link>
          <Link href="/employers">
            <a className="nav-link">For Employers</a>
          </Link>
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
          <Link href="/blog">
            <a className="nav-link">Blog</a>
          </Link>
        </div>
        <div className="login-buttons">
          <Link href="/login">
            <a className="nav-link">Log In</a>
          </Link>
          <Link href="/signup">
            <a className="nav-link sign-up">Get Started</a>
          </Link>
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
          justify-content: space-around;
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
            display: none;
            aria-hidden: true
          }
          .login-buttons{
            display: none;
            aria-hidden: true
          }
        }
      `}</style>
    </>
  )
}

export default PublicNavigation