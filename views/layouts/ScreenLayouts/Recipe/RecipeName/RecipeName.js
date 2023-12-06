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
  TextSkeleton,
  Title3,
} from "@app/views/components";

import { styles } from "./styles";

export default function RecipeName(props) {
  // Props
  const { recipeDetails, isLoading, style } = props;

  // Local State
  const [ingredient, setIngredient] = useState();
  const [selectedVariant, setSelectedVariant] = useState();
  const [selectedSubvariant, setSelectedSubvariant] = useState();
  const [ingredientMapping, setIngredientMapping] = useState();
  const [variants, setVariants] = useState();
  const [subvariants, setSubvariants] = useState();

  return (
    <View style={{ ...styles.wrapper, ...style }}>
      <StarRating rating={3.2} />
    </View>
  );
}
