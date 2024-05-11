//styled-components
import { styled } from "styled-components";

export const LeftSectionStyled = styled.div`
  width: 33.33%;
	height: 500px;
  border-radius: 15px 0px 0px 15px;
  display: flex;
  flex-direction:column;
  align-items: center;

`;

export const BackgroundCircle = styled.div<{left:string, top:string}>`
  position: relative;
  border: 0.5px solid ${({ theme }) => theme.highlight};
  width: 175px;
  height: 80px;
	border-radius:50%;
  transform: rotate(-10deg);
	left:${(props)=>props.left};
	top:${(props)=>props.top};
	transition: 0.4s border-color ease-in;
`;
export const BackgroundBlankSpace = styled.div<{left:string, top:string}>`
	position: relative;
	background-color:${({theme})=>theme.background2};
	left:${(props)=>props.left};
	top:${(props)=>props.top};
	width:80px;
	height:100px;
	z-index:1;
	transition: 0.4s background-color ease-in;

`

export const BigText = styled.div<{ highlighted?: boolean }>`
  font-size: 36px;
  color: ${(props) =>
    props.highlighted
      ? ({ theme }) => theme.highlight
      : ({ theme }) => theme.text};
  transition: 0.4s color ease-in;
`;

export const SmallText = styled.span<{ highlighted?: boolean }>`
  color: ${(props) =>
    props.highlighted ? ({ theme }) => theme.text : "gray"};
  height: 30px;
  font-size: 13px;
  position: relative;
  transition: 0.4s color ease-in;
`;

export const HighlightedSmallText = styled.div`
  position: absolute;
  right: 26px;
  width: 18px;
  height: 8px;
  border-left: 10px solid ${({ theme }) => theme.selected};
  border-bottom: 4px solid ${({ theme }) => theme.selected};
  border-radius: 0px 8px;
  transform: rotate(0.47turn) skew(75deg);
  transition: 0.4s border-color ease-in;
`;
