import React from 'react'
import '../../App.css';

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor: color,
      height: '1px',
      margin: 0
    }}
  />
);

export default function Menu(props) {
  return (<>
    <div className="sidebar" onClick={() => props.setShowDrawer(false)}>
      <div className="sidebar1" >
        <div style={{ display: "flex", flexDirection: "row", paddingLeft: "16px" }}>
          <div className={'logoCtnr'}>
            <img src={'/images/bizom.webp'} alt={"logo"} width={'120px'} />
          </div>
          <button className={"closeBtn"}>X</button>
        </div>
        <ColoredLine color="lightgray" />

        <div className={"linkCtnr"}>
        
          <a href="#home">
          {/* <DeleteOutlinedIcon /> */}
            {props.t('links.home')}</a>
          <a href="#services">  {props.t('links.claim')} </a>
          <a href="#clients">  {props.t('links.payment')}</a>
        </div>

      </div>
    </div>
    <div className="main">
      {props.children}
    </div>
  </>)
}