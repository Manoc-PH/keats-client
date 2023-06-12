import { View } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Hooks
import {
  useGetIngredientMappingDetails,
  useGetIngredientDetails,
} from "@app/core/hooks/api";

// Layouts
import {
  NutrientSummary,
  ScrollPage,
  IngredientName,
  UpdateIntakeFooter,
  PageDivider,
} from "@app/views/layouts";

// Components
import { Image } from "@app/views/components";

import { styles } from "./styles";

export default function IntakeDetails() {
  // TODO ADD SUPPORT FOR FOOD
  // Store State
  const { dailyNutrients, selectedIntake } = useSelector(
    (state) => state.tracker
  );

  // Local State
  const [ingredientDetails, setIngredientDetails] = useState();

  // Hooks
  const {
    getIngredientDetails,
    getIngredientDetailsData,
    isGetIngredientDetailsLoading,
  } = useGetIngredientDetails();
  const {
    getIngredientMappingDetails,
    getIngredientMappingDetailsData,
    isGetIngredientMappingDetailsLoading,
  } = useGetIngredientMappingDetails();

  // Functions
  function fetchIngredientMapping() {
    if (selectedIntake && selectedIntake?.ingredient_mapping_id) {
      getIngredientMappingDetails(selectedIntake?.ingredient_mapping_id);
    }
  }
  function fetchIngredient() {
    if (selectedIntake && selectedIntake?.ingredient_id) {
      getIngredientDetails(selectedIntake?.ingredient_id);
    }
  }
  function handleIngredientDetailsData() {
    if (ingredientDetails?.ingredient_mappings) {
      setIngredientDetails((prevValue) => ({
        ...prevValue,
        ...getIngredientMappingDetailsData,
      }));
    } else setIngredientDetails(getIngredientMappingDetailsData);
  }

  // UseEffects
  useEffect(() => {
    fetchIngredient();
    fetchIngredientMapping();
  }, [selectedIntake]);
  useEffect(() => {
    if (getIngredientDetailsData)
      setIngredientDetails(getIngredientDetailsData);
  }, [getIngredientDetailsData]);
  useEffect(() => {
    if (getIngredientMappingDetailsData) handleIngredientDetailsData();
  }, [getIngredientMappingDetailsData]);
  useEffect(() => {
    if (getIngredientMappingDetailsData) handleIngredientDetailsData();
  }, [getIngredientMappingDetailsData]);
  return (
    <>
      <ScrollPage style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          {/* TODO Add proper images, not just the thumbnail */}
          <Image src={ingredientDetails?.thumbnail_image_link} />
        </View>
        <View style={styles.container}>
          <NutrientSummary
            dailyNutrients={dailyNutrients}
            ingredientDetails={ingredientDetails}
            selectedIngredientAmount={selectedIntake?.amount}
            isLoading={
              isGetIngredientDetailsLoading ||
              isGetIngredientMappingDetailsLoading
            }
          />
          <PageDivider style={styles.spacer} />
          <IngredientName
            style={styles.spacer}
            ingredientDetails={ingredientDetails}
            isLoading={
              isGetIngredientDetailsLoading ||
              isGetIngredientMappingDetailsLoading
            }
          />
        </View>
      </ScrollPage>
      {ingredientDetails && (
        <UpdateIntakeFooter
          selectedIntake={selectedIntake}
          intake_id={selectedIntake.id}
          ingredient_mapping_id={ingredientDetails.ingredient_mapping_id}
        />
      )}
    </>
  );
}
