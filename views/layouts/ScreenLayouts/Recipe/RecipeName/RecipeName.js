import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Store
import { actions } from "@app/core/store";

// Constants
import { FONT_SIZES } from "@app/common/constants/styles";

// Components
import {
  DropdownInput,
  StarRating,
  SubHeadline1,
  SubHeadline2,
  TextSkeleton,
  Title2,
  Body,
} from "@app/views/components";

import { styles } from "./styles";
import {
  LargeHeartIcon,
  LargeServingIcon,
  LargeTimeIcon,
} from "@app/assets/icons";
import PageDivider from "@app/views/layouts/PageDivider";

export default function RecipeName(props) {
  // Props
  const { recipeDetails, isLoading, style } = props;
  console.log(recipeDetails);

  // Local State
  const [ingredient, setIngredient] = useState();
  const [selectedVariant, setSelectedVariant] = useState();
  const [selectedSubvariant, setSelectedSubvariant] = useState();
  const [ingredientMapping, setIngredientMapping] = useState();
  const [variants, setVariants] = useState();
  const [subvariants, setSubvariants] = useState();

  return (
    <View style={{ ...styles.wrapper, ...style }}>
      {!isLoading && recipeDetails && (
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
      )}
      {!isLoading && recipeDetails && (
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
      )}
      {!isLoading && recipeDetails && <Body>{recipeDetails.description}</Body>}
    </View>
  );
}
