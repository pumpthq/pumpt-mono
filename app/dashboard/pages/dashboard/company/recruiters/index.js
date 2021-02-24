import * as React from 'react'
import { useQuery } from 'blitz'
import { useCurrentUser } from 'app/hooks/useCurrentUser'
import CompanyLayout from '../../../../../layouts/CompanyLayout'
import getCompanyRecruiters from 'app/dashboard/queries/getCompanyRecruiters'
import { useForm } from 'react-hook-form'
import { useDetectOutsideClick } from "app/hooks/useDetectOutsideClick"
import Skeleton from 'react-loading-skeleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const AddRecruiterModal = ({ open, setOpen }) => {
  const { handleSubmit, register } = useForm();
  return (
    <>
      <div className="add-recruiter-modal">
        <div className="close-button" onClick={() => setOpen(false)}>X</div>
        <h2>Add New Recruiter</h2>
        <p>Please provide all necessary information.</p>
        <form className="recruiter-form" autoComplete="off">
          <div className="avatar-upload">
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '60px',
              background: 'gray',
              marginBottom: '20px'
            }}></div>
            <div style={{
              textAlign: 'center',
              background: '#8C50FF',
              padding: '12px',
              borderRadius: '8px'
            }}>Upload Image</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <input
              className="recruiter-input name"
              name="firstName"
              placeholder="First Name" />
            <input
              className="recruiter-input name"
              name="lastName"
              placeholder="Last Name" />
          </div>
          <input
            className="recruiter-input"
            name="position"
            placeholder="Current Position" />

          <button type="submit" style={{
            border: 'none',
            borderRadius: '8px',
            padding: '12px',
            marginTop: '10px',
            fontSize: '16px',
            background: '#8C50FF',
            color: 'white',
            fontWeight: "bold"
          }}>Add Recruiter</button>
        </form>
      </div>
      <style>{`
        .close-button {
          border-radius: inherit;
          display: flex; 
          align-items: center; 
          justify-content: center;
          position: absolute; 
          right: 0; 
          top: 0;
          width: 45px; 
          height: 45px
        }
        .close-button:hover {
          border: 1px solid white;
        }
        .add-recruiter-modal {
          display: ${open ? 'block' : 'none'};
          min-width: 500px;
          padding: 30px;
          position: absolute;
          left: 38%;
          top: 20%;
          background: #2f2f2f;
          border-radius: 8px;
          z-index: 1000;
          box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.30);

        }
        .recruiter-form {
          margin-top: 30px;
          display: flex;
          flex-direction: column;
        }
        .recruiter-input {
          font-size: 16px;
          margin: 12px 0 12px 0;
          border: none;
          height: 40px;
          border-radius: 4px;
          box-shadow: inset 0 0 0 2px #2b333d;
          background: #363c45;
          color: white;
          padding-left: 10px
        }
        .name {
          width: 48%
        }
        .avatar-upload {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin-bottom: 5px;
        }
    `}</style>
    </>
  )
}

const EmptyRecruiterState = () => {
  return (
    <>
      <div className="empty-state">

      </div>
    </>
  )
}

