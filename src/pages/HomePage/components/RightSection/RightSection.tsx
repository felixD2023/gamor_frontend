import ChoosePlatform from "./ChoosePlatform";
import SearchingGame from "./SearchingGame";
import { RightSectionContainer, RightSectionStyled } from "./StyledComponents";
import Tittle from "./Tittle";

function RightSection() {
  return (
    <RightSectionStyled>
      <RightSectionContainer>
        <div>
          <Tittle number="01" text="Choose Platform" />
          <ChoosePlatform/>
        </div>
        <div>
          <Tittle number="02" text="Searching Game" />
          <SearchingGame/>
        </div>
      </RightSectionContainer>
    </RightSectionStyled>
  );
}

export default RightSection;
