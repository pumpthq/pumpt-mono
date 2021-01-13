import { Link, useMutation } from "blitz"
import Layout from "app/layouts/Layout"
import logout from "app/auth/mutations/logout"
import { useCurrentUser } from "app/hooks/useCurrentUser"
import { Suspense } from "react"
// import PublicNavigation from '../components/PublicNavigation.js'
/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

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
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Link href="/signup">
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
      {/* <PublicNavigation /> */}
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
              <img className="hero-image" src="/Analytics.png" />
            </div>
          </section>
          <section className="industries full-page">
            <div className="section-left">
              <div className="industry-cards">
                <div className="card-column left">
                  <div className="card">
                    <img src="/assets/clipboard_icon_white.png" />
                    <p className="card-heading">Sales & Sales Management</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <div className="card">
                    <img src="/assets/smartguy_icon_white.png" />
                    <p className="card-heading">Sales Planning & Account Management</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <div className="card">
                    <img src="/assets/megaphone_icon_white.png" />
                    <p className="card-heading">Marketing & Creative Services</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                </div>
                <div className="card-column right">
                  <div className="card">
                    <img src="/assets/purse_icon_white.png" />
                    <p className="card-heading">Business Development</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className="card">
                    <img src="/assets/target_icon_white.png" />
                    <p className="card-heading">Sales & Ad Operations</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-right">
              <div className="industry-info">
                <h2 style={{ fontSize: '34px' }}>We Provide Jobs and Talent in the Following Areas</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
          </section>
          <section className="full-page"></section>
        </div>
      </main>

      <footer>

      </footer>

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
        .container {
          margin: 0 10%;
          display: flex;
          flex-direction: column;
        }
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
          width: 80%;
          max-width: 770px;
          min-width: 400px;
        }

        .industries {
          display: flex;
        }
        .section-left {
          width: 55%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .section-right {
          width: 45%;
          height: 100%;

        }
        .full-page {
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
          width: 100%;
          height: 350px;
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
          top: 20px;
          bottom: 10px;
        }

        
        @media(max-width: 1210px){
          .hero-right {
            display: none
          }
          .hero-left{
            width: 100%
          }

          .hero-left p {
            width: 100%
          }
        }
      `}</style>
    </div>
  )
}

Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
