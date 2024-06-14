import React, { useState } from 'react';
import './Signup.css';
import '../Components/Button.module.css';
import Button from '../Components/Button';
import exIcon from '../image/exIcon.png';

export default function Signup() {
  const [userid, setUserid] = useState('');

  const heandleUserid = (e) => {
    setUserid(e.target.value);
  };
  return (
    <div className="sectionS">
      <div className="pageS">
        <div className="iconWrapS">
          <img src={exIcon} className="icon" alt="icon" />
        </div>
        <div className="contentS">
          <div className="titleS">Signup</div>
          <div className="inputContainerS">
            <div className="inputContentS">
              <div style={{ marginTop: '70px' }} className="inputWrapS">
                <input
                  className="inputS"
                  onChange={heandleUserid}
                  value={userid}
                  placeholder="ID"
                />
              </div>
              <div className="inputWrapS">
                <input className="inputS" placeholder="PASSWORD" />
              </div>
              <div className="inputWrapS">
                <input className="inputS" placeholder="인증번호전송" />
              </div>
            </div>
            <div className="inputContentS">
              <div style={{ marginTop: '70px' }} className="inputWrapS">
                <input className="inputS" placeholder="NAME" />
              </div>
              <div className="inputWrapS">
                <input className="inputS" placeholder="학번" />
              </div>
              <div className="inputWrapS">
                <input className="inputS" placeholder="EMAIL" />
              </div>
            </div>
          </div>
          <Button />
        </div>
      </div>
      <div className="guideS">
        <p>
          면접 전, 면접 관들이 할 질문들을 미리 생각해서 대비 하는것이 좋습니다.
        </p>
      </div>
    </div>
  );
}
