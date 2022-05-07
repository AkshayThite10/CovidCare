import React from 'react';
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg"  id="s1">CovidCare</span>
        <span className="headerTitleSm" id="s2">Good Health is above Wealth!!</span>
      </div>
      <img
        className="headerImg"
        src={require('../../img/background.jpeg')}
        alt=""
      />
    </div>
  );
}
