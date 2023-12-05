import { Dimensions, View } from "react-native";
// Icons
import { ImageIcon } from "@app/assets/icons";
// Components
import {
  Image,
  TextSkeleton,
  Title1,
  Body,
  SubHeadline2,
} from "@app/views/components";

import { styles } from "./styles";

export default function RecipeCard(props) {
  // Props
  const { name, image_url, rating, rating_count } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageContainer}>
        <Image src={image_url} />
      </View>
      <View style={styles.contentContainer}>
        {name ? (
          <Body>{name}</Body>
        ) : (
          <Body style={styles.noNameRecipe}>No Name</Body>
        )}
        {rating ? (
          <Body>{rating}</Body>
        ) : (
          <SubHeadline2 style={styles.noNameRecipe}>No Rating</SubHeadline2>
        )}
      </View>
    </View>
  );
}
