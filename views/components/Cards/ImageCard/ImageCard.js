import { Pressable, View } from "react-native";
// Components
import Image from "@app/views/components/Basic/Image";
import { styles } from "./styles";

export default function ImageCard(props) {
  // Props
  const {
    image_url,
    content,
    contentStyle,
    imageStyle,
    imageContainerStyle,
    onPress,
  } = props;

  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      <View style={{ ...styles.imageContainer, ...imageContainerStyle }}>
        <Image src={image_url} style={imageStyle} />
      </View>
      <View style={{ ...styles.contentContainer, ...contentStyle }}>
        {content}
      </View>
    </Pressable>
  );
}
