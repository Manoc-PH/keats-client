import { View } from "react-native";
// Constants
import { FONT_SIZES, SPACING } from "@app/common/constants/styles";
// Icons
import {
  LargeHeartIcon,
  LargeServingIcon,
  LargeTimeIcon,
} from "@app/assets/icons";
// Components
import {
  StarRating,
  SubHeadline1,
  SubHeadline2,
  TextSkeleton,
  Title2,
  Body,
} from "@app/views/components";

import { styles } from "./styles";

export default function RecipeName(props) {
  // Props
  const { recipeDetails, isLoading, style } = props;

  return (
    <View style={{ ...styles.wrapper, ...style }}>
      {!isLoading && recipeDetails ? (
        <View style={styles.container}>
          <View>
            <Title2>{recipeDetails.name}</Title2>
            <SubHeadline1>By {recipeDetails.name_owner}</SubHeadline1>
          </View>
          <View style={styles.rowContainer}>
            <StarRating rating={recipeDetails.rating} />
            <SubHeadline2>
              {`${recipeDetails.rating} (${recipeDetails.rating_count})`}
            </SubHeadline2>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={{ alignItems: "flex-start", gap: SPACING.Tiny }}>
            <TextSkeleton
              style={styles.loadingTitle}
              fontSize={FONT_SIZES.Large}
            />
            <TextSkeleton
              style={styles.loadingSubheadline1}
              fontSize={FONT_SIZES.Medium}
            />
          </View>
          <View style={styles.rowContainer}>
            <StarRating rating={0} />
          </View>
        </View>
      )}
      {!isLoading && recipeDetails && <Body>{recipeDetails.description}</Body>}
      {!isLoading && recipeDetails ? (
        <View style={styles.rowWrapper}>
          <View style={styles.detailContainer}>
            <LargeServingIcon />
            <Body style={styles.body}>{recipeDetails.servings} Servs.</Body>
          </View>
          <View style={styles.detailContainer}>
            <LargeTimeIcon />
            <Body style={styles.body}>{recipeDetails.prep_time} Mins.</Body>
          </View>
          <View style={styles.detailContainer}>
            <LargeHeartIcon />
            <Body style={styles.body}>{recipeDetails.likes} Likes</Body>
          </View>
        </View>
      ) : (
        <View style={styles.rowWrapper}>
          <View style={styles.detailContainer}>
            <LargeServingIcon />
            <TextSkeleton
              style={styles.loadingBody}
              fontSize={FONT_SIZES.Regular}
            />
          </View>
          <View style={styles.detailContainer}>
            <LargeTimeIcon />
            <TextSkeleton
              style={styles.loadingBody}
              fontSize={FONT_SIZES.Regular}
            />
          </View>
          <View style={styles.detailContainer}>
            <LargeHeartIcon />
            <TextSkeleton
              style={styles.loadingBody}
              fontSize={FONT_SIZES.Regular}
            />
          </View>
        </View>
      )}
    </View>
  );
}