const LoadingRecruiterState = () => {
  return (
    <>
      <div className="loading-state">
        <div className="recruiter-skeleton">
          <Skeleton circle height="100px" width="100px" />
          <Skeleton width="60%" height={30} style={{ marginTop: '20px' }} />
          <Skeleton width="100%" height={120} style={{ marginTop: '20px' }} />
        </div>
        <div className="recruiter-skeleton">
          <Skeleton circle height="100px" width="100px" />
          <Skeleton width="60%" height={30} style={{ marginTop: '20px' }} />
          <Skeleton width="100%" height={120} style={{ marginTop: '20px' }} />
        </div>
        <div className="recruiter-skeleton">
          <Skeleton circle height="100px" width="100px" />
          <Skeleton width="60%" height={30} style={{ marginTop: '20px' }} />
          <Skeleton width="100%" height={120} style={{ marginTop: '20px' }} />
        </div>
        {/* <div className="recruiter-skeleton">
          <Skeleton circle height="100px" width="100px" />
          <Skeleton width={180} height={30} style={{ marginTop: '20px' }} />
          <Skeleton width="100%" height={200} style={{ marginTop: '20px' }} />
        </div> */}
      </div>
      <style>{`
        .loading-state {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
        }
        .recruiter-skeleton {
          padding: 20px;
          border-radius: 8px;
          background: #2f2f2f;
          margin: 10px;
          display: flex;
          flex-direction: column;
          width: 23.5%
        }
        @media(max-width: 1641px){
          .recruiter-skeleton {
            width: 31%
          }
        }
        @media(max-width: 1000px){
          .recruiter-skeleton {
            width: 46.2%
          }
        }
        @media(max-width: 670px){
          .recruiter-skeleton {
            width: 95%
          }
        }
      `}</style>
    </>
  )
}

const RecruitersList = ({ recruiters }) => {
  return (
    <>
      <div className="recruiters-state">
        {
          recruiters.map(rec => {

            return (
              <div className="recruiter">
                <img src={rec.avatar} className="recruiter-avatar" />
                <h2>{`${rec.firstName} ${rec.lastName}`}</h2>
                <h3>{rec.position}</h3>
                <div className="recruiter-button">
                  <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    See Profile
                  </div>
                  <div className="dropdown">
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <style>{`
        .recruiters-state {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
        }
        .recruiter {
          padding: 20px;
          border-radius: 8px;
          background: #2f2f2f;
          margin: 10px;
          display: flex;
          flex-direction: column;
          width: 23.5%
        }
        .recruiter-button {
          cursor: pointer;
          display: flex;
          margin-top: 10px;
          background: #8C50FF;
          height: 50px;
          min-width: 150px; 
          border-radius: 8px;
          align-items: center;
          font-weight: bold;
          width: 150px;
          justify-content: space-between;
        }
        .dropdown {
          height: 100%;
          width: 28%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-left: 1px solid white;
        }
        .recruiter-avatar {
          height: 100px;
          width: 100px;
          border-radius: 50px;
        }
        @media(max-width: 1641px){
          .recruiter {
            width: 31%
          }
        }
        @media(max-width: 1000px){
          .recruiter {
            width: 46.2%
          }
        }
        @media(max-width: 670px){
          .recruiter {
            width: 95%
          }
        }
      `}</style>
    </>
  )
}

const CompanyRecruitersPage = () => {
  const user = useCurrentUser()
  const [recruiters, { isFetching, failureCount, refetch, setQueryData, }] = useQuery(getCompanyRecruiters, { where: { companyId: user?.profile?.companyId } }, { suspense: false })
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive)
  console.log(recruiters)
  console.log('loading:', isFetching)
  return (
    <>
      <AddRecruiterModal open={isActive} ref={dropdownRef} setOpen={onClick} />
      <h1>Recruiters</h1>
      <div className="recruiter-container">
        <div className="recruiter-controls">
          <div className="add-recruiter" onClick={onClick}>Add New Recruiter</div>
        </div>
        <div className="recruiter-list">
          {isFetching && <LoadingRecruiterState />}
          {!isFetching && !recruiters.length && <EmptyRecruiterState />}
          {!isFetching && recruiters && <RecruitersList recruiters={recruiters} />}
        </div>
      </div>
      <style jsx>{`
        .recruiter-container {
          margin-top: 50px;
          width: 100%;
          min-height: 74vh;
        }

        .add-recruiter {
          margin-left: 10px;
          margin-bottom: 10px;
          max-width: 10rem;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #8C50FF;
          border-radius: 8px;
          cursor: pointer;
        }
        .recruiter-list {
          display: flex;
        }
      `}</style>
    </>
  )
}

CompanyRecruitersPage.getLayout = (page) => <CompanyLayout title="Pumpt | Recruiters">{page}</CompanyLayout>
export default CompanyRecruitersPage