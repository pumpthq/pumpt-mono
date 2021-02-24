import * as React from 'react'
import { Link, useQuery } from 'blitz'
import { useCurrentUser } from 'app/hooks/useCurrentUser'
import CompanyLayout from '../../../../../layouts/CompanyLayout'
import getCompanyVacancies from 'app/dashboard/queries/getCompanyVacancies'
import { useForm } from 'react-hook-form'
import { useDetectOutsideClick } from "app/hooks/useDetectOutsideClick"
import Skeleton from 'react-loading-skeleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronLeft as Back, faBuilding as Company, faDollarSign as Salary, faCalendarAlt as Experience, faClock as Time, faIndustry as Industry, faGraduationCap as Degree } from '@fortawesome/free-solid-svg-icons'




const EmptyVacanciesState = () => {
  return (
    <>
      <div className="empty-state">

      </div>
    </>
  )
}

const LoadingVacanciesState = () => {
  return (
    <>
      <div className="loading-state">
        <div className="recruiter-skeleton">
          <Skeleton width="20%" height={35} />
          <Skeleton width="60%" height={30} style={{ marginTop: '20px' }} />
          <Skeleton width="100%" height={180} style={{ marginTop: '20px' }} />
        </div>
        <div className="recruiter-skeleton">
          <Skeleton width="20%" height={35} />
          <Skeleton width="60%" height={30} style={{ marginTop: '20px' }} />
          <Skeleton width="100%" height={180} style={{ marginTop: '20px' }} />
        </div>
        <div className="recruiter-skeleton">
          <Skeleton width="20%" height={35} />
          <Skeleton width="60%" height={30} style={{ marginTop: '20px' }} />
          <Skeleton width="100%" height={180} style={{ marginTop: '20px' }} />
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
          width: 100%
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
          recruiters.map(vac => {

            return (
              <div className="vacancy">
                <div className="vacancy-info">
                  <h2>{`${vac.title}`}</h2>
                  <div className="vacancy-meta">
                    <div className="vacancy-meta-field">
                      <FontAwesomeIcon style={{ fontSize: '16px', marginRight: '10px', color: '#34BF34' }} icon={Salary} />
                      <span>$400K-$499K</span>
                    </div>
                    <div className="vacancy-meta-field">
                      <FontAwesomeIcon style={{ fontSize: '16px', marginRight: '10px', color: '#5A83F5' }} icon={Experience} />
                      <span>4+ Years</span>
                    </div>
                    <div className="vacancy-meta-field">
                      <FontAwesomeIcon style={{ fontSize: '16px', marginRight: '10px', color: '#8c50ff' }} icon={Time} />
                      <span>Full-Time</span>
                    </div>
                    <div className="vacancy-meta-field">
                      <FontAwesomeIcon style={{ fontSize: '16px', marginRight: '10px', color: 'ffb302' }} icon={Industry} />
                      <span>Sales | Ad Tech/Platform</span>
                    </div>
                    <div className="vacancy-meta-field">
                      <FontAwesomeIcon style={{ fontSize: '16px', marginRight: '10px', color: '#fa485d' }} icon={Degree} />
                      <span>Graduate</span>
                    </div>
                  </div>
                  <p>{vac.description}</p>
                </div>
                <div className="recruiter-button">
                  <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    See Vacancy
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

      .vacancy-info {
        width: 60%;

      }
        .vacancy-meta {
          width: 100%; 
          display: flex;
          justify-content: space-between;
        }
        .vacancy-meta-field {
          display: flex;
          align-items: center;
          margin-right: 15px;
          text-align:center;
        }

        .recruiters-state {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
        }
        .vacancy {
          padding: 20px;
          border-radius: 8px;
          background: #2f2f2f;
          margin: 10px;
          display: flex;
          justify-content: space-between;
          width: 100%
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
          width: 180px;
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
        @media(max-width: 1210px) {
          .vacancy-meta {
            display: none
          }
        }
      `}</style>
    </>
  )
}

const CompanyVacanciesPage = () => {
  const user = useCurrentUser()
  const [vacancies, { isFetching, failureCount, refetch, setQueryData, }] = useQuery(getCompanyVacancies, { where: { companyId: user?.profile?.companyId } }, { suspense: false })
  const dropdownRef = React.useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive)
  console.log(vacancies)
  console.log('loading:', isFetching)
  return (
    <>
      <h1>Vacancies</h1>
      <div className="recruiter-container">
        <div className="recruiter-controls">
          <Link href="/dashboard/company/vacancies/new">
            <div className="add-recruiter">
              <a>
                Add New Vacancy
            </a>
            </div>
          </Link>
        </div>
        <div className="recruiter-list">
          {isFetching && <LoadingVacanciesState />}
          {!isFetching && !vacancies && <EmptyVacanciesState />}
          {!isFetching && vacancies && <RecruitersList recruiters={vacancies} />}
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

CompanyVacanciesPage.getLayout = (page) => <CompanyLayout title="Pumpt | Vacancies">{page}</CompanyLayout>
export default CompanyVacanciesPage