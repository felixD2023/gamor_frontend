import SwitchTheme from "../SwitchTheme/SwitchTheme";
import Button from "../button/Button";
import NavBarLink from "./NavBarLink";
import { Logo, NavBarStyled } from "./StyledComponents";

const NavBar = () => {
  

  
  return (
    <>
      <NavBarStyled>
        <div style={{ display: "flex" }}>
          <NavBarLink to="home" name="Home" />
          <NavBarLink to="stream" name="Stream" />
          <NavBarLink to="party" name="Party" />
          <NavBarLink to="premium" name="Premium" />
        </div>
        <Logo>Gamor</Logo>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SwitchTheme />         
            <>
              <Button text="Sing in" variant="text"  />
              <Button text="Create account" variant="rounded" color="black" />
            </>          
        </div>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
