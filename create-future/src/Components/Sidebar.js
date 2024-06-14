import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import boxIcon from '../image/boxIcon.png';
import heartIcon from '../image/heartIcon.png';
import profileIcon from '../image/manIcon.png';
import schoolIcon from '../image/capIcon.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>
        <Link to="/">미래창작소</Link>
      </h1>
      <div className="sideMenu_container">
        <div className="linkWarp">
          <Link to={'/Recommend'}>추천</Link>
          <div>
            <img src={boxIcon} alt="box icon" />
          </div>
        </div>
        <div className="linkWarp">
          <Link to={'/List'}>취업</Link>
          <div>
            <img src={profileIcon} alt="profile icon" />
          </div>
        </div>
        <div className="linkWarp">
          <Link to={'/SchoolList'}>진학</Link>
          <div>
            <img src={schoolIcon} alt="school icon" />
          </div>
        </div>
        <div className="linkWarp">
          <Link to={'/Honey'}>꿀팁</Link>
          <div>
            <img src={heartIcon} alt="heart icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
