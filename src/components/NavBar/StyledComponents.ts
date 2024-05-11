//styled-components
import { styled } from "styled-components";

export const Link = styled.div`
  color: ${({ theme }) => theme.notSelected};
  height: 25px;
  padding: 0px 15px;
  font-size: small;
`;

export const LinkActive = styled.div`
  position: relative;
  color: ${({ theme }) => theme.selected};
  font-size: small;
  transition: 0.4s color ease-in;
`;
export const LinkActiveDecorator = styled.div`
  border: 1px solid #000;
  height: 22px;
  width: 80%;
  padding: 0px 15px;
  border-radius: 50%;
  border-color: ${({ theme }) => theme.selected};
  position: absolute;
  transform: rotate(165deg);
  right: -9px;
  top: -5px;
  transition: 0.4s border-color ease-in;
`;

export const BlankSpaceLinkActiveDecorator = styled.div`
  width: 30px;
  height: 10px;
  position: absolute;
  background-color: ${({ theme }) => theme.background1};
  top: -8px;
  left: -2px;
  transition: 0.4s background-color ease-in;
`;

export const NavBarStyled = styled.nav`
  padding: 50px 100px;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: large;
  font-weight: 600;
  transition: 0.4s color ease-in;
`;

export const LoggedUserContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.selected};
  display:flex;
  justify-content:center;
  align-items:center;
  color:rgb(255, 255, 255) ;
  margin: 0px 10px;
`;
