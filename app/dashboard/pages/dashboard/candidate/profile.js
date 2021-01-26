import { Profiler } from 'react'
import ProfileSection from '../../../components/ProfileSection'
import CandidateLayout from '../../../../layouts/CandidateLayout'
import LabeledField from '../../../components/LabeledField'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faSortDown } from "@fortawesome/free-solid-svg-icons"

const CandidatesProfilePage = () => {
  const is = false
  return (
    <>
      <h2>{`Hi {username}, welcome back!`}</h2>
      <p>Make sure to keep your profile up to date to get more matches!</p>
      <div className="edit-profile-link">Edit Profile</div>
      <div className="profile-info">
        <div className="profile-left">
          <h3>My Profile</h3>
          <ProfileSection heading="Account Information">
            <LabeledField label="Username" width="45%" innerHeight="50px">
              RichardSPrins
            </LabeledField>
            <LabeledField label="Email" width="45%" innerHeight="50px">
              richardsprins@gmail.com
            </LabeledField>
            <LabeledField label="First Name" width="45%" innerHeight="50px">
              Richard
            </LabeledField>
            <LabeledField label="Last Name" width="45%" innerHeight="50px">
              Prins
            </LabeledField>
          </ProfileSection>
          <ProfileSection heading="Location">
            <LabeledField label="City" width="45%" innerHeight="50px">
              Atlanta
            </LabeledField>
            <LabeledField label="State" width="45%" innerHeight="50px">
              Georgia
            </LabeledField>
            <p style={{ marginLeft: '10px', marginTop: '40px' }}>Willing to relocate? <FontAwesomeIcon style={{ color: is ? '#04B00F' : '#F52528' }} icon={faTimesCircle} /></p>

          </ProfileSection>
          <ProfileSection heading="Candidate Information">
            <LabeledField label="Current Job Title" width="45%" innerHeight="50px">
              Coordinator
            </LabeledField>
            <LabeledField label="Years of Experience" width="45%" innerHeight="50px">
              3-5 years
            </LabeledField>
            <LabeledField label="Current Total Compensation" width="45%" innerHeight="50px">
              {`<$100K`}
            </LabeledField>
          </ProfileSection>
        </div>
        <div className="profile-right">
          <div className="profile-pic"></div>
          <h3>Richard Prins</h3>
          <p style={{ marginTop: '0' }}>Atlanta, Georgia</p>
          <p style={{ fontWeight: 'bold' }}>Coordinator</p>
          <p style={{ marginTop: '0' }}>Current Employer</p>
          <div className="resume-dropdown">
            <div className="resume-button">View My Resume</div>
            <div className="resume-dropdown-button"><FontAwesomeIcon style={{ width: '12px', height: '12px' }} icon={faSortDown} /></div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .profile-info {
          display: flex;
          margin-top: 70px;
          width: 100%;
          margin-bottom: 50px;
        }
        .edit-profile-link {
          margin: 40px 0;
          height: 40px;
          width: 120px;
          background-color: #8C50FF;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }
        .profile-left {
          padding: 30px;
          margin-right: 10px;
          border-radius: 10px;
          background-color: #262626;
          width: 60%;
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
        }        
        .profile-right {
          padding: 30px;
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 10px;
          width: 40%;
          height: 100%;
          background-color: #262626;
          border-radius: 10px;
        }
        .profile-pic {
          width: 140px;
          height: 140px;
          border-radius: 70px;
          background: rgb(56,255,209);
          background: linear-gradient(322deg, rgba(56,255,209,1) 0%, rgba(81,110,108,1) 100%);
        }
        .resume-dropdown {
          display: flex;
          width: 80%;
          background:#8C50FF;
          border-radius: 8px;
          height: 50px;
          margin-top: 10px;
        }
        .resume-dropdown-button {
          border-left: 1px solid gray;
          display flex;
          justify-content: center;
          align-items: center;
          width: 40px;
        }
        .resume-button {
          flex: 1;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          font-weight: bold;
        }

      `}</style>
    </>
  )
}

CandidatesProfilePage.getLayout = (page) => <CandidateLayout title="Pumpt | Home">{page}</CandidateLayout>
export default CandidatesProfilePage