import { View } from "react-native";

import { styles } from "./styles";
import { DropdownInput, TextSkeleton, Title3 } from "@app/views/components";
import { FONT_SIZES } from "@app/common/constants/styles";
import { useEffect, useState } from "react";

export default function IngredientName(props) {
  // Props
  const { ingredientDetails } = props;

  // Local State
  const [ingredient, setIngredient] = useState();
  const [ingredientVariant, setIngredientVariant] = useState();
  const [ingredientSubvariant, setIngredientSubvariant] = useState();
  const [ingredientMapping, setIngredientMapping] = useState();
  const [variants, setVariants] = useState();
  const [subvariants, setSubvariants] = useState();

  // Functions
  function formatIngredientMapping(ingredientMappings) {
    const newData = {};
    const newVariants = [];
    const newSubvariants = [];
    ingredientMappings.forEach((item) => {
      if (!newData[item.ingredient_variant_name]) {
        newData[item.ingredient_variant_name] = {
          id: item.ingredient_variant_id,
          subvariants: {},
        };
        // TODO ADD PH NAMES
        const newVariant = {
          label: item.ingredient_variant_name,
          value: item.ingredient_variant_id,
          name: item.ingredient_variant_name,
          id: item.ingredient_variant_id,
        };
        newVariants.push(newVariant);
      }
      if (
        item.ingredient_variant_name ===
        ingredientDetails.ingredient_variant.name
      ) {
        const newSubvar = {
          label: item.ingredient_subvariant_name,
          value: item.ingredient_subvariant_id,
          name: item.ingredient_subvariant_name,
          id: item.ingredient_subvariant_id,
        };
        newSubvariants.push(newSubvar);
      }
      newData[item.ingredient_variant_name].subvariants[
        item.ingredient_subvariant_name
      ] = item.ingredient_subvariant_id;
    });
    setIngredientMapping(newData);
    setVariants(newVariants);
    setSubvariants(newSubvariants);
  }
  function handleSelectVariant(item) {
    setIngredientVariant(item);
  }
  function handleSelectSubariant(item) {
    setIngredientSubvariant(item);
  }

  // UseEffects
  useEffect(() => {
    if (ingredientDetails) {
      setIngredient(ingredientDetails.ingredient);
      setIngredientVariant(ingredientDetails.ingredient_variant);
      setIngredientSubvariant(ingredientDetails.ingredient_subvariant);
      formatIngredientMapping(ingredientDetails.ingredient_mappings);
    } else {
      setIngredient("");
      setIngredientVariant("");
      setIngredientSubvariant("");
      setIngredientMapping();
    }
  }, [ingredientDetails]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {ingredient && (
          <>
            <Title3>
              {ingredient.name}
              {ingredient?.name_ph && ` (${ingredient.name_ph})`}
              {" - "}
              <Title3 style={styles.brandname}>{ingredient.name_owner}</Title3>
            </Title3>
          </>
        )}
        {!ingredientDetails && (
          <>
            <View style={styles.titleSkeleton}>
              <TextSkeleton fontSize={FONT_SIZES.Medium} />
            </View>
          </>
        )}
      </View>
      <View style={styles.container}>
        <DropdownInput
          data={variants}
          value={ingredientVariant?.name}
          setSelected={handleSelectVariant}
          isLoading={!ingredientDetails}
        />
      </View>
      {ingredientSubvariant?.name && (
        <View style={styles.container}>
          <DropdownInput
            data={subvariants}
            value={ingredientSubvariant?.name}
            setSelected={handleSelectSubariant}
            isLoading={!ingredientDetails}
          />
        </View>
      )}
    </View>
  );
}
