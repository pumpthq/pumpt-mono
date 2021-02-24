import * as React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as EmptyStar } from "@fortawesome/free-regular-svg-icons"
import { faStar as Bookmarked, faMapMarkerAlt as Location, faBuilding as Company } from "@fortawesome/free-solid-svg-icons"
import { Skeleton } from 'react-loading-skeleton'
import { Link } from 'blitz'

const CompanyMatch = ({ match }) => {
  // console.log(match)

  return (
    <>
      <div className="match">
        <div className="match-top">
          <img className="match-img" src={match.company.image.toString() || <Skeleton circle width={140} height={140} />} />
        </div>
        <div className="match-heading">
          <h2 className="match-title">{match.vacancy.title || <Skeleton width={150} />}</h2>
          <p className="match-company-name"><FontAwesomeIcon style={{ marginRight: '10px' }} icon={Company} />{match.company.name || <Skeleton width={150} />}</p>
          <p style={{ color: 'gray' }}><FontAwesomeIcon style={{ marginRight: '10px' }} icon={Location} />{match.vacancy.location || <Skeleton width={150} />}</p>
        </div>
        <div className="match-bottom">
          <div className="match-link">
            <Link href={`/dashboard/candidate/matches/${match.id}`}>
              <a style={{ color: 'white', textDecoration: 'none' }}>
                See More
            </a>
            </Link>
          </div>
          <span style={{ color: 'gray', marginRight: '10px' }}>2 Days Ago</span>
        </div>
      </div>
      <style jsx>{`
        .match {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 20px;
          width: 23.5%;
          height: 380px;
          margin: 10px;
          background: #2f2f2f;
          border-radius: 8px;
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);

        }
        .match-top{
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .match-bottom{
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          width: 100%;
        }
        .match-heading {
          display: flex;
          flex-direction: column;
        }
        .match-title {
          font-size: 25px;
          margin-bottom: 0;
        }
        .match-img {
          height: 120px;
          width: 120px;
          border-radius: 60px;
          box-shadow: 0px 0px 7px 0px rgba(0,0,0,0.70);

        }
        .match-link {
          margin-top: 10px;
          padding: 0 15px;
          height: 50px;
          min-width: 150px; 
          background: #8C50FF;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }
        @media(max-width: 1641px){
          .match {
            width: 31%
          }
        }
        @media(max-width: 1000px){
          .match {
            width: 46.2%
          }
        }
        @media(max-width: 670px){
          .match {
            width: 95%
          }
        }
      `}</style>
    </>
  )
}

export default CompanyMatch