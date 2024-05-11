import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface UserJoinedType {
  image?: string;
  positionTop:string;
  positionLeft:string
}

export interface UsersJoinedList {
  users: UserJoinedType[];
}

const initialState: UsersJoinedList = {
  users: [],
};

export const usersJoinedSlice = createSlice({
  name: "usersJoined",
  initialState,
  reducers: {
    addUserJoined: (state, action: PayloadAction<string>) => {
      if(state.users.findIndex(u=>u.image === action.payload)===-1){
        state.users.push({image:action.payload,positionTop: `${Math.floor(Math.random()*400)+30}px` ,positionLeft:`${Math.floor(Math.random()*240)+30}px`})
      }
    },
  },
});

export const {addUserJoined} = usersJoinedSlice.actions;

export default usersJoinedSlice.reducer
