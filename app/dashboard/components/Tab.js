import * as React from 'react'

const Tab = props => {

  return (
    <>
      <div
        className={props.selectedTab === props.tab ? 'tab active-tab' : 'tab'}
        onClick={() => {
          props.selectTabHandler(props.tab)
        }}
      >
        {props.tab}
      </div>
      <style jsx>{`
      .tab{
        cursor: pointer;
        width: 100%
      }
      .active-tab {
        position: relative;
      }
      .active-tab::after {
        position: absolute;
        top: 30px;
        content: '';
        display: block;
        background-color: #8C50FF;
        height: 2px;
        width: 100px;
      }
    `}</style>
    </>
  );
};

export default Tab