import * as React from 'react'
import CandidateLayout from '../../../../../layouts/CandidateLayout'
import { useRouter } from 'blitz'
import { matchData } from '../../../../matchData'
import Skeleton from 'react-loading-skeleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft as Back, faBuilding as Company, faDollarSign as Salary, faCalendarAlt as Experience, faClock as Time, faIndustry as Industry, faGraduationCap as Degree } from '@fortawesome/free-solid-svg-icons'


const CandidatesMatchPage = () => {
  const [match, setMatch] = React.useState(null)
  React.useEffect(() => {
    setTimeout(setMatch(matchData[1]), 5000)
  }, [])
  React.useEffect(() => {
    console.log(match)

  }, [match])
  const { params, back } = useRouter()
  console.log(params.id)

  return (
    <>
      <h1>Match Details</h1>
      <div className="match-container">
        {
          !match
            ? (
              <>
                <div className="match-heading">
                  <Skeleton circle={true} height={200} width={200} />
                  <div className="match-title">
                    <h2>{<Skeleton width={'30%'} />}</h2>
                    <Skeleton width={'100%'} height={'50%'} />
                  </div>
                </div>

                <div className="skeleton-section">
                  <h2><Skeleton width={'40%'} height={50} /></h2>
                  <Skeleton width={'100%'} height={200} />
                </div>
              </>
            )
            : (
              <>
                <div className="match-heading">


                  <img src={match.company.image} style={{ width: '200px', height: '200px', borderRadius: '100px' }} />
                  <div className="match-title">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h2>{match.vacancy.title}</h2>
                      <div onClick={() => back()} className="back-button"><FontAwesomeIcon icon={Back} style={{ marginRight: '5px' }} />Back</div>
                    </div>
                    <p><FontAwesomeIcon icon={Company} style={{ marginRight: '10px' }} />{match.company.name}</p>
                    <div className="match-meta">
                      <p>{match.vacancy.location}</p>

                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                  <div className="match-meta-field">
                    <FontAwesomeIcon style={{ fontSize: '22px', marginBottom: '10px', color: '#34BF34' }} icon={Salary} />
                    <span>$400K-$499K</span>
                  </div>
                  <div className="match-meta-field">
                    <FontAwesomeIcon style={{ fontSize: '22px', marginBottom: '10px', color: '#5A83F5' }} icon={Experience} />
                    <span>4+ Years</span>
                  </div>
                  <div className="match-meta-field">
                    <FontAwesomeIcon style={{ fontSize: '22px', marginBottom: '10px', color: '#8c50ff' }} icon={Time} />
                    <span>Full-Time</span>
                  </div>
                  <div className="match-meta-field">
                    <FontAwesomeIcon style={{ fontSize: '22px', marginBottom: '10px', color: 'ffb302' }} icon={Industry} />
                    <span>Sales | Ad Tech/Platform</span>
                  </div>
                  <div className="match-meta-field">
                    <FontAwesomeIcon style={{ fontSize: '22px', marginBottom: '10px', color: '#fa485d' }} icon={Degree} />
                    <span>Graduate</span>
                  </div>
                </div>
                <div style={{ width: '100%' }}>
                  <div className="vacancy-description">
                    <h3>Role Description:</h3>
                    <p>{match.vacancy.description}</p>
                  </div>
                  <div style={{ width: "100%", display: 'flex', flexWrap: 'wrap' }}>
                    <div className="vacancy-description-half">
                      <h3>Requirements:</h3>
                      <ul>
                        {match.vacancy.requirements.map(req => <li>{req}</li>)}
                      </ul>
                    </div>
                    <div className="vacancy-description-half">
                      <h3>Responsibilities:</h3>
                      <ul>
                        {match.vacancy.responsibilities.map(req => <li>{req}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )
        }
      </div>
      <style jsx>{`
        .match-container {
          padding: 80px; 
          width: 100%;
          background: #2f2f2f;
          border-radius: 10px;
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .match-heading {
          width: 100%;
          display: flex;
        }
        .match-title {
          margin-left: 50px;
          flex: 1;
        }
        .match-title h2 {
          font-size: 28px;
        }
        .match-meta {
          width: 100%; 
          display: flex;
          justify-content: space-between;
        }
        .match-meta-field {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 15px;
          text-align:center;
        }
        .vacancy-description {
          margin-top: 30px;
          padding: 30px;
          width: 100%;
        }        
        .vacancy-description-half {
          margin-top: 30px;
          padding: 30px;
          width: 50%;
        }
        .skeleton-section {
          width: 100%;
          height: 100%;
          padding: 30px;
          display: flex;
          flex-direction: column;
        }
        .back-button {
          cursor: pointer;
          height: 40px;
          width: 80px;
          padding: 8px;
          background: #8C50FF;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.50);
          
        }
        @media(max-width: 1600px){
          .match-meta {
            flex-direction: column;
            justify-content: flex-start;
          }
        }
        @media(max-width: 1210px) {
          .vacancy-description-half {
            width: 100%
          }
        }
      `}</style>
    </>
  )
}

CandidatesMatchPage.getLayout = (page) => <CandidateLayout title="Pumpt | Home">{page}</CandidateLayout>
export default CandidatesMatchPage