import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './themeSlice'
import usersJoinedReducer from './usersJoinedSlice'
import platformsReducer from './platformsSlice'
import categoriesReducer from './categoriesSlice'
import gamesReducer from './gamesSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        usersJoined:usersJoinedReducer,
        platforms:platformsReducer,
        categories:categoriesReducer,
        games:gamesReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


