import React from 'react';
import styles from './SchoolList.module.css';
import goodIcon from '../image/goodIcon.png';
import personIcon from '../image/personIcon.png';
import kyungpook from '../image/경북대학교.png';
import youngnam from '../image/영남대학교.png';
import dago from '../image/대구대학교.png';
import andong from '../image/안동대학교.png';
import gumi from '../image/구미대학교.png';
import Sidebar from '../Components/Sidebar';
const List = () => {
  return (
    <div className={styles.ListWarp}>
      <div className={styles.filter}>
        <div className={styles.filterContainer}>
          <div className={styles.filterContent}>
            <img className={styles.icon} src={kyungpook} alt="icon"></img>
            <div className={styles.text}>경북대</div>
          </div>
          <div className={styles.filterContent}>
            <img className={styles.icon} src={youngnam} alt="icon"></img>
            <div className={styles.text}>영남대</div>
          </div>
          <div className={styles.filterContent}>
            <img className={styles.icon} src={dago} alt="icon"></img>
            <div className={styles.text}>대구대</div>
          </div>
          <div className={styles.filterContent}>
            <img className={styles.icon} src={andong} alt="icon"></img>
            <div className={styles.text}>안동대</div>
          </div>
          <div className={styles.filterContent}>
            <img className={styles.icon} src={gumi} alt="icon"></img>
            <div className={styles.text}>구미대</div>
          </div>
        </div>
      </div>
      <div className={styles.contentWarp}>
        <div className={styles.profileWarp}>
          <div className={styles.profileContainer}>
            <div className={styles.profile}>
              <img
                src={personIcon}
                className={styles.profileIconIn_base}
                alt="icon"
              />
              <div className={styles.Name}>오성택</div>
              <div className={styles.Content}>안동대학교</div>
              <dvi className={styles.ContentSkill}>
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
              <img
                src={personIcon}
                className={styles.profileIconIn_base}
                alt="icon"
              />
              <div className={styles.Name}>미확인</div>
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
              <div className={styles.Name}>미확인</div>
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
              <div className={styles.Name}>미확인</div>
              <div className={styles.Content}>미확인</div>
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
                src={personIcon}
                className={styles.profileIconIn_base}
                alt="icon"
              />
              <div className={styles.Name}>미확인</div>
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
              <div className={styles.Name}>미확인</div>
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
              <div className={styles.Name}>미확인</div>
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
              <div className={styles.Name}>미확인</div>
              <div className={styles.Content}>미확인</div>
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
