import themeColors from "../theme";
import { Platform } from "react-native";

export const SIZES = {
  Tiny: "Tiny",
  Small: "Small",
  Regular: "Regular",
  Medium: "Medium",
  Large: "Large",
  ExtraLarge: "ExtraLarge",
  Huge: "Huge",
};
export const FONT_SIZES = {
  Tiny: 12,
  Small: 14,
  Regular: 18,
  Medium: 20,
  Large: 22,
  ExtraLarge: 28,
  Huge: 34,
};
export const FONT_WEIGHTS = {
  Light: Platform.OS === "ios" ? "200" : "Outfit_200ExtraLight",
  Regular: Platform.OS === "ios" ? "300" : "Outfit_300Light",
  Medium: Platform.OS === "ios" ? "400" : "Outfit_400Regular",
  SemiBold: Platform.OS === "ios" ? "500" : "Outfit_500Medium",
  Bold: Platform.OS === "ios" ? "600" : "Outfit_600SemiBold",
};
export const BTN_VARIANTS = {
  primary: "primary",
  outlined: "outlined",
  transparent: "transparent",
  tertiary: "tertiary",
};
export const NUTRIENT_COLOR_MAPPING = {
  calories: themeColors.primary,
  protein: themeColors.blue,
  carbs: themeColors.yellow,
  fats: themeColors.red,
};
export const SPACING = {
  Tiny: 4,
  Small: 8,
  Regular: 12,
  Medium: 16,
  Large: 20,
  ExtraLarge: 24,
  Huge: 32,
};
export const ZINDEX = {
  basicComponent: 1,
  modal: 11,
  header: 10,
};

export const RADIUS = {
  Tiny: 2,
  Small: 4,
  Regular: 8,
  Medium: 12,
  Large: 16,
  ExtraLarge: 20,
  Huge: 24,
};
