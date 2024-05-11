import { useState } from "react";
import {
  GameContainer,
  Divider,
  SearchingGameContainer,
  TittleStyled,
  SlideIcon,
  FilterContainer,
  GamersContainer,
  YearContainer,
  YearInput,
  NumberOfPlayersSelectorContainer,
  SignalSelector,
} from "./StyledComponents";
import ScrollableList from "../../../../components/ScrollableList/ScrollableList";
import Gamer from "./Gamer";
import Button from "../../../../components/button/Button";

//colors
import { colorList } from "../../../../themes/Theme";

//icon
import "primeicons/primeicons.css";

//redux
import { GamesFilterType, searchGames } from "../../../../Redux/gamesSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../Redux/store";
import { CategoryType } from "../../../../Redux/categoriesSlice";
import { PlatformType } from "../../../../Redux/platformsSlice";

//images AvatarOfGamer
import avatar1 from "../../../../assets/Images/AvatarsOfGamers/emojisky.com-213896.png";
import avatar2 from "../../../../assets/Images/AvatarsOfGamers/emojisky.com-241870.png";
import avatar3 from "../../../../assets/Images/AvatarsOfGamers/emojisky.com-241894.png";
import avatar4 from "../../../../assets/Images/AvatarsOfGamers/emojisky.com-241897.png";
import avatar5 from "../../../../assets/Images/AvatarsOfGamers/emojisky.com-241939.png";
import avatar7 from "../../../../assets/Images/AvatarsOfGamers/emojisky.com-241987.png";
import avatar8 from "../../../../assets/Images/AvatarsOfGamers/emojisky.com-241990.png";
import avatar9 from "../../../../assets/Images/AvatarsOfGamers/emojisky.com-288854.png";
import avatar10 from "../../../../assets/Images/AvatarsOfGamers/emojisky.com-3144982.png";
import avatar12 from "../../../../assets/Images/AvatarsOfGamers/emojisky.com-89987.png";

const listGamers: React.ReactNode[] = [
  <Gamer
    key={"01"}
    backgroundColor={[colorList[0], colorList[1]]}
    images={[avatar1, avatar12]}
    name="Dr Team"
    number={1}
  />,
  <Gamer
    key={"02"}
    backgroundColor={[colorList[2], colorList[3]]}
    images={[avatar2, avatar7]}
    name="Mya Plays"
    number={2}
  />,
  <Gamer
    key={"03"}
    backgroundColor={[colorList[4], colorList[5]]}
    images={[avatar3, avatar8]}
    name="Keoxer"
    number={3}
  />,
  <Gamer
    key={"04"}
    backgroundColor={[colorList[6], colorList[7]]}
    images={[avatar4, avatar9]}
    name="Nickmerc"
    number={4}
  />,
  <Gamer
    key={"05"}
    backgroundColor={[colorList[8], colorList[9]]}
    images={[avatar5, avatar10]}
    name="Inventor"
    number={5}
  />,
];

const SearchingGame = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [year, setYear] = useState("");
  const [numberOfPlayers, setNumberOfPlayers] = useState(20);
  const [gameMessage, setGameMessage] = useState("Search a game!");
  const games = useSelector((state: RootState) => state.games.gamesSelected);
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );
  const platforms = useSelector(
    (state: RootState) => state.platforms.platforms
  );
  const dispatch = useDispatch();

  const searchNow = () => {
    const category: CategoryType | undefined = categories.find(
      (category) => category.isActive
    );
    const platform: PlatformType | undefined = platforms.find(
      (platform) => platform.isActive
    );

    const filter: GamesFilterType = {
      category: category?.name,
      platform: platform?.name,
      numbersPlayers: numberOfPlayers,
      yearCreation: Number(year),
    };

    dispatch(searchGames(filter));
    setGameMessage("Not Found!");
    setOpenFilter(false);
  };

  return (
    <SearchingGameContainer>
      <GameContainer>
        {games.length > 0 ? (
          <ScrollableList
            list={games}
            itemsType="games"
            height="50px"
            width="100%"
          />
        ) : (
          <TittleStyled style={{ marginLeft: "30px" }}>
            <strong>{gameMessage}</strong>
          </TittleStyled>
        )}

        <SlideIcon
          onClick={() => setOpenFilter(!openFilter)}
          className="pi pi-sliders-h"
        />
        <FilterContainer open={openFilter}>
          <TittleStyled style={{ marginTop: "5px" }}>
            <strong>Filter</strong>
          </TittleStyled>
          <div
            style={{
              height: "80%",
              width: "90%",
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              justifyContent: "center",
            }}
          >
            <YearContainer>
              <TittleStyled>
                <strong>Year of creation:</strong>
              </TittleStyled>
              <YearInput
                value={year}
                onChange={(e) =>
                  (Number(e.target.value) || e.target.value === "") &&
                  setYear(e.target.value)
                }
                maxLength={4}
              />
            </YearContainer>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <TittleStyled>
                <strong>Number of players:</strong>
              </TittleStyled>
              <NumberOfPlayersSelectorContainer>
                <TittleStyled
                  style={{ cursor: "pointer" }}
                  onClick={() => setNumberOfPlayers(20)}
                >
                  <strong>20</strong>
                </TittleStyled>
                <TittleStyled
                  style={{ cursor: "pointer" }}
                  onClick={() => setNumberOfPlayers(60)}
                >
                  <strong>60</strong>
                </TittleStyled>
                <SignalSelector number={numberOfPlayers} />
              </NumberOfPlayersSelectorContainer>
            </div>
          </div>
        </FilterContainer>
      </GameContainer>
      <Divider />

      <GamersContainer>
        <ScrollableList list={listGamers} height="100%" width="100%" />
      </GamersContainer>
      <Button onClick={() => searchNow()} variant="square" text="Search Now" />
    </SearchingGameContainer>
  );
};

export default SearchingGame;
