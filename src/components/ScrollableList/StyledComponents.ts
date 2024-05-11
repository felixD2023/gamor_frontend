import { styled } from "styled-components";

export const ScrollableListStyled = styled.div`
  position: relative;
  width: 100%;
  max-height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 5px;
  }

  &::-webkit-scrollbar-button:increment {
    display: none;
  }

  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
    &:hover{
      background-color:#757575;
    }
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

export const ScrollableListContainer = styled.div<{
  width: string;
  height: string;
}>`
  width: ${(props) => props.width};
  max-height: ${(props) => props.height};
  color: ${({ theme }) => theme.text};
  transition: 0.4s color ease-in;
  display: flex;
`;

export const Blur = styled.div`
  

  @property --Up {
    syntax: '<color>';
    initial-value: rgb(0, 0, 0,0.0);
    inherits: false;
  }

  @property --Down {
    syntax: '<color>';
    initial-value: rgb(27, 32, 40,1);
    inherits: false;
  }

  --Up: ${({ theme }) =>theme.text === "rgb(255, 255, 255)"? "rgb(0, 0, 0,0.0)" : "rgb(255, 255, 255, 0.0)"};
  --Down: ${({ theme }) =>theme.text === "rgb(255, 255, 255)" ? "rgb(27, 32, 40,1)" : "rgb(255, 255, 255,1)"};

  position: absolute;
  bottom: 0px;
  height: 40%;
  width: 100%;
  
  background: linear-gradient(var(--Up), var(--Down));
  transition:  0.4s --Up ease-in, 0.4s --Down ease-in;
  pointer-events: none;
  
`;

/*

*/
