import { useNavigate } from "react-router-dom";
import Button from "../../../../components/button/Button";
import Background from "./Background";
import {
  LeftSectionStyled,
  BigText,
  SmallText,
  HighlightedSmallText,
} from "./StyledComponents";

const LeftSection = () => {
  const navigate = useNavigate();

  const singIn = () => {
    navigate("/login")
  };

  return (
    <LeftSectionStyled>
      <div style={{width:"100%", height:"200px", marginTop:"100px",display: "flex", justifyContent:"center"}}>
        <div style={{ position: "absolute", display: "flex" }}>
          <Background />
          <div style={{ zIndex: 2 }}>
            <BigText><strong>start</strong></BigText>
            <BigText highlighted={true}><strong>streaming</strong></BigText>
            <BigText><strong>games</strong></BigText>
            <BigText><strong>differently</strong></BigText>
          </div>
        </div>
      </div>

      <div style={{width:"70%",display: "flex", margin:"20px 0px"}}>
        <SmallText>gamor now has </SmallText>
        <SmallText highlighted={true}>
          <strong>&nbsp;stream party&nbsp;</strong>
          <HighlightedSmallText />
        </SmallText>
        <SmallText> platform</SmallText>
      </div>

      <div style={{width:"70%",display: "flex", justifyContent:"space-evenly", alignItems:"center", zIndex:3}}>
        <Button text="Create account" color="white" variant="rounded"/>
        <Button onClick={()=>singIn()} text="Sing in" variant="text" />
      </div>

    </LeftSectionStyled>
  );
};

export default LeftSection;
