//styled-components
import { styled, ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar/NavBar";

//Theme
import Themes from "./themes/Theme";

//redux
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store.ts";
import HomePage from "./pages/HomePage/HomePage.tsx";
import { Route, Routes } from "react-router-dom";

const AppStyled = styled.div`
  background-color: ${({ theme }) => theme.background1};
  width: 100%;
  height: 100%;
  transition:0.4s all ease-in;
  transition-property: background-color, color, left;
  user-select:none;
`;

const App = () => {
  const theme = useSelector((state: RootState) => state.theme.mode)

  return (

    <ThemeProvider theme={theme === "light" ? Themes.light : Themes.dark}>
      <AppStyled>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
            
          <Route path="party/" element={<HomePage />}/>
            
          <Route path="premium/" element={<HomePage />}/>
            
          <Route path="stream/" element={<HomePage />}/>
          <Route path="/*" element={<HomePage />}/>

        </Routes>
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
