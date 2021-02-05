import CandidateLayout from '../../../../layouts/CandidateLayout'

const CandidateSettingsPage = () => {
  return (
    <>
      <h1>Settings</h1>
      <p>Here you can find all of your account settings.</p>
      <div className="settings-container">
        <div className="settings-nav">
          <p>Account</p>
          <p>Password and Security</p>
          <p>Help and Support</p>
        </div>
        <div className="settings-panel">

        </div>
      </div>
      <style jsx>{`
        .settings-container {
          width: 100%;
          height: 90%;
          display: flex;
          
        }
        .settings-nav {
          border-radius: 10px;
          padding: 15px;
          height: 500px;
          width: 15%;
          min-width: 250px;
          background: #2f2f2f;
          box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.50);

        }
        .settings-nav p {
          border-bottom: 1px solid white;
        }
        .settings-panel {
          box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.50);
          border-radius: 10px;
          height: 100%;
          width: 85%;
          background: #2f2f2f;
          margin-left: 15px; 
        }
      `}</style>
    </>
  )
}

CandidateSettingsPage.getLayout = (page) => <CandidateLayout title="Pumpt | Settings">{page}</CandidateLayout>
export default CandidateSettingsPage