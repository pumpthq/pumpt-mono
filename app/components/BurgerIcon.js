import React from 'react';


const Burger = ({ open, setOpen }) => {


  return (
    <>
      <div className="burger" onClick={() => setOpen(!open)}>
        <div className="burger-line" />
        <div className="burger-line" />
        <div className="burger-line" />
      </div>
      <style jsx>{`
      .burger {
        display: none;
        position: absolute;
        top: 2%;
        right: 2rem;
        flex-direction: column;
        justify-content: space-around;
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 10;
      }
      
      .burger:focus {
        outline: none;
      }
      
      .burger-line {
        width: 2rem;
        height: 0.25rem;
        background: #EFFFFA;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;
      }
      @media(max-width: 1210px){
        .burger {
          display: flex;
        }
      }
    `}</style>
    </>
  )
}

export default Burger;