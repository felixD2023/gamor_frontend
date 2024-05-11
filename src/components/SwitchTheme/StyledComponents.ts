//styled-components
import { styled } from "styled-components";

export const SwitchContainer = styled.div`
  width:46px;
  height: 23px;
  background-color: ${({ theme }) => theme.selected};
  display:flex-box;
  border-radius: 2em;
	position:relative;
  &:hover{
    cursor:pointer;
  }
  
`;

export const SwitchBall = styled.div<{position_x:boolean,}>`
  width: 17px;
  height: 17px;
  background-color: ${({ theme }) => theme.background1};
	border-radius: 50%;
	position:absolute;
	top:3px;
	left:${({position_x})=>!position_x?"2.5px":"26px"};
  transition:0.2s all ease-in;
  display:flex;
  justify-content:center;
  align-items:center;
`;
