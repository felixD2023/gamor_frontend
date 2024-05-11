//styled-components
import { styled } from "styled-components";

export const MainSectionStyled = styled.div`
    width: 1000px;
    height: 500px;
    background-color:${({theme})=>theme.background2};
    margin:auto;
    border-radius: 15px;
    display:flex;
    box-shadow: 0px 28px 42px -18px rgba(0,0,0,0.05);
    transition: 0.4s background-color ease-in;
`;
