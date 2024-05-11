import { LinkActive,LinkActiveDecorator,BlankSpaceLinkActiveDecorator,Link } from "./StyledComponents"

//react-router-dom
import { NavLink } from "react-router-dom";



interface NavBarLinkProps {
  to: string;
  name: string;
}


const NavBarLink = (props: NavBarLinkProps) => {
  return (
    <NavLink
    
      to={props.to}
      style={{
        textDecoration: "None",
        marginRight:"15px"
      }}
    >
      {({ isActive }) =>
        isActive ? (
          <LinkActive>
            <LinkActiveDecorator />
            <BlankSpaceLinkActiveDecorator />
            {props.name}
          </LinkActive>
        ) : (
          <Link>{props.name}</Link>
        )
      }
    </NavLink>
  );
};

export default NavBarLink;
