import { BackgroundBlankSpace, BackgroundCircle } from "./StyledComponents";

const Background = () => {
  return (
    <div style={{ width:"333.33px",zIndex:1}}>
      <div style={{ position: "absolute" }}>
        <BackgroundCircle left="0px" top="170px" rotation="155deg" />
        <BackgroundBlankSpace left="60px" top="50px" rotation="175deg"/>
        <BackgroundCircle left="110px" top="-106px" rotation="155deg" />
        <BackgroundBlankSpace left="167.3px" top="-147px" rotation="176deg"/>
      </div>
    </div>
  );
};

export default Background;
