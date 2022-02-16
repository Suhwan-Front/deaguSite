import styled from 'styled-components';

const MainList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: 110px;
`;

const MainLi = styled.li`
  float: left;
  margin-right: 175px;
  margin-top: 50px;
`;

const MainText = styled.div`
  font-style: bold;
  color: ${props => props.color || 'white'};
  font-weight: ${props => props.bold || 'normal'};
  font-size: ${props => props.size || '40px'};
  display: ${props => props.display || 'inline'};
`;

const MainImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url(${props => props.MainImg});
  display: block;
  margin: 0px auto;
  margin-top: ${props => props.marginTop};
  border-radius: 0.75rem;
  background-size: cover;
`;

const ImageListSetting = styled.div`
  display: flex;
  flex-direction: column;
  width: 72vw;
  height: 42vw;
  margin: 0 auto;
  align-items: center;
  div {
    color: black;
    border-radius: 0.75rem;
    background-color: white;
    object-fit: cover;
    width: 18vw;
  }
`;

// eslint-disable-next-line react/prop-types
function MainTextSetting({children, color, bold, size, display}) {
  return (
    <MainText color={color} bold={bold} size={size} display={display}>
      {children}
    </MainText>
  );
}

// eslint-disable-next-line react/prop-types
function MainImageSetting({width, height, MainImg, marginTop}) {
  return (
    <MainImage
      width={width}
      height={height}
      marginTop={marginTop}
      MainImg={MainImg}
    />
  );
}

export {MainList, MainLi, ImageListSetting, MainTextSetting, MainImageSetting};
