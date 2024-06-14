import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Button({ userId }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    alert(`${userId}님 환영합니다`);
    navigate('/Recommend');
  };

  return (
    <div className="buttonWrap">
      <div className="button" onClick={handleOnClick}>
        <Link to={'/'}>Login</Link>
      </div>
    </div>
  );
}
