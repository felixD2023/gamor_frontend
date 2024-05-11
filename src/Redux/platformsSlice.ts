import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//emojis
import emoji_party from "../assets/Images/emoji_party.png";
import emoji_matches from "../assets/Images/emoji_matches.png";
import emoji_streams from "../assets/Images/emoji_stream.png";

export interface PlatformType {
  name: string;
  isActive: boolean;
  icon: string;
}

export interface PlatformsState {
  platforms: PlatformType[];
}
const initialState: PlatformsState = {
  platforms: [
    { name: "Party", isActive: true, icon: emoji_party },
    { name: "Matches", isActive: false, icon: emoji_matches },
    { name: "Streams", isActive: false, icon: emoji_streams },
  ],
};

export const platformsState = createSlice({
  name: "platforms",
  initialState,
  reducers: {
    setPlatformActive: (state, action: PayloadAction<string>) => {
      const tempPlatforms: PlatformType[] = [];
      state.platforms.map((platform: PlatformType) => {
        if (platform.name === action.payload) {
          tempPlatforms.push({ ...platform, isActive: true});
        } else {
          tempPlatforms.push({ ...platform, isActive: false});
        }
      });
      state.platforms = tempPlatforms;
    },
  },
});

export const { setPlatformActive } = platformsState.actions;

export default platformsState.reducer;
