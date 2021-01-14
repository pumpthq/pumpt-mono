const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <img className="footer-logo" src="/logo.png" />
            <div className="social">
              <div className="social-icon">
                <img className="social-logo" src="/assets/fb.png" />
              </div>
              <div className="social-icon">
                <img className="social-logo" src="/assets/ig.png" />
              </div>
              <div className="social-icon">
                <img className="social-logo" src="/assets/linkedin.png" />
              </div>
            </div>
          </div>
          <div className="footer-links-1">
            <p>For Candidates</p>
            <p>For Employers</p>
            <p>About</p>
            <p>Blog</p>
          </div>
          <div className="footer-links-2">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>FAQ</p>
          </div>
          <div className="footer-links-3">
            <p>Pricing</p>
          </div>
        </div>
      </footer>
      <style>{`
      .footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
        width: 100%;
        background-color: #141414
      }
      .social {
        display: flex;
      }
      .social-logo {
        margin-right: 14px;
        height: 60px;
        width: 60px
      }
      .footer-logo {
        width: 250px
      }
      .footer-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
      }

      .footer-brand { 
        grid-area: 1 / 1 / 6 / 3;
        margin: 0 20px; 
      }
      .footer-links-1 { 
        grid-area: 1 / 3 / 6 / 4;
        margin: 0 20px; 
      }
      .footer-links-2 { 
        grid-area: 1 / 4 / 6 / 5;
        margin: 0 20px; 
      }
      .footer-links-3 { 
        grid-area: 1 / 5 / 6 / 6;
        margin: 0 20px; 
      }
      `}</style>
    </>
  )
}

export default Footer