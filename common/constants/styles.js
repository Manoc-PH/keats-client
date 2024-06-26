import themeColors from "../theme";
import { PixelRatio } from "react-native";

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
  Regular: 16,
  Medium: 18,
  Large: 22,
  ExtraLarge: 28,
  Huge: 34,
};
export const FONT_FAMILY = {
  Light: "Outfit_200ExtraLight",
  Regular: "Outfit_300Light",
  Medium: "Outfit_400Regular",
  SemiBold: "Outfit_500Medium",
  Bold: "Outfit_600SemiBold",
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

export const HEADER_SIZE = SPACING.Large * 3 * PixelRatio.getFontScale();
