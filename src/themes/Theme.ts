interface Theme {
  background1: string;
  background2: string;
  background3: string;
  selected: string;
  notSelected: string;
  text: string;
  highlight: string;
  avatarsBackground: string;
}

const lightTheme: Theme = {
  background1: "rgb(241, 243, 244)",
  background2: "rgb(248, 251, 252)",
  background3: "rgb(255, 255, 255)",
  selected: "rgb(125, 52, 238)",
  notSelected: "rgb(162, 166, 171)",
  text: "rgb(0, 0, 0)",
  highlight: "rgb(225, 110, 49)",
  avatarsBackground: "rgb(105, 46, 190,0.5)",
};

const darkTheme: Theme = {
  background1: "rgb(27, 32, 40)",
  background2: "rgb(34, 39, 46)",
  background3: "rgb(27, 32, 40)",
  selected: "rgb(254, 136, 68)",
  notSelected: "rgb(162, 166, 171)",
  text: "rgb(255, 255, 255)",
  highlight: "rgb(121, 31, 235)",
  avatarsBackground: "rgb(236, 116, 46,0.5)",
};

const Themes = {
  light: lightTheme,
  dark: darkTheme,
  colorList: [
    "rgb(251, 142, 165)",
    "rgb(237, 214, 132)",
    "rgb(102, 150, 255)",
    "rgb(134, 204, 159)",
    "rgb(255, 188, 150)",
    "rgb(188, 148, 243)",
    "rgb(213, 128, 47)",
    "rgb(34, 148, 208)",
    "rgb(136, 179, 55)",
    "rgb(218, 152, 187)",
    "rgb(199, 204, 40)",
    "rgb(116, 115, 172)",
  ],
};
export default Themes;
export const colorList = Themes.colorList
