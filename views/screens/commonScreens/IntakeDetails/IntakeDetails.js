import { View } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Hooks
import { useGetIngredientMappingDetails } from "@app/core/hooks/api";

// Layouts
import {
  NutrientSummary,
  ScrollPage,
  IngredientName,
  ConsumeIngredientFooter,
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
  function handleIngredientMappingData() {
    setIngredientDetails(getIngredientMappingDetailsData);
  }

  // UseEffects
  useEffect(() => {
    fetchIngredientMapping();
  }, [selectedIntake]);
  useEffect(() => {
    if (getIngredientMappingDetailsData) handleIngredientMappingData();
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
            isLoading={isGetIngredientMappingDetailsLoading}
          />
          <PageDivider style={styles.spacer} />
          <IngredientName
            style={styles.spacer}
            ingredientDetails={ingredientDetails}
            isLoading={isGetIngredientMappingDetailsLoading}
          />
        </View>
      </ScrollPage>
      {ingredientDetails && (
        <ConsumeIngredientFooter
          ingredient_mapping_id={ingredientDetails.ingredient_mapping_id}
        />
      )}
    </>
  );
}
