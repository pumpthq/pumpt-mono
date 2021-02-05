import * as React from 'react'
import { Link, useMutation, useQuery } from "blitz"
import PublicLayout from "app/layouts/PublicLayout"
import logout from "app/auth/mutations/logout"
import { useCurrentUser } from "app/hooks/useCurrentUser"

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <button
          className="button small"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        <div>
          User <pre>{JSON.stringify(currentUser, null, 4)}</pre>
          <br />
        </div>
      </>
    )
  } else {

    return (
      <>
        <Link href="/sign-up">
          <a className="button small">
            <strong>Sign Up</strong>
          </a>
        </Link>
        <Link href="/login">
          <a className="button small">
            <strong>Login</strong>
          </a>
        </Link>
      </>
    )
  }
}

const Home = () => {
  return (
    <div>
      <main>
        <div className="container">
          <section className="hero">
            <div className="hero-left">
              <h1>Job Matching Done Smarter.</h1>
              <p>Pumpt uses proprietary AI to match Candidates & Employers. There’s no longer any need to search for jobs or candidates…we do it for you.</p>
              <div className="hero-buttons">
                <Link href="/candidates">
                  <a className="hero-button">I am a Candidate</a>
                </Link>
                <Link href="/employers">
                  <a className="hero-button">I am an Employer</a>
                </Link>
              </div>
            </div>
            <div className="hero-right">
              <video className="hero-image" src="https://res.cloudinary.com/pumpt/video/upload/v1611942874/IMG_2238_fh99fm.mov" controls />
            </div>
          </section>
          <section className="industries full-page">
            <div className="section-left">
              <div className="industry-info">
                <h2 style={{ fontSize: '34px' }}>We Provide Jobs and Talent in the Following Areas</h2>
                <div className="line purple"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
            <div className="section-right">
              <div className="industry-cards">

                <div className="card-column left">
                  <div className="card">
                    <img className="industry-icon" src="/assets/purse_icon_white.png" />
                    <p className="card-heading">Business Development</p>
                    <div className="line blue"></div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="card">
                    <img className="industry-icon" src="/assets/target_icon_white.png" />
                    <p className="card-heading">Sales & Ad Operations</p>
                    <div className="line purple"></div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
                <div className="card-column right">
                  <div className="card">
                    <img className="industry-icon" src="/assets/clipboard_icon_white.png" />
                    <p className="card-heading">Sales & Sales Management</p>
                    <div className="line pink"></div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <div className="card">
                    <img className="industry-icon" src="/assets/smartguy_icon_white.png" />
                    <p className="card-heading">Sales Planning & Account Management</p>
                    <div className="line yellow"></div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <div className="card">
                    <img className="industry-icon" src="/assets/megaphone_icon_white.png" />
                    <p className="card-heading">Marketing & Creative Services</p>
                    <div className="line green"></div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>

                </div>
              </div>
            </div>

          </section>
          <section className="full-page alt-container">
            <h2 style={{ fontSize: '34px' }}>We Provide Jobs and Talent in the Following Areas</h2>
            <div style={{ height: "2px", width: '450px', border: '2px solid #8C50FF' }}></div>
            <p style={{ width: '60%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p style={{ width: '60%' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="alt-cards">
              <div className="card">
                <img className="industry-icon" src="/assets/clipboard_icon_white.png" />
                <p className="card-heading">Sales & Sales Management</p>
                <div className="line pink"></div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              <div className="card">
                <img className="industry-icon" src="/assets/smartguy_icon_white.png" />
                <p className="card-heading">Sales Planning & Account Management</p>
                <div className="line yellow"></div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              <div className="card">
                <img className="industry-icon" src="/assets/megaphone_icon_white.png" />
                <p className="card-heading">Marketing & Creative Services</p>
                <div className="line green"></div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
              <div className="card">
                <img className="industry-icon" src="/assets/purse_icon_white.png" />
                <p className="card-heading">Business Development</p>
                <div className="line blue"></div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="card">
                <img className="industry-icon" src="/assets/target_icon_white.png" />
                <p className="card-heading">Sales & Ad Operations</p>
                <div className="line purple"></div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;700&display=swap");

        html,
        body {
          background: rgb(28,28,28);
          padding: 0;
          margin: 0;
          color: #E8EFF3;
          font-family: "Libre Franklin", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          box-sizing: border-box;
        }
        .line{
          height: 1px;
          width: 40%;
          max-width: 275px;
        }
        .purple {
          border 2px solid #8C50FF;
        }
        .green {
          border 2px solid #6BC150;
        }
        .blue {
          border 2px solid #5A83F5;
        }
        .pink {
          border 2px solid #FA485D;
        }
        .yellow {
          border 2px solid #FFB302;
        }
        .container {
          margin: 0 10%;
          display: flex;
          flex-direction: column;
        }
        .alt-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .alt-cards {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          width: 100%;
        }
        .sign-up{
          height: 40px;
          width: 120px;
          background-color: #8C50FF;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          -webkit-box-shadow: 0px 0px 15px 1px #AB5AFF; 
          box-shadow: 0px 0px 15px 1px #AB5AFF;
        }

        .header {
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
        main {
          display: flex;
        }
        .hero {
          height: 95vh;
          width: 100%;
          display: flex;
          justify-content:space-around;
          margin-bottom: 180px
        }
        .hero-left {
          margin: 0;
          padding: 30px;
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .hero-left h1 {
          font-size: 65px;
          margin-bottom: 10px;
        }
        .hero-left p {
          font-size: 24px;
          width: 80%;
        }
        .hero-buttons {
          display: flex;
        }
        .hero-button {
          text-align: center; 
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 15px;
          border: none;
          border-radius: 8px;
          height: 50px;
          width: 150px;
          background-color: #8C50FF;
          color: #E8EFF3;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          -webkit-box-shadow: 0px 0px 15px 1px #AB5AFF; 
          box-shadow: 0px 0px 15px 1px #AB5AFF;
        }
        .hero-right {
          margin: 0;
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-image {
          width: 100%;
          max-width: 950px;
          min-width: 400px;
        }

        .industries {
          display: flex;
        }
        .section-right {
          width: 55%;
          max-width: 850px;
          height: 100%;
          display: flex;
          justify-content: center;
          
          align-items: center;
        }
        .section-left {
          width: 45%;
          max-width: 850px;
          height: 100%;

        }
        .full-page {
          display: flex;
          width: 100%;
          height: 100vh;
          margin-bottom: 180px;
        }
        .industry-cards {
          display: flex;
          width: 100%;
          align-items: center;
        }
        .section-header {
          width: 100%;
          height: 50%;
        }

        .card-column {
          width: 50%;
        }
        .card-column.left {
          padding-left: 20px;
          padding-right: 10px;
        }
        .card-column.right {
          padding-right: 20px;
          padding-left: 10px;

        }
        .card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          min-width: 250px;
          max-width: 400px;
          height: 400px;
          margin: 20px 0;
          padding: 30px;
          border-radius: 15px;
          background-color: #262626;
          box-shadow: inset 0 0 0 2px #2b333d
        }
        .card-heading {
          font-size: 20px;
          font-weight: bold;
        }
        .industry-info {
          position: sticky;
          top: 70px;
          padding: 30px;
          border-radius: 15px;
          background-color: #262626;
          box-shadow: inset 0 0 0 2px #2b333d
        }
        .industry-icon {
          width: 120px;
        }
        
        @media(max-width: 1210px){
          .hero {
            margin-bottom: 0;
          }
          .hero-right {
            display: none;
          }
          .hero-left{
            width: 100%;
          }

          .hero-left p {
            width: 100%;
          }
          .full-page {
            align-items: center;
            height: auto;
            flex-direction: column-reverse;
          }
          .section-left {
            width: 100%;
          }
          .section-right{
            width: 100%;
          }
          .industry-cards {
            flex-direction: column-reverse;
          }
          .card-column {
            flex-direction: row;
            width: 100%;
          }
          .card-column.left {
            padding: 0
          }
          .card-column.right {
            padding: 0
            
          }
          .card {
            max-width: 100%;
          }
          .industry-info {

          }
        }
      `}</style>
    </div>
  )
}

Home.getLayout = (page) => <PublicLayout title="Pumpt | Home">{page}</PublicLayout>

export default Home
