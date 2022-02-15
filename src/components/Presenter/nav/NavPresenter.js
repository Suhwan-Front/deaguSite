import styled from 'styled-components';

const NavBase = styled.div`
  display: flex;
  margin: 15px;
  color: white;
  justify-content: space-evenly;
`;

const NavLogo = styled.div`
  font-size: 25px;
`;

const NavList = styled.div`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 20%;
  font-size: 15px;
  height: 10% li {
    color: white;
  }
  li:hover {
    color: white;
    font-weight: 900;
    font-size: large;
  }
`;

const NavListEffect = styled.li`
  color: white;
  text-decoration: none;
  display: flex;
  padding-bottom: 4px;
  position: relative;
  align-items: flex-end;
  ::after {
    content: '';
    bottom: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 4px;
    background: #f1c40f;
    transition: all 0.5s ease-out;
  }
  :hover::after {
    width: 100%;
  }
  :hover {
    text-decoration: none;
    color: rgb(43, 43, 43);
    font-size: medium;
    font-weight: bold;
  }
`;

export {NavBase, NavLogo, NavList, NavListEffect};
