import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// Constants
import { FONT_SIZES, SPACING } from "@app/common/constants/styles";
// Store
import { actions } from "@app/core/store";
// Icons
import {
  LargeAmountIcon,
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

  // Store State
  const { addedLike } = useSelector((state) => state.recipe);
  // Store Actions
  const { setAddedLike: sfa } = actions;
  const dispatch = useDispatch();
  const setAddedLike = (value) => dispatch(sfa(value));

  // Local state
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (recipeDetails) setLikes(recipeDetails?.likes || 0);
  }, [recipeDetails]);
  useEffect(() => {
    if (addedLike) {
      setLikes((prevState) => prevState + 1);
      setAddedLike();
    }
  }, [addedLike]);
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
              {`${recipeDetails.rating?.toFixed(1)} (${
                recipeDetails.rating_count
              })`}
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
            <SubHeadline2 style={styles.body}>
              {recipeDetails.servings} Servs.
            </SubHeadline2>
          </View>
          <View style={styles.detailContainer}>
            <LargeTimeIcon />
            <SubHeadline2 style={styles.body}>
              {recipeDetails.prep_time} Mins.
            </SubHeadline2>
          </View>
          <View style={styles.detailContainer}>
            <LargeAmountIcon />
            <SubHeadline2 style={styles.body}>
              {recipeDetails.servings * recipeDetails.servings_size} G
            </SubHeadline2>
          </View>
          <View style={styles.detailContainer}>
            <LargeHeartIcon />
            <SubHeadline2 style={styles.body}>{likes} Like(s)</SubHeadline2>
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
