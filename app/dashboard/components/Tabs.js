import * as React from 'react'
import Tab from './Tab'

const Tabs = props => {
  return (
    <>
      <div className="tabs">
        {props.tabs.map(tab => {
          return <div className="tab-name">
            <Tab tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} />
          </div>
        })}
      </div>
      <style jsx>{`
        .tabs {
          display: flex;
          height: 40px;
          justify-content: space-between;
        }
        .tab-name {
          width: 110px; 
          margin-right: 70px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        .tab-name .tab.active-tab {
          border-bottom: 1px solid blue;
        }
    `}</style>
    </>
  );
};

export default Tabs