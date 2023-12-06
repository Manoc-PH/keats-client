import { View } from "react-native";

import { styles } from "./styles";
import { StarGradientIcon } from "@app/assets/icons";

export default function StarRating(props) {
  // Props
  const { rating } = props;

  return (
    <View style={styles.wrapper}>
      {Array.from({ length: 5 }, (item, index) => (
        <StarGradientIcon
          key={index}
          id={"f" + index}
          percent={rating - index > 1 ? 1 : rating - index}
        />
      ))}
    </View>
  );
}
