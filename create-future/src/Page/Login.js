import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Button from '../Components/Button';
import exIcon from '../image/exIcon.png';

export default function Login() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const heandleUserId = (e) => {
    setUserId(e.target.value);
  };

  const heandleUserPw = (e) => {
    setUserPw(e.target.value);
  };

  const toSignup = () => {
    navigate('/Signup');
  };

  const toFind = () => {
    navigate('/Find');
  };

  return (
    <div className="section">
      <div className="page">
        <div className="iconWrap">
          <img src={exIcon} className="icon" alt="icon" />
        </div>
        <div className="content">
          <div className="title">Login</div>

          <div style={{ marginTop: '70px' }} className="inputWrap">
            <input
              className="input"
              onChange={heandleUserId}
              value={userId}
              placeholder="ID"
            />
          </div>
          <div className="inputWrap">
            <input
              className="input"
              onChange={heandleUserPw}
              value={userPw}
              placeholder="PASSWORD"
            />
          </div>
          <Button userId={userId} />
        </div>
      </div>
      <div className="subButtonWrap">
        <button className="subButton" onClick={toSignup}>
          Sign up
        </button>
        <button className="subButton" onClick={toFind}>
          Find Account
        </button>
      </div>
      <div className="guide">
        <p>미래창작소는 여러분의 더욱 쉬운 취업과 진학에 도움을 줍니다.</p>
      </div>
    </div>
  );
}
