import SideBar from '../Components/Sidebar';
import personIcon from '../image/personIcon.png';
import hanyoungguen from '../image/한용균선배프로필.png';
import parkminhyek from '../image/박민혁선배프로필.png';
import imjehyun from '../image/임재현선배프로필.png';
import userImage from '../image/userImage.jpeg';
import goodIcon from '../image/goodIcon.png';
import styles from './Recommend.module.css';
const Recommend = ({ userid }) => {
  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.mainFild}>
        <div className={styles.userComeContainer}>
          <div className={styles.userCome}>
            <img src={userImage} className={styles.profileIcon} alt="icon" />
            <div className={styles.text}>현국영님의 추천</div>
          </div>
          <div className={styles.profileContainer}>
            <div className={styles.profile}>
              <img
                src={personIcon}
                className={styles.profileIconIn_base}
                alt="icon"
              />
              <div className={styles.Name}>이도건</div>
              <div className={styles.Content}>드림아이디어소프트</div>
              <img src={goodIcon} className={styles.menuIconIn} alt="icon" />
            </div>
            <div className={styles.profile}>
              <img
                src={hanyoungguen}
                className={styles.profileIconIn}
                alt="icon"
              />
              <div className={styles.Name}>한용균</div>
              <div className={styles.Content}>엔젤게임즈</div>
              <img src={goodIcon} className={styles.menuIconIn} alt="icon" />
            </div>
            <div className={styles.profile}>
              <img
                src={parkminhyek}
                className={styles.profileIconIn}
                alt="icon"
              />
              <div className={styles.Name}>박민혁</div>
              <div className={styles.Content}>미확인</div>
              <img src={goodIcon} className={styles.menuIconIn} alt="icon" />
            </div>
            <div className={styles.profile}>
              <img src={imjehyun} className={styles.profileIconIn} alt="icon" />
              <div className={styles.Name}>임재현</div>
              <div className={styles.Content}>미확인</div>
              <img src={goodIcon} className={styles.menuIconIn} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
