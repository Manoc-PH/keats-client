import { View } from "react-native";
// Components
import {
  Image,
  TextSkeleton,
  Body,
  SubHeadline2,
  ImageCard,
} from "@app/views/components";
// Assets
import { StarIcon } from "@app/assets/icons";
// Constants
import { FONT_SIZES, SPACING } from "@app/common/constants/styles";
// Theme
import themeColors from "@app/common/theme";
import { styles } from "./styles";

export default function RecipeCard(props) {
  // Props
  const { name, name_owner, image_url, rating, rating_count, loading } = props;

  return (
    <ImageCard
      image_url={image_url}
      content={
        <>
          {loading && (
            <View style={{ ...styles.contentContainer, gap: SPACING.Small }}>
              <TextSkeleton
                fontSize={FONT_SIZES.Regular}
                style={styles.loader}
              />
              <TextSkeleton
                fontSize={FONT_SIZES.Small}
                style={styles.smallLoader}
              />
            </View>
          )}
          {!loading && (
            <View style={styles.contentContainer}>
              {name ? (
                <Body style={styles.name}>{name}</Body>
              ) : (
                <Body style={styles.noNameRecipe}>No Name</Body>
              )}
              {name_owner && (
                <View style={styles.row}>
                  <SubHeadline2>By {name_owner}</SubHeadline2>
                </View>
              )}
              {rating && rating_count > 0 ? (
                <View style={styles.row}>
                  <StarIcon
                    width={FONT_SIZES.Small}
                    height={FONT_SIZES.Small}
                  />
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
                  <SubHeadline2 style={styles.noNameRecipe}>
                    No Rating
                  </SubHeadline2>
                </View>
              )}
            </View>
          )}
        </>
      }
    />
  );
}
