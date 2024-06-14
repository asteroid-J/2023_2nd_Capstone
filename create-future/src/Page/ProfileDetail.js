import styles from './ProfileDetail.module.css';
import parkminhyuk from '../image/박민혁선배프로필.png';
import nodejsIcon from '../image/nodeIcon.png';
import recarIcon from '../image/reactIcon.png';
import Untitled from '../image/Untitled.png';
import { Link } from 'react-router-dom';

const ProfileDetail = () => {
  return (
    <div>
      <div className={styles.sideContainer}>
        <div className={styles.leftSide}>
          <div className={styles.topSide}>
            <img
              src={parkminhyuk}
              className={styles.sideProfileImg}
              alt="icon"
            />

            <h4>박민혁</h4>
            <h6>Park Min Hyuk</h6>
          </div>
          <div className={styles.bottomSide}>
            <h5>pmh_only@pmh.codes</h5>
            <a href="https://github.com/pmh-only" target="_blank">
              ParkMinHyuk Github
            </a>
          </div>
        </div>
      </div>
      <div className={styles.mainSection}>
        <h2>취업 포트폴리오, 박민혁</h2>
        <div className={styles.left_main}>
          <div className={styles.left_top}>
            <div className={styles.company}>
              <h3>소속기관🏰</h3>
              <h2>아이티스코</h2>
            </div>
            <div className={styles.recommand}>
              <div className={styles.rec_btn}>
                <p>추천하기 👍</p>
              </div>
              <div className={styles.rec_value}>
                <p className={styles.rec_txt}>추천 수 1,490</p>
              </div>
            </div>
          </div>
          <div className={styles.left_bottom}>
            <div className={styles.ja}>
              <h2>
                <p>박민혁</p>님의 보유 자격증
              </h2>
              <ul>
                <li>정보처리산업기사✅</li>
                <li>네트워크관리사✅</li>
              </ul>
            </div>
            <a href="/">
              <div className={styles.back}>
                <h2>메인으로 돌아가기</h2>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.right_main}>
          <div className={styles.right_top}>
            <h1>
              <p className={styles.userName}>박민혁</p> 님의 기술
            </h1>
            <div className={styles.fir_skill} id="skills">
              <img src={nodejsIcon} className={styles.nodeIcon} />
              <h2 className={styles.skillName}>node.js</h2>
            </div>
            <div className={styles.sec_skill} id="skills">
              <img src={recarIcon} className={styles.reactIcon} />
              <h2 className={styles.skillName}>React.js</h2>
            </div>
          </div>
          <div className={styles.right_bottom}>
            <img src={parkminhyuk} className={styles.profileImage} />
            <h2>박민혁님 자소서 보러가기</h2>
            <Link to={'/InDetail'}>
              <img src={Untitled} className={styles.projectIcon} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
