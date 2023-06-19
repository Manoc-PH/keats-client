import { Dimensions, View } from "react-native";
// Icons
import { ImageIcon } from "@app/assets/icons";
// Components
import { TextSkeleton, Title1 } from "@app/views/components";

import { styles } from "./styles";
import { FONT_SIZES } from "@app/common/constants/styles";

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
      {username ? (
        <Title1>{username}</Title1>
      ) : (
        <TextSkeleton fontSize={FONT_SIZES.ExtraLarge} />
      )}
    </View>
  );
}
