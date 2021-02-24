import CompanyLayout from '../../../../../layouts/CompanyLayout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const CompanyConversationsPage = () => {
  return (
    <>

      <h1>Candidate Chat</h1>
      <p>Here you can chat with recruiters from matched vacancies</p>
      <div className="chat-container">
        <div className="chat-left">
          <div className="chat-list-header">
            <h3 >Conversations</h3>
            <input type="text" placeholder={`Search for conversations`} />
          </div>
          <div className="chat-list">
            <div className="conversation selected-chat">
              <div className="conversation-preview-profile-img"></div>
              <div className="conversation-meta">
                <p className="recruiter-name-meta" style={{ margin: '5px 0', fontSize: '18px', fontWeight: 'bold' }}>Candidate Name</p>
                <p style={{ margin: '5px 0' }}>Vacancy Title</p>
              </div>
              <div className="conversation-timestamp">
                <p>1 hour ago</p>
              </div>
            </div>
            <div className="conversation">
              <div className="conversation-preview-profile-img"></div>
              <div className="conversation-meta">
                <p className="recruiter-name-meta" style={{ margin: '5px 0', fontSize: '18px', fontWeight: 'bold' }}>Candidate Name</p>
                <p style={{ margin: '5px 0' }}>Vacancy Title</p>
              </div>
              <div className="conversation-timestamp">
                <p>1 hour ago</p>
              </div>
            </div>
            <div className="conversation">
              <div className="conversation-preview-profile-img"></div>
              <div className="conversation-meta">
                <p className="recruiter-name-meta" style={{ margin: '5px 0', fontSize: '18px', fontWeight: 'bold' }}>Candidate Name</p>
                <p style={{ margin: '5px 0' }}>Vacancy Title</p>
              </div>
              <div className="conversation-timestamp">
                <p>1 hour ago</p>
              </div>
            </div>
            <div className="conversation">
              <div className="conversation-preview-profile-img"></div>
              <div className="conversation-meta">
                <p className="recruiter-name-meta" style={{ margin: '5px 0', fontSize: '18px', fontWeight: 'bold' }}>Candidate Name</p>
                <p style={{ margin: '5px 0' }}>Vacancy Title</p>
              </div>
              <div className="conversation-timestamp">
                <p>1 hour ago</p>
              </div>


            </div>
          </div>
        </div>
        <div className="chat-right">
          <div className="chat-header">
            <div className="recruiter-chat-name">
              <h3 style={{ margin: '5px 0' }}>Candidate Name</h3>
              <p style={{ margin: '5px 0', color: 'gray' }}>Vacancy Title</p>
            </div>
          </div>
          <div className="chat-view"></div>
          <div className="chat-input-bar">
            <input placeholder="Type something here..." />
            <div className="send-button"><FontAwesomeIcon icon={faPaperPlane} style={{ marginRight: '10px' }} />Send</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .chat-container {
          height: 74vh;
          width: 100%;
          margin-top: 50px;
          display: flex;
        }
        .chat-left {
          padding: 30px;
          width: 45%;
        }
        .chat-right {
          position: relative;
          width: 55%;
          background-color: #2f2f2f;
          border-radius: 8px;
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
        }
        .chat-list-header {
          align-items: baseline;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .chat-list-header input {
          padding-left: 20px;
          height: 40px;
          border-style: none;
          border-radius: 50px;
          background-color: #0f0f0f;
          width: 40%;
          min-width: 200px;
          color: white;
        }
        .chat-list {
          padding: 10px;
          height: 95%;
          overflow-y: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none; 
        }
        .chat-list::-webkit-scrollbar {
          display: none;
        }
        .conversation {
          background-color: #2f2f2f;
          width: 100%;
          height: 100px;
          margin-bottom: 10px;
          border-radius: 8px;
          padding: 10px;
          padding-left: 30px;
          display: flex;
          align-items: center;
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
        }

        .conversation-meta {
          color: white;
          margin-left: 5%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 70%;
        }
        .recruiter-name-meta{
          color: white;
        }
        .conversation-preview-profile-img {
          width: 70px;
          height: 70px;
          border-radius: 35px;
          background-color: grey;
        }
        .conversation-timestamp {
          color: white;
          font-size: 12px;
        }

        .chat-header {
          height: 80px;
          box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.40);
          display: flex;
          align-items: center;
          padding-left: 20px;
        }
        .chat-input-bar {
          display: flex;
          position: absolute;
          width: 100%;
          bottom: 0;
          height: 80px;
          box-shadow: 0px -5px 10px 0px rgba(0,0,0,0.40);
          overflow: hidden
        }
        .chat-input-bar input {
          padding: 0 20px;
          border-style: none;
          flex: 1;
          border-radius: 0 0 0 8px;
          background-color: #2f2f2f;
          color: white;
        }
        .chat-input-bar input:focus {
          outline: none
        }
        .selected-chat {
          background: #8C50FF;
          background: -webkit-linear-gradient(to right, #5A83F5, #8C50FF);
          background: linear-gradient(to right, #5A83F5, #8C50FF);
          box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.50);
        }
        .send-button {
          height: 100%;
          width: 100px;
          color: #8C50FF;
          border-radius: 0 0 8px 0;
          display: flex;
          justify-content: center;
          align-items: center
        }
      `}</style>
    </>
  )
}

CompanyConversationsPage.getLayout = (page) => <CompanyLayout title="Pumpt | Conversations">{page}</CompanyLayout>
export default CompanyConversationsPage