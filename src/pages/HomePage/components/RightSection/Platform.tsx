import { PlatformContainer, PlatformEmojiContainer, PlatformTextContainer } from "./StyledComponents";

//redux
import { setPlatformActive } from "../../../../Redux/platformsSlice";
import {useDispatch} from 'react-redux'

interface PlatformProps {
  active: boolean;
  text: string;
  icon: string;
}

const Platform = (props: PlatformProps) => {
    const dispatch=useDispatch()

  return (
    <PlatformContainer onClick={()=>dispatch(setPlatformActive(props.text))} active={props.active}>
      <PlatformEmojiContainer active={props.active}>
        <img width={"16px"} height={"16px"} src={props.icon} />
      </PlatformEmojiContainer>
      <PlatformTextContainer active={props.active}>{props.text}</PlatformTextContainer>
    </PlatformContainer>
  );
};

export default Platform;
