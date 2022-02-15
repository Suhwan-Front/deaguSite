import {MainList, MainText} from '../../Presenter/main/MainFormPresenter';

function MainForm() {
  return (
    <>
      <MainList>
        <li>
          <MainText>
            대구 지역 개발!
            <br />
            프로젝트 기반 스터디 학습
          </MainText>
          <p>?이름?은 대구 지역 개발자를 위한 스터디 커뮤니티 입니다.</p>
        </li>
        <li></li>
      </MainList>
    </>
  );
}

export default MainForm;
