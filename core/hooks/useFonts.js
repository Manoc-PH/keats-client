import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    "Montserrat-Black": require("../../assets/fonts/Montserrat-Black.tff"),
    "Montserrat-BlackItalic": require("../../assets/fonts/Montserrat-BlackItalic.tff"),
    "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.tff"),
    "Montserrat-BoldItalic": require("../../assets/fonts/Montserrat-BoldItalic.tff"),
    "Montserrat-ExtraBold": require("../../assets/fonts/Montserrat-ExtraBold.tff"),
    "Montserrat-ExtraBoldItalic": require("../../assets/fonts/Montserrat-ExtraBoldItalic.tff"),
    "Montserrat-ExtraLight": require("../../assets/fonts/Montserrat-ExtraLight.tff"),
    "Montserrat-ExtraLightItalic": require("../../assets/fonts/Montserrat-BoldItalic.tff"),
    "Montserrat-Italic": require("../../assets/fonts/Montserrat-Italic.tff"),
    "Montserrat-Light": require("../../assets/fonts/Montserrat-Light.tff"),
    "Montserrat-LightItalic": require("../../assets/fonts/Montserrat-LightItalic.tff"),
    "Montserrat-Medium": require("../../assets/fonts/Montserrat-Medium.tff"),
    "Montserrat-MediumItalic": require("../../assets/fonts/Montserrat-MediumItalic.tff"),
    "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.tff"),
    "Montserrat-SemiBold": require("../../assets/fonts/Montserrat-SemiBold.tff"),
    "Montserrat-SemiBoldItalic": require("../../assets/fonts/Montserrat-SemiBoldItalic.tff"),
    "Montserrat-Thin": require("../../assets/fonts/Montserrat-Thin.tff"),
    "Montserrat-ThinItalic": require("../../assets/fonts/Montserrat-ThinItalic.tff"),
    "Inconsolata-Black": require("../../assets/fonts/Inconsolata-Black.tff"),
    "Inconsolata-Bold": require("../../assets/fonts/Inconsolata-Bold.tff"),
    "Inconsolata-ExtraBold": require("../../assets/fonts/Inconsolata-ExtraBold.tff"),
    "Inconsolata-ExtraLight": require("../../assets/fonts/Inconsolata-ExtraLight.tff"),
    "Inconsolata-Light": require("../../assets/fonts/Inconsolata-Light.tff"),
    "Inconsolata-Medium": require("../../assets/fonts/Inconsolata-Medium.tff"),
    "Inconsolata-Regular": require("../../assets/fonts/Inconsolata-Regular.tff"),
    "Inconsolata-SemiBold": require("../../assets/fonts/Inconsolata-SemiBold.tff"),
  });
