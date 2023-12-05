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
import StarIcon from "@app/assets/icons/star";
import { FONT_FAMILY, FONT_SIZES } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";

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
          <Body style={styles.name}>{name}</Body>
        ) : (
          <Body style={styles.noNameRecipe}>No Name</Body>
        )}
        {rating && rating_count > 0 ? (
          <View style={styles.row}>
            <StarIcon width={FONT_SIZES.Small} height={FONT_SIZES.Small} />
            <SubHeadline2>
              {rating} {rating_count && `(${rating_count})`}
            </SubHeadline2>
          </View>
        ) : (
          <View style={styles.row}>
            <StarIcon
              width={FONT_SIZES.Small}
              height={FONT_SIZES.Small}
              color={"#00000000"}
              strokeColor={themeColors.backgroundDark}
            />
            <SubHeadline2 style={styles.noNameRecipe}>No Rating</SubHeadline2>
          </View>
        )}
      </View>
    </View>
  );
}
