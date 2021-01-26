import {
  Document, Html, DocumentHead, Main, BlitzScript
  /*DocumentContext*/
} from 'blitz';

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }
  render() {
    return <Html lang="en">
      <DocumentHead>
        <script src="https://kit.fontawesome.com/df9026f031.js" crossorigin="anonymous"></script>
      </DocumentHead>
      <body>
        <Main />
        <BlitzScript />
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
        .line{
          height: 1px;
          width: 40%;
          max-width: 275px;
        }
        .purple {
          border 2px solid #8C50FF;
        }
        .green {
          border 2px solid #6BC150;
        }
        .blue {
          border 2px solid #5A83F5;
        }
        .pink {
          border 2px solid #FA485D;
        }
        .yellow {
          border 2px solid #FFB302;
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
          max-width: 850px;
          height: 100%;
          display: flex;
          justify-content: center;
          
          align-items: center;
        }
        .section-right {
          width: 45%;
          max-width: 850px;
          height: 100%;

        }
        .full-page {
          border: 1px solid white;
          display: flex;
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
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          min-width: 250px;
          max-width: 400px;
          height: 400px;
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
          top: 70px;
          bottom: 10px;
          padding: 30px;
          border-radius: 15px;
          background-color: #262626;
          box-shadow: inset 0 0 0 2px #2b333d
        }
        .industry-icon {
          width: 120px;
        }
        
        @media(max-width: 1210px){
          .hero {
            margin-bottom: 0;
          }
          .hero-right {
            display: none;
          }
          .hero-left{
            width: 100%;
          }

          .hero-left p {
            width: 100%;
          }
          .full-page {
            align-items: center;
            height: auto;
            flex-direction: column-reverse;
          }
          .section-left {
            width: 100%;
          }
          .section-right{
            width: 100%;
          }
          .industry-cards {
            flex-direction: column-reverse;
          }
          .card-column {
            flex-direction: row;
            width: 100%;
          }
          .card-column.left {
            padding: 0
          }
          .card-column.right {
            padding: 0
            
          }
          .card {
            max-width: 100%;
          }
          .industry-info {

          }
        }
      `}</style>

      </body>
    </Html>;
  }

}

export default MyDocument;