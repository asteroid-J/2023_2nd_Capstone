import React from 'react';
import './Find.css';
import '../Components/Button.module.css';
import Button from '../Components/Button';
import exIcon from '../image/exIcon.png';

export default function Find() {
  return (
    <div className="sectionF">
      <div className="pageF">
        <div className="iconWrapF">
          <img src={exIcon} className="icon" alt="icon" />
        </div>
        <div className="contentF">
          <div className="titleF">계정찾기</div>

          <div style={{ marginTop: '70px' }} className="inputWrapF">
            <input className="inputF" placeholder="전화번호" />
          </div>
          <div className="inputWrapF">
            <input className="inputF" placeholder="인증번호" />
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}
