import React from 'react';
// import axios from 'axios';
import SideBar from '../Components/Sidebar';
import { useState } from 'react';
import shareIcon from '../image/shareIcon.png';
import profileImage from '../image/박민혁선배프로필.png';
import javaIcon from '../image/javaIcon.png';
import reactIcon from '../image/reactIcon.png';
import mainColorIcon from '../image/mainColorIcon.png';
import maineikIcon from '../image/maineikIcon.png';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [username, setUsername] = useState(null);

  // useEffect(() => {
  //   const apiUrl = 'https';

  //   axios
  //     .get(apiUrl)
  //     .then((response) => {
  //       const fetchedUsername = response.data.username;
  //       setUsername(fetchedUsername);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching username:', error);
  //     });
  // }, []);

  return (
    <div className={styles.Home}>
      <SideBar />
      <div className={styles.mainContainer}>
        <div className={styles.leftSection}>
          {/* <div className={styles.name}>어서오세요 {username}님!</div> */}
          <div className={styles.name}>어서오세요 현국영님!</div>
          <div className={styles.title}>
            <img
              src={mainColorIcon}
              alt="icon"
              className={styles.mainColorIcon}
            />
            <div className={styles.titleContent}>
              <h1>미래창작소는</h1>
              <p>여러분의 더욱 쉬운 취업과 진학을 위해 함께 노력합니다</p>
            </div>
          </div>
          <div className={styles.subContentWarp}>
            <div className={styles.sosik}>
              <div className={styles.sosikTitle}>취업 소식</div>
              <div className={styles.sosikWarp}>
                <div className={styles.sosikContent}>node.js : 김재경</div>
                <div className={styles.sosikContent}>React.js : 현국영</div>
                <div className={styles.sosikContent}>Spring : 이혜성</div>
                <div className={styles.sosikContent}>Python : 오성택</div>
              </div>
            </div>
            <div className={styles.anony}>
              <div className={styles.anonyTitle}>
                <div className={styles.anonyTitleText}>익명성</div>
                <img
                  src={maineikIcon}
                  alt="icon"
                  className={styles.anonyTitleImg}
                />
              </div>
              <div className={styles.anonyWarp}>
                <div className={styles.anonyContent}>
                  <span>미래 창작소는</span>
                  <br /> 여러분들의 더 많은 참여율과 <br />
                  정보 수집을 위해서
                  <br /> 선배들의 프로필을 익명으로 <br />
                  설정할 수 있습니다
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.top}>
            <div className={styles.main_profile_section}>
              <div className={styles.profileImg_section}>
                <div className={styles.profileImg_wrap}>
                  <img
                    src={profileImage}
                    className={styles.profileImage}
                    alt="icon"
                  />
                </div>
                <p>
                  <h4>홍 길 동</h4>
                </p>
                <p>
                  <h6 className={styles.eng_name}>Hong Gil Dong</h6>
                </p>
              </div>
              <div className={styles.direct_profile}>
                <Link to={'/ProfileDetail'}>
                  <h4 className={styles.goProfileMoment}>프로필 보러 가기</h4>
                  <img
                    src={shareIcon}
                    className={styles.shareIcon}
                    alt="icon"
                  />
                </Link>
              </div>
            </div>
            <div className={styles.main_skill_section}>
              <div className={styles.skill_section}>
                <div className={styles.skill_title}>Skill</div>
                <div className={styles.skill_1}>
                  <div className={styles.skilContent}>
                    <img
                      src={javaIcon}
                      className={styles.skilIcon}
                      alt="icon"
                    />
                    <div className={styles.skillName}>JAVA</div>
                  </div>
                  <div className={styles.skilContent}>
                    <img
                      src={reactIcon}
                      className={styles.skilIcon}
                      alt="icon"
                    />
                    <div className={styles.skillName}>React.js</div>
                  </div>
                </div>
              </div>
              <div className={styles.certificate_section}>
                <div className={styles.certificateContent}>
                  <div className={styles.certificate_title}>Certificate</div>
                  <div className={styles.certificate}>네트워크관리사</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <Link to={'/Login'}>
              <h1>Login</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
