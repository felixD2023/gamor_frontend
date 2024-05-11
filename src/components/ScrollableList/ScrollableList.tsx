import { GameType } from "../../Redux/gamesSlice";
import Game from "../../pages/HomePage/components/RightSection/Game";
import {
  Blur,
  ScrollableListContainer,
  ScrollableListStyled,
} from "./StyledComponents";

interface ScrollableListProps {
  list: any;
  width: string;
  height: string;
  itemsType?: string;
}

const ScrollableList = (props: ScrollableListProps) => {
 
  return (
    <ScrollableListContainer width={props.width} height={props.height}>
      <ScrollableListStyled>
        {(props.itemsType==="games")?
        props.list.map((game:GameType)=>(<Game key={game.name} name={game.name} />))
        :props.list}
        
      </ScrollableListStyled>
      <Blur />
    </ScrollableListContainer>
  );
};

export default ScrollableList;
