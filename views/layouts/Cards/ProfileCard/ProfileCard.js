import { Dimensions, View } from "react-native";
// Icons
import { ImageIcon } from "@app/assets/icons";
// Components
import { Title1 } from "@app/views/components";

import { styles } from "./styles";

export default function ProfileCard(props) {
  // Props
  const { username } = props;

  const size = Dimensions.get("window").width / 6;
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageContainer}>
        <ImageIcon height={size} width={size} />
      </View>
      <View style={styles.spacer} />
      <Title1>{username || ""}</Title1>
    </View>
  );
}
