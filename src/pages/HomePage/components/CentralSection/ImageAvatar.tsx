//imagen
import ImagenFortnite from "../../../../assets/Images/actor.png";
import Background from "./Background";
import { AvatarImage } from "./StyledComponents";

const ImageAvatar = () => {
  return (
    <div style={{ height: "330px", width:"100%" }}>
      <div style={{ position: "absolute" }}>
        <Background />
        <div
          style={{
            zIndex: 2,
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <AvatarImage src={ImagenFortnite}  />
        </div>
      </div>
    </div>
  );
};

export default ImageAvatar;
