import { styled } from "styled-components";

export const CategorySectionStyled = styled.div`
  width: 1000px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  margin: auto;
  padding: 100px 0px 50px 0px;
`;

export const HeaderCategories = styled.div`
  height: 24px;
  color: ${({ theme }) => theme.text};
  font-size: 24px;
`;

export const CategoriesContainer = styled.div`
  width: 1000px;
  height: 230px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CategoryContainerStyled = styled.div<{ active?: boolean }>`
  position: relative;
  width: calc(970px / 4);
  height: calc(230px / 2);
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background2};
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const CategoryName = styled.div`
  font-size: 14px;
  height: 14px;
`;

export const ReferenceText = styled.div`
  font-size: 12px;
  height: 12px;
  color: ${({ theme }) => theme.notSelected};
`;

export const ReferenceNumber = styled.div`
  position: relative;
  color: ${({ theme }) => theme.notSelected};
  font-size: 12px;
  width: 12px;
  height: 14px;
`;

export const Decorator = styled.div<{ color: string }>`
  position: absolute;
  top: -5px;
  left: -5px;
  width: 12px;
  height: 12px;
  font-size: 12px;
  color: ${(props) => props.color};
  transform: rotate(10deg);
`;

export const ImageBackground = styled.div<{ image: string; active: boolean }>`
  position: absolute;
  z-index: 1;
  width: calc(970px / 4);
  height: calc(230px / 2);
  border-radius: 8px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: 0.4s opacity ease-in;
`;

export const ColoredBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.highlight};
  opacity: 0.5;
`;
/*(theme.text==="rgb(255, 255, 255)")?"rgb(121, 31, 235)":"rgb(225, 110, 49)"*/
