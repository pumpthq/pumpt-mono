import React from 'react';
import { Link } from 'blitz'

const Menu = ({ open }) => {
  return (
    <>
      <div className="menu" style={open ? { transform: 'translateX(0)' } : { transform: 'translateX(100%)' }}>
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
        <Link href="/login">
          <a className="nav-link">Log In</a>
        </Link>
        <Link href="/signup">
          <a className="nav-link sign-up">Get Started</a>
        </Link>
      </div>
      <style jsx>{`
        .menu {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          background: #141414;
          height: 100vh;
          width: 300px;
          text-align: left;
          padding: 2rem;
          padding-top: 50px;
          position: fixed;
          top: 0;
          right: 0;
          transition: transform 0.3s ease-in-out;
        }
        a {
          height: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #141414;
          text-align: left;
          padding: 2rem;
          transition: transform 0.3s ease-in-out;
        }
        .sign-up{
          height: 40px;
          width: 200px;
          background-color: #8C50FF;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
        }
      `}</style>
    </>
  )
}
export default Menu;