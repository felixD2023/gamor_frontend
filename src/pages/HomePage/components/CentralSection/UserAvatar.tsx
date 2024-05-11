import { EmojiUserJoined, UserJoined, UserUnjoined } from "./StyledComponents";


//icons
import "primeicons/primeicons.css";

//redux
import { UserJoinedType } from "../../../../Redux/usersJoinedSlice";


interface UserAvatarProps {
  emoji?: boolean;
  user?: UserJoinedType;
  top: string;
  left: string;
}

const UserAvatar = (props: UserAvatarProps) => {
  return (
    <div
      style={{
        position: "absolute",
        top: props.top,
        left: props.left,
        zIndex: 3,
      }}
    >
      {props.user && (
        <UserJoined>
          {props.emoji && (
            <EmojiUserJoined>
              <div className="pi pi-heart-fill" style={{ color: "white" }} />
            </EmojiUserJoined>
          )}
          <img style={{ height: "40px" }} src={props.user.image} />
        </UserJoined>
      )}
      {!props.user && (
        <UserUnjoined>
          <div className="pi pi-user-plus" style={{ color: "white" }} />
        </UserUnjoined>
      )}
    </div>
  );
};

export default UserAvatar;
