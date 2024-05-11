
import Header from "./Header";
import ImageAvatar from "./ImageAvatar";
import { CentralSectionStyled, Timer } from "./StyledComponents";
import UserAvatar from "./UserAvatar";

//redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../Redux/store";


const CentralSection = () => {
  const usersJoinedList = useSelector((state:RootState)=>state.usersJoined.users)
	
	return (
    <CentralSectionStyled>
      <UserAvatar top="94px" left="89px" />
      {usersJoinedList.map((user, index)=>(<UserAvatar user={user} emoji={index%2===0} top={user.positionTop } left={user.positionLeft} />))}
      
      <Header />
      <Timer>
        <strong>11 : 45</strong>
      </Timer>
      <ImageAvatar />
    </CentralSectionStyled>
  );
};

export default CentralSection;
