import { styled } from "styled-components";

export const RightSectionStyled = styled.div`
  width: 33.33%;
  height: 500px;
  border-radius: 0px 15px 15px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 270px;
`;

export const TittleStyled = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  padding-left: 5px;
  transition: 0.4s color ease-in;
`;

export const NumberStyed = styled.div<{ list?: boolean }>`
  color: ${(props) =>
    props.list ? ({ theme }) => theme.text : ({ theme }) => theme.notSelected};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.list ? "center" : "end")};
  border-radius: ${(props) => (props.list ? "50%" : "0px")};
  background-color: ${(props) =>
    props.list
      ? ({ theme }) =>
          theme.text === "rgb(255, 255, 255)"
            ? "rgb(10, 10, 10)"
            : theme.background1
      : "none"};

  font-size: ${(props) => (props.list ? "9px" : "13px")};
  transition: 0.4s color ease-in, 0.4s background-color ease-in;
`;

//Choose platform***************************************************

export const ChoosePlatformContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 45px;
  width: 270px;
  background-color: ${({ theme }) =>
    theme.text === "rgb(255, 255, 255)"
      ? theme.background1
      : theme.background3};
  margin-top: 10px;
  border-radius: 2em;
  border: 1px solid ${({ theme }) => theme.background1};
  transition: 0.4s all ease-in;
`;

export const PlatformContainer = styled.div<{ active: boolean }>`
  position: relative;
  height: 35px;
  width: ${(props) => (props.active ? "90px" : "70px")};
  border-radius: 2em;
  background-color: ${(props) =>
    props.active
      ? ({ theme }) =>
          theme.text === "rgb(255, 255, 255)"
            ? "rgb(51, 57, 63)"
            : theme.background1
      : "none"};
  color: ${(props) =>
    props.active
      ? ({ theme }) => theme.text
      : ({ theme }) => theme.notSelected};
  display: flex;
  justify-content: right;
  align-items: center;
  margin: 0px 5px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.4s all ease-in;
`;

export const PlatformTextContainer = styled.span<{ active: boolean }>`
  position: absolute;
  left: ${(props) => (props.active ? "26px" : "5px")};
  transition: 0.4s left ease-in;
`;

export const PlatformEmojiContainer = styled.div<{ active: boolean }>`
  width: "16px";
  height: 16px;
  position: absolute;
  left: ${(props) => (props.active ? "5px" : "-16px")};
  transition: 0.4s left ease-in;
`;
//filter************************************************************

export const FilterContainer = styled.div<{ open: boolean }>`
  transform: scale(${(props) => (props.open ? "1" : "0")});
  position: absolute;
  left: -20px;
  z-index: 2;
  width: 200px;
  height: 100px;
  border-radius: 10px;
  background-color: ${({ theme }) =>
    theme.text === "rgb(255, 255, 255)"
      ? "rgb(0, 0, 0,0.6)"
      : "rgb(255, 255, 255,0.8)"};
  backdrop-filter: blur(3px);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s transform ease-in, 0.4s background-color ease-in;
`;

export const YearContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const YearInput = styled.input`
  width: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) =>
    theme.text === "rgb(255, 255, 255)"
      ? "rgb(0, 0, 0,0.6)"
      : "rgb(255, 255, 255,0.8)"};
  outline: none;
  color:${({theme})=>theme.text};
  transition: 0.4s border-color ease-in, 0.4s background-color ease-in, 0.4s color ease-in; 
`;

export const NumberOfPlayersSelectorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SignalSelector = styled.div<{ number: number }>`
  position: absolute;
  width: 15px;
  height: 4px;
  background-color: ${({ theme }) => theme.selected};
  border-radius: 2em;
  left: ${(props) => (props.number === 20 ? "40px" : "130px")};
  top: 15px;
  transition: 0.3s left ease-in;
`;

//Searching Game*****************************************************

export const SearchingGameContainer = styled.div`
  width: 270px;
  height: 300px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.background3};
  margin-top: 10px;
  box-shadow: 0px 0px 28px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.4s background-color ease-in;
`;
export const GameContainer = styled.div`
  position: relative;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Divider = styled.div`
  width: 100%;
  height: 0px;
  display: flex;
  border: 1px solid
    ${({ theme }) =>
      theme.text === "rgb(255, 255, 255)"
        ? theme.background2
        : theme.background1};
  transition: 0.4s border-color ease-in;
`;

export const SlideIcon = styled.div`
  width: 20px;
  height: 20px;
  margin: 0px 20px;
  color: ${({ theme }) => theme.notSelected};
  cursor: pointer;

  &:active {
    color: ${({ theme }) => theme.text};
  }
  transition: 0.4s background-color ease-in;
`;


export const GamersContainer = styled.div`
  position: relative;
  height: 170px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export const GamerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: calc(170px / 4);
  width: 100%;
  margin-bottom: 20px;
  margin-top: 5px;
`;

export const GamerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 50%;
`;

export const AddButton = styled.div`
  background-color: ${({ theme }) =>
    theme.text === "rgb(255, 255, 255)"
      ? "rgb(51, 57, 63)"
      : theme.background1};
  width: 20px;
  height: 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.text};
  &:active {
    transform: scale(0.9);
  }
  transition: 0.4s background-color ease-in, 0.4s color ease-in;
`;

export const AvatarOfGamerContainer = styled.div`
  position: relative;
  height: 20px;
  width: 30px;
`;

export const AvatarOfGamer = styled.div<{
  background_color: string;
  left: string;
  
}>`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.background_color};
  left: ${(props) => props.left};
  display: flex;
  justify-content: center;
  align-items: center;
`;
