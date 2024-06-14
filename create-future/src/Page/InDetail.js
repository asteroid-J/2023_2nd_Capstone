import './InDetail.css';
// import profileImg from '../images/profileImage.png';
// import nodeIcon from '../images/nodeIcon.png';
import parkminhyuk from '../image/박민혁선배프로필.png';
import nodejsIcon from '../image/nodeIcon.png';
import recarIcon from '../image/reactIcon.png';
import personIcon from '../image/personIcon.png';
import Untitled from '../image/Untitled.png';

const LeftSide = () => {
  return (
    <div>
      <div className="sideContainer">
        <div className="leftSide">
          <div className="topSide">
            <img src={parkminhyuk} className="sideProfileImg" />

            <h4>박민혁</h4>
            <h6>Park Min Hyuk</h6>
          </div>
          <div className="bottomSide">
            <h5>pmh_only@pmh.codes</h5>
            <a href="https://github.com/pmh-only" target="_blank">
              ParkMinHyuk Github
            </a>
          </div>
        </div>
      </div>
      <div className="textArea">
        <p>
          [성장과정]
          <br />
          게임사이트와 포털사이트에 대한 호기심으로 프로그래밍을 알게
          되었습니다. 친구들을 위한 사이트 제작을 시작으로, 코로나로 인해
          지역사회의 어려움을 느끼고 사회에 기여하는 사이트를 개발하는 목표를
          세웠습니다. 중학생 때 "많은 인원의 체온을 빠르게 측정하여 전산처리하는
          서비스"를 제작하여 표창장과 언론사의 취재를 받았습니다.
        </p>
        <p>
          [성격과 강점]
          <br />
          빠른 대처 능력: 학교 축제에서 실시간 포인트 시스템 문제를 순간
          해결하여 빠른 대처 능력을 길렀습니다. 남에게 베풀기: 학교 단체에 뜻을
          깊게 품고, 친구와 후배들에게 성실히 도움을 주는 성격으로 주변에 높은
          실력을 가진 친구들을 양성했습니다
        </p>
        <p>
          [교내외 활동]
          <br />
          뛰어난 리더쉽: 중학, 고교 학생회장 경험으로 소심함을 극복하고 뛰어난
          리더로 성장했습니다. 기능경기대회 성과: 클라우드 컴퓨팅 분야에서 지방,
          전국 대회에서 금메달과 우수상을 수상하며 높은 성과를 이뤘습니다
        </p>
        <p>
          [지원 동기 및 입사 포부]
          <br />
          선생님의 추천으로 회사에 관심을 갖게 되었고, 중학생때 개발한 체온 측정
          서비스와 기술을 활용하여 사회에 기여하고 싶어 입사를 희망합니다.
          다양한 프로젝트 경험과 배경지식으로 귀사에서 더 발전하는 인재로
          성장하겠습니다.
        </p>
      </div>
      <div className="right_sideBar">
        <h1>Skill</h1>
        <div className="skill_icon_1">
          <img src={nodejsIcon} />
          Node.js
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
