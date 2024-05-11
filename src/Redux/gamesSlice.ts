import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface GameType {
  name: string;
  category?: string;
  platform?: string;
  yearCreation?: number;
  numbersPlayers?: number;
}

export interface GamesState {
  gamesList: GameType[];
  gamesSelected: GameType[];
}

export interface GamesFilterType {
  category?: string;
  platform?: string;
  yearCreation: number;
  numbersPlayers: number;
}

const initialState: GamesState = {
  gamesList: [
    {
      name: "Fortnite",
      category: "Shooter Games",
      platform: "Streams",
      yearCreation: 2010,
      numbersPlayers: 20,
    },
    {
      name: "COD Warzone",
      category: "Shooter Games",
      platform: "Party",
      yearCreation: 2010,
      numbersPlayers: 20,
    },{
      name: "Age of Empire",
      category: "Strategy Games",
      platform: "Party",
      yearCreation: 2023,
      numbersPlayers: 60,
    },{
      name: "Star Craft",
      category: "Strategy Games",
      platform: "Party",
      yearCreation: 2023,
      numbersPlayers: 60,
    },{
      name: "The Blue Horse",
      category: "Fantasy Games",
      platform: "Matches",
      yearCreation: 2023,
      numbersPlayers: 60,
    },{
      name: "WOW",
      category: "Fantasy Games",
      platform: "Matches",
      yearCreation: 2023,
      numbersPlayers: 20,
    },{
      name: "Super Mario",
      category: "Arcade Games",
      platform: "Matches",
      yearCreation: 2023,
      numbersPlayers: 20,
    },{
      name: "Tetrix",
      category: "Arcade Games",
      platform: "Streams",
      yearCreation: 2014,
      numbersPlayers: 20,
    },{
      name: "The Last Samuray",
      category: "Adventure Games",
      platform: "Streams",
      yearCreation: 2014,
      numbersPlayers: 60,
    },{
      name: "God of War",
      category: "Adventure Games",
      platform: "Streams",
      yearCreation: 2014,
      numbersPlayers: 60,
    },{
      name: "FIFA",
      category: "Sports Games",
      platform: "Party",
      yearCreation: 2014,
      numbersPlayers: 60,
    },{
      name: "Nascar Rumble",
      category: "Sports Games",
      platform: "Party",
      yearCreation: 2007,
      numbersPlayers: 20,
    },{
      name: "GTA V",
      category: "Action Games",
      platform: "Matches",
      yearCreation: 2007,
      numbersPlayers: 20,
    },{
      name: "Taken V",
      category: "Action Games",
      platform: "Matches",
      yearCreation: 2007,
      numbersPlayers: 20,
    },{
      name: "Sniper Ghost Warrior",
      category: "Shooter Games",
      platform: "Streams",
      yearCreation: 2007,
      numbersPlayers: 60,
    },{
      name: "Age of Empire 2",
      category: "Strategy Games",
      platform: "Streams",
      yearCreation: 2007,
      numbersPlayers: 20,
    },{
      name: "Baseball",
      category: "Sports Games",
      platform: "Streams",
      yearCreation: 2010,
      numbersPlayers: 60,
    },{
      name: "GTA Liberty City",
      category: "Action Games",
      platform: "Party",
      yearCreation: 2010,
      numbersPlayers: 20,
    },{
      name: "Mountain Bike",
      category: "Sports Games",
      platform: "Party",
      yearCreation: 2010,
      numbersPlayers: 60,
    },{
      name: "The Red Line",
      category: "Shooter Games",
      platform: "Matches",
      yearCreation: 2010,
      numbersPlayers: 20,
    },
  ],
  gamesSelected: [],
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    searchGames: (state, action: PayloadAction<GamesFilterType>) => {
      const tempGamesSelected: GameType[] = [];

      state.gamesList.map((game) => {
        if (
          (game.category === action.payload.category ||
            action.payload.category === "All Categories") &&
          game.platform === action.payload.platform &&
          game.numbersPlayers === action.payload.numbersPlayers &&
          (game.yearCreation === action.payload.yearCreation ||
            action.payload.yearCreation === 0)
        ) {
          tempGamesSelected.push(game);
        }
      });
      state.gamesSelected = tempGamesSelected;
    },
  },
});

export const { searchGames } = gamesSlice.actions;

export default gamesSlice.reducer;
