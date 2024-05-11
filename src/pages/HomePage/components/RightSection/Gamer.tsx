import {
  AddButton,
  AvatarOfGamer,
  AvatarOfGamerContainer,
  GamerInfo,
  GamerStyled,
  NumberStyed,
  TittleStyled,
} from "./StyledComponents";

//redux
import { useDispatch } from "react-redux";
import { addUserJoined } from "../../../../Redux/usersJoinedSlice";

interface GamerProps {
  number: number;
  name: string;
  images: string[];
	backgroundColor:string[];
}

const Gamer = (props: GamerProps) => {
  const dispatch = useDispatch()
  return (
    <GamerStyled>
      <GamerInfo>
        <div style={{ display: "flex", alignItems: "center" }}>
          <NumberStyed list={true}>{props.number}</NumberStyed>
          <TittleStyled style={{ marginLeft: "5px" }}>
            <strong>{props.name}</strong>
          </TittleStyled>
        </div>
        <AvatarOfGamerContainer>
          <AvatarOfGamer left="15px" background_color={props.backgroundColor[0]}>
            <img height={"15px"} src={props.images[0]} />
          </AvatarOfGamer>
          <AvatarOfGamer left="0px" background_color={props.backgroundColor[1]}>
            <img height={"17px"} src={props.images[1]} />
          </AvatarOfGamer>
        </AvatarOfGamerContainer>
      </GamerInfo>
      <AddButton onClick={()=>dispatch(addUserJoined(props.images[1]))}>+</AddButton>
    </GamerStyled>
  );
};

export default Gamer;
