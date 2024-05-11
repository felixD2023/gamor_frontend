//styled-components
import { styled } from "styled-components";

export const CentralSectionStyled = styled.div`
  position: relative;
  width: 33.33%;
  height: 500px;
  background-color: ${({ theme }) => theme.selected};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 100px 6px rgba(0, 0, 0, 0.1);
  transition: 0.4s background-color ease-in;
`;

export const BackgroundCircle = styled.div<{
  left: string;
  top: string;
  rotation: string;
}>`
  position: relative;
  width: 200px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid
    ${({ theme }) =>
      theme.text === "rgb(255, 255, 255)"
        ? "rgb(185, 90, 36)"
        : "rgb(76, 33, 139)"};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: rotate(${(props) => props.rotation});
  transition: 0.4s border-color ease-in;
`;

export const BackgroundBlankSpace = styled.div<{
  left: string;
  top: string;
  rotation: string;
}>`
  position: relative;
  background-color: ${({ theme }) => theme.selected};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  width: 100px;
  height: 50px;
  transform: rotate(${(props) => props.rotation});
  transition: 0.4s background-color ease-in;
`;

export const AvatarImage = styled.img`
  height: 330px;
`;

export const HeaderTittle = styled.div`
  font-size: 18px;
  color: white;
  text-align: center;
  padding: 15px 0px;
`;

export const HeaderSubTittle = styled.div`
  font-size: 12px;
  color: ${({ theme }) =>
    theme.text === "rgb(255, 255, 255)"
      ? "rgb(185, 90, 36)"
      : "rgb(76, 33, 139)"};
  text-align: center;
  transition: 0.4s color ease-in;
`;

export const Timer = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 2em;
  background-color: white;
  color: ${({ theme }) => theme.selected};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  transition: 0.4s color ease-in;
`;
export const UserUnjoined = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(255,255,255,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  transition: 0.4s background-color ease-in;
`;

export const UserJoined = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.avatarsBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  transition: 0.4s background-color ease-in;
`;
export const EmojiUserJoined = styled.div`
  position: absolute;
  top:-7px;
  left:-7px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 11px;
`;
