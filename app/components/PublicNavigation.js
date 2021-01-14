const PublicNavigation = () => {
  return (
    <>
      <header className="header">
        <div className="brand">
          <img src="/logo.png" />
        </div>
        <div className="nav-links">
          <a className="nav-link">For Candidates</a>
          <a className="nav-link">For Employers</a>
          <a className="nav-link">About</a>
          <a className="nav-link">Blog</a>
        </div>
        <div className="login-buttons">
          <a className="nav-link">Log In</a>
          <a className="nav-link sign-up">Get Started</a>
        </div>
      </header>
    </>
  )
}

export default PublicNavigation