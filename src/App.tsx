//styled-components
import { styled, ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar/NavBar";

//Theme
import Themes from "./themes/Theme";

//redux
import { useSelector } from "react-redux";
import { RootState } from "./Redux/store.ts";
import { Outlet} from "react-router-dom";

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
        <Outlet/>
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
