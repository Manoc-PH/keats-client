import { View } from "react-native";

import { styles } from "./styles";
import { Caption2, TextSkeleton, Title3 } from "@app/views/components";
import { FONT_SIZES } from "@app/common/constants/styles";
import { useEffect, useState } from "react";

export default function IngredientName(props) {
  // Props
  const { ingredientDetails } = props;

  // Local State
  const [ingredient, setIngredient] = useState();
  const [ingredientVariant, setIngredientVariant] = useState();
  const [ingredientSubvariant, setIngredientSubvariant] = useState();

  // UseEffects
  useEffect(() => {
    if (ingredientDetails) {
      setIngredient(ingredientDetails.ingredient);
      setIngredientVariant(ingredientDetails.ingredient_variant);
      setIngredientSubvariant(ingredientDetails.ingredient_subvariant);
    } else {
      setIngredient("");
      setIngredientVariant("");
      setIngredientSubvariant("");
    }
  }, [ingredientDetails]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {ingredient && (
          <>
            <Title3>
              {ingredient.name}
              {ingredient?.name_ph && ` - ${ingredient.name_ph}`}
            </Title3>
            <Caption2 style={styles.brandname}>
              {ingredient.name_owner}
            </Caption2>
          </>
        )}
        {!ingredientDetails && (
          <>
            <View style={styles.titleSkeleton}>
              <TextSkeleton fontSize={FONT_SIZES.Medium} />
            </View>
            <View style={styles.titleSkeleton}>
              <TextSkeleton fontSize={FONT_SIZES.Medium} />
            </View>
            <View style={styles.brandnameSkeleton}>
              <TextSkeleton fontSize={FONT_SIZES.Tiny} />
            </View>
          </>
        )}
      </View>
    </View>
  );
}
