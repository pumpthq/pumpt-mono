export default ({ label, width, innerHeight, children }) => {
  return (
    <>
      <div className="labeled-field">
        <p><strong>{label}</strong></p>
        <div className="info-field">
          {children}
        </div>
      </div>
      <style jsx>{`
      .info-field {
          height: ${innerHeight};
          padding: 8px;
          background-color: inherit;
          border-bottom: 2px solid gray;
          display: flex;
          justify-content: flex-start;
          align-items: center
        }
        .labeled-field {
          width: ${width};
          margin: 0 10px;
        }
    `}</style>
    </>
  )
}


/*
      .info-field {
          height: ${innerHeight};
          padding: 8px;
          background-color: inherit;
          box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.30);
          border-radius: 10px;
          display: flex;
          justify-content: flex-start;
          align-items: center
        }
        .labeled-field{
          width: ${width};
          margin: 0 10px;
        }
*/