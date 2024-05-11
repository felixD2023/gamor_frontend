//styled-components
import { styled } from "styled-components";

export const ButtonTypeText = styled.div`
  text-align: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  font-size: small;
  margin: 0px 25px;
  &:hover {
    cursor: pointer;
  }
  user-select: none;
  transition: 0.4s color ease-in;
`;

export const ButtonTypeRounded1 = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: small;
  display: inline-block;
  padding: 14px 20px;
  background: black;
  color: white;
  border-radius: 30px;
  border: 0.5px solid ${({ theme }) => theme.notSelected};
  &:hover {
    cursor: pointer;
  }
  &:active {
    transform:scale(0.98);
  }
  user-select: none;
  box-shadow: 5px 15px 53px 0px rgba(0, 0, 0, 0.3);
  transition: 0.4s background-color ease-in, 0.4s color ease-in;
`;

export const ButtonTypeRounded2 = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: small;
  display: inline-block;
  padding: 14px 20px;
  background-color: ${({ theme }) =>
    theme.text == "rgb(255, 255, 255)" ? "rgb(51, 57, 63)" : theme.background3};
  border-radius: 30px;
  cursor: pointer;
  &:active {
    transform:scale(0.98);
  }
  user-select: none;
  box-shadow: 5px 15px 53px 0px rgba(0, 0, 0, 0.3);
  transition: 0.4s background-color ease-in, 0.4s color ease-in;
`;

export const ButtonTypeSquare = styled.div`
  color: ${({ theme }) => theme.background2};
  font-size: small;
  display: flex;
  justify-content:center;
  align-items:center;
  height:50px;
  width:240px;
  background-color: ${({ theme }) =>theme.text};
  border-radius:6px;
  box-shadow: 0px 23px 47px 0px rgba(0,0,0,0.2);
  cursor:pointer;
  &:active {
    transform:scale(0.98);
  }
  transition: 0.4s background-color ease-in, 0.4s color ease-in; 
    
`;
