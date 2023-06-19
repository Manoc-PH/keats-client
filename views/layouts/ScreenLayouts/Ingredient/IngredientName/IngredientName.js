import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Store
import { actions } from "@app/core/store";

// Constants
import { FONT_SIZES } from "@app/common/constants/styles";

// Components
import { DropdownInput, TextSkeleton, Title3 } from "@app/views/components";

import { styles } from "./styles";

export default function IngredientName(props) {
  // Props
  const { ingredientDetails, isLoading, style } = props;

  // Store Actions
  const { setSelectedIngredientMappingID: sMId } = actions;
  const dispatch = useDispatch();
  const setSelectedIngredientMappingID = (v) => dispatch(sMId(v));

  // Local State
  const [ingredient, setIngredient] = useState();
  const [selectedVariant, setSelectedVariant] = useState();
  const [selectedSubvariant, setSelectedSubvariant] = useState();
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
          ingredient_mapping_id: item.id,
        };
        newSubvariants.push(newSubvar);
      }
      newData[item.ingredient_variant_name].subvariants[
        item.ingredient_subvariant_name
      ] = {
        name: item.ingredient_subvariant_name,
        id: item.ingredient_subvariant_id,
        ingredient_mapping_id: item.id,
      };
    });
    setIngredientMapping(newData);
    setVariants(newVariants);
    setSubvariants(newSubvariants);
  }
  function handleSelectVariant(item) {
    console.log(item);
    setSelectedVariant(item);
    const subVars = ingredientMapping[item.name].subvariants;
    if (subVars) {
      const oldSubvarName = Object.keys(subVars)[0];
      const oldSubvar = subVars[oldSubvarName];
      const newSubvar = {
        label: oldSubvar.name,
        value: oldSubvar.id,
        name: oldSubvar.name,
        id: oldSubvar.id,
        ingredient_mapping_id: oldSubvar.ingredient_mapping_id,
      };
      const newSubvars = [];
      Object.values(subVars).forEach((item) =>
        newSubvars.push({
          label: item.name,
          value: item.id,
          name: item.name,
          id: item.id,
          ingredient_mapping_id: item.ingredient_mapping_id,
        })
      );
      setSubvariants(newSubvars);
      setSelectedSubvariant(newSubvar);
      setSelectedIngredientMappingID(oldSubvar.ingredient_mapping_id);
    } else setSelectedSubvariant();
  }
  function handleSelectSubariant(item) {
    setSelectedSubvariant(item);
    setSelectedIngredientMappingID(item.ingredient_mapping_id);
  }

  // UseEffects
  useEffect(() => {
    if (ingredientDetails) {
      setIngredient(ingredientDetails.ingredient);
      setSelectedVariant(ingredientDetails.ingredient_variant);
      setSelectedSubvariant(ingredientDetails.ingredient_subvariant);
      if (ingredientDetails?.ingredient_mappings) {
        formatIngredientMapping(ingredientDetails.ingredient_mappings);
      }
    } else {
      setIngredient("");
      setSelectedVariant("");
      setSelectedSubvariant("");
      setIngredientMapping();
    }
  }, [ingredientDetails]);
  return (
    <View style={{ ...styles.wrapper, ...style }}>
      <View>
        {!isLoading && ingredient && (
          <>
            <Title3>
              {ingredient?.name}
              {ingredient?.name_ph && ` (${ingredient.name_ph})`}
              {" - "}
              <Title3 style={styles.brandname}>{ingredient.name_owner}</Title3>
            </Title3>
          </>
        )}
        {isLoading && (
          <>
            <View style={styles.titleSkeleton}>
              <TextSkeleton fontSize={FONT_SIZES.Medium} />
            </View>
          </>
        )}
      </View>
      {selectedVariant?.name && (
        <View style={styles.container}>
          <DropdownInput
            data={variants}
            value={selectedVariant?.name}
            setSelected={handleSelectVariant}
            isLoading={isLoading}
          />
        </View>
      )}
      {selectedSubvariant?.name && (
        <View style={styles.container}>
          <DropdownInput
            data={subvariants}
            value={selectedSubvariant?.name}
            setSelected={handleSelectSubariant}
            isLoading={isLoading}
          />
        </View>
      )}
    </View>
  );
}
