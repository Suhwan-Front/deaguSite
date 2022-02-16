import {
  MainList,
  MainLi,
  ImageListSetting,
  MainTextSetting,
  MainImageSetting,
} from '../../Presenter/main/MainFormPresenter';
import Button from '../../Presenter/main/Button';
import devLogo from '../../Img/devLogo.png';

function MainForm() {
  return (
    <>
      <MainList>
        <MainLi>
          <MainTextSetting bold={'bold'}>
            대구 지역 개발! <br></br>
            <MainTextSetting color={'orange'}>프로젝트</MainTextSetting>
            기반 스터디 학습
          </MainTextSetting>
          <br />
          <br />
          <MainTextSetting size={'15px'} bold={'bold'}>
            ?이름?은{' '}
            <MainTextSetting color={'#FE2E64'} size={'15px'} bold={'bold'}>
              대구 지역 개발자
            </MainTextSetting>
            를 위한&nbsp;
            <MainTextSetting color={'#FE2E64'} size={'15px'} bold={'bold'}>
              스터디 커뮤니티&nbsp;
            </MainTextSetting>
            입니다
          </MainTextSetting>
        </MainLi>
        <MainLi>
          <MainTextSetting>슬라이드 어캐함;;</MainTextSetting>
        </MainLi>
      </MainList>
      <MainImageSetting
        width={'42vw'}
        height={'24vw'}
        marginTop={'100px'}
        MainImg={devLogo}
      />
      <Button variant={'warning'}>모임 신청하기</Button>
      <MainList>
        <MainTextSetting bold={'bold'} size={'35px'}>
          모임의 프로젝트!
        </MainTextSetting>
      </MainList>
      <ImageListSetting>
        <article>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </article>
      </ImageListSetting>
    </>
  );
}

export default MainForm;
