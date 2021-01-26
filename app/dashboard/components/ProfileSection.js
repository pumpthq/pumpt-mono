export default ({ heading, children }) => {
  return (
    <>
      <div style={{ marginTop: '50px' }}>
        <p>{heading}</p>
        <hr />
        <div className="profile-row">
          {children}
        </div>
      </div>
      <style jsx>{`
    .profile-row {
          justify-content: space-between;
          display: flex;
          flex-wrap: wrap;
          padding: 20px;
        }
    `}</style>
    </>
  )
}