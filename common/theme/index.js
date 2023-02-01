import { Appearance } from "react-native";
import lightColors from "./light";

const colorScheme = Appearance.getColorScheme();
let themeColors = lightColors;

// Use dark color scheme
if (colorScheme === "dark") {
}
if (colorScheme === "light") themeColors = lightColors;

export default themeColors;
