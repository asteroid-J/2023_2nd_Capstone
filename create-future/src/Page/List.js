import React from 'react';
import styles from './List.module.css';
import iCon from '../image/manIcon.png';
import goodIcon from '../image/goodIcon.png';
import parkminhyek from '../image/박민혁선배프로필.png';
import imjehyun from '../image/임재현선배프로필.png';
import hanyoungguen from '../image/한용균선배프로필.png';
import limtaehyun from '../image/임태현선배프로필.png';
import personIcon from '../image/personIcon.png';
import nodeIcon from '../image/nodeIcon.png';
import reactIcon from '../image/reactIcon.png';
import springIcon from '../image/SpringIcon.png';
import cshpIcon from '../image/CshpIcon.png';
import unityIcon from '../image/unityIcon.png';
import pythonIcon from '../image/PythonIcon.png';
import javaIcon from '../image/javaIcon.png';
import Sidebar from '../Components/Sidebar';
import { Link } from 'react-router-dom';
const List = () => {
  return (
    <div className={styles.ListWarp}>
      <div className={styles.filter}>
        <div className={styles.filterContainer}>
          <div className={styles.filterContent}>
            <img className={styles.icon} src={nodeIcon} alt="icon"></img>
            <div className={styles.text}>node.js</div>
          </div>
          <div className={styles.filterContent}>
            <img className={styles.icon} src={reactIcon} alt="icon"></img>
            <div className={styles.text}>React.js</div>
          </div>
          <div className={styles.filterContent}>
            <img className={styles.icon} src={springIcon} alt="icon"></img>
            <div className={styles.text}>Spring</div>
          </div>
          <div className={styles.filterContent}>
            <img className={styles.icon} src={cshpIcon} alt="icon"></img>
            <div className={styles.text}>C#</div>
          </div>
          <div className={styles.filterContent}>
            <img className={styles.icon} src={unityIcon} alt="icon"></img>
            <div className={styles.text}>unity</div>
          </div>
          <div className={styles.filterContent}>
            <img className={styles.icon} src={pythonIcon} alt="icon"></img>
            <div className={styles.text}>Python</div>
          </div>
          <div className={styles.filterContent}>
            <img className={styles.icon} src={javaIcon} alt="icon"></img>
            <div className={styles.text}>JAVA</div>
          </div>
        </div>
      </div>
      <div className={styles.contentWarp}>
        <div className={styles.profileWarp}>
          <div className={styles.profileContainer}>
            <div className={styles.profile}>
              <img
                src={parkminhyek}
                className={styles.profileIconIn}
                alt="icon"
              />
              <Link to={'/ProfileDetail'}>
                <div className={styles.Name}>박민혁</div>
                <div className={styles.Content}>아이티스코</div>
              </Link>

              <dvi className={styles.ContentSkill}>
                <div className={styles.skill}>
                  <img src={nodeIcon} alt="icon" className={styles.skillIcon} />
                  <div className={styles.skillName}>node.js</div>
                </div>

                <div className={styles.menuIconWarp}>
                  <img
                    src={goodIcon}
                    className={styles.menuIconIn}
                    alt="icon"
                  />
                </div>
              </dvi>
            </div>
            <div className={styles.profile}>
              <img src={imjehyun} className={styles.profileIconIn} alt="icon" />
              <div className={styles.Name}>임재현</div>
              <div className={styles.Content}>미확인</div>
              <div className={styles.menuIconWarp}>
                <img src={goodIcon} className={styles.menuIconIn} alt="icon" />
              </div>
            </div>
            <div className={styles.profile}>
              <img
                src={hanyoungguen}
                className={styles.profileIconIn}
                alt="icon"
              />
              <div className={styles.Name}>한용균</div>
              <div className={styles.Content}>엔젤게임즈</div>
              <div className={styles.menuIconWarp}>
                <img src={goodIcon} className={styles.menuIconIn} alt="icon" />
              </div>
            </div>
            <div className={styles.profile}>
              <img
                src={personIcon}
                className={styles.profileIconIn_base}
                alt="icon"
              />
              <div className={styles.Name}>이도건</div>
              <div className={styles.Content}>드림아이디어소프트</div>
              <div className={styles.menuIconWarp}>
                <img src={goodIcon} className={styles.menuIconIn} alt="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profileWarp}>
          <div className={styles.profileContainer}>
            <div className={styles.profile}>
              <img
                src={limtaehyun}
                className={styles.profileIconIn}
                alt="icon"
              />
              <div className={styles.Name}>임태현</div>
              <div className={styles.Content}>미확인</div>
              <div className={styles.menuIconWarp}>
                <img src={goodIcon} className={styles.menuIconIn} alt="icon" />
              </div>
            </div>
            <div className={styles.profile}>
              <img
                src={personIcon}
                className={styles.profileIconIn_base}
                alt="icon"
              />
              <div className={styles.Name}>이혜성</div>
              <div className={styles.Content}>일만백만</div>
              <div className={styles.menuIconWarp}>
                <img src={goodIcon} className={styles.menuIconIn} alt="icon" />
              </div>
            </div>
            <div className={styles.profile}>
              <img
                src={personIcon}
                className={styles.profileIconIn_base}
                alt="icon"
              />
              <div className={styles.Name}>현국영</div>
              <div className={styles.Content}>캐쉬플러스</div>
              <div className={styles.menuIconWarp}>
                <img src={goodIcon} className={styles.menuIconIn} alt="icon" />
              </div>
            </div>
            <div className={styles.profile}>
              <img
                src={personIcon}
                className={styles.profileIconIn_base}
                alt="icon"
              />
              <div className={styles.Name}>김재경</div>
              <div className={styles.Content}>아이디정보시스템</div>
              <div className={styles.menuIconWarp}>
                <img src={goodIcon} className={styles.menuIconIn} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sidebar />
    </div>
  );
};

export default List;
