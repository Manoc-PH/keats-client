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
  Title3,
} from "@app/views/components";

import { styles } from "./styles";

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
          <View style={styles.rowWrapper}>
            <View style={styles.rowContainer}>
              <SubHeadline2 style={styles.subheadline}>
                {recipeDetails.servings} Servs.
              </SubHeadline2>
            </View>
            <View style={styles.rowContainer}>
              <SubHeadline2 style={styles.subheadline}>
                {recipeDetails.prep_time} Mins.
              </SubHeadline2>
            </View>
            <View style={styles.rowContainer}>
              <SubHeadline2 style={styles.subheadline}>
                {recipeDetails.likes} Likes
              </SubHeadline2>
            </View>
          </View>
          <StarRating rating={recipeDetails.rating} />
        </View>
      )}
    </View>
  );
}
