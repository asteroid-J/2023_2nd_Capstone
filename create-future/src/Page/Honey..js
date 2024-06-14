import SideBar from '../Components/Sidebar';
import capIcon from '../image/capIcon.png';
import iCon from '../image/manIcon.png';
import goodIcon from '../image/goodIcon.png';
import parkminhyek from '../image/박민혁선배프로필.png';
import imjehyun from '../image/임재현선배프로필.png';
import hanyoungguen from '../image/한용균선배프로필.png';
import limtaehyun from '../image/임태현선배프로필.png';
import personIcon from '../image/personIcon.png';
import './Honey.css';
const Honey = () => {
  return (
    <div className="container">
      <SideBar />
      <div className="mainFild">
        <div className="textContainer">
          <div className="contentH">
            <img src={parkminhyek} className="iCon" alt="icon" />
            <div className="textH">
              자소서 적을때 성장 과정에는 자신의 이야기를 “ 스토리 화 “ 시켜서
              적는게 좋아.
            </div>
            <div className="nameH">박민혁</div>
          </div>
          <div className="contentH">
            <img src={limtaehyun} className="iCon" alt="icon" />
            <div className="textH">
              면접 전, 면접 관들이 할 질문들을 미리 생각해서 대비 하는것이 좋아.
            </div>
            <div className="nameH">임태현</div>
          </div>
          <div className="contentH">
            <img src={hanyoungguen} className="iCon" alt="icon" />
            <div className="textH">
              면접때 옷, 용모등은 최대한 단정하게 입고 가는 것이 좋아, 없다면
              교복도 좋아.
            </div>
            <div className="nameH">한용균</div>
          </div>
          <div className="contentH">
            <img src={personIcon} className="iCon_base" alt="icon" />
            <div className="textH">질문,대답은 자신있고 적극적으로 임하기.</div>
            <div className="nameH">이도건</div>
          </div>
          <div className="contentH">
            <img src={personIcon} className="iCon_base" alt="icon" />
            <div className="textH">불필요한 말들은 굳이 적지 않는게 좋아</div>
            <div className="nameH">홍길동</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honey;
