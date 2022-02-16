import {
  NavBase,
  NavLogo,
  NavList,
  NavListEffect,
  NavLine,
} from '../../Presenter/nav/NavPresenter';

function NavForm() {
  return (
    <>
      <NavBase>
        <NavLogo>저희 이름이 뭐죠?</NavLogo>
        <NavList>
          <NavListEffect>HOME</NavListEffect>
          <NavListEffect>PROJECT</NavListEffect>
          <NavListEffect>NODE</NavListEffect>
          <NavListEffect>REVIEW</NavListEffect>
          <NavListEffect>NEWS</NavListEffect>
        </NavList>
      </NavBase>
      <NavLine />
    </>
  );
}

export default NavForm;
