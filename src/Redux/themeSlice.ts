import {createSlice} from "@reduxjs/toolkit"

export interface ThemeState{
    mode:string,
}

const initialState: ThemeState={
    mode:"light"
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: (state)=>{
            if(state.mode==="light"){
                state.mode="dark"
            }else{
                state.mode="light"
            }
        }
    }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer

