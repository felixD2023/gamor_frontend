import { BackgroundBlankSpace, BackgroundCircle } from "./StyledComponents";

const Background = () => {
  return (
    <div style={{ position: "relative", zIndex:1 }}>
      <div style={{ position: "absolute" }}>
        <BackgroundBlankSpace left="30px" top="-7.7px" />
        <BackgroundCircle left="0px" top="-85px" />
        <BackgroundCircle left="0px" top="-130px" />
        <BackgroundCircle left="0px" top="-175px" />
      </div>
    </div>
  );
};

export default Background;
