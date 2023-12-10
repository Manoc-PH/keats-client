import { Image } from "react-native";

export const AdImage = function (props) {
  return <Image source={require("./ad.png")} {...props} />;
};
