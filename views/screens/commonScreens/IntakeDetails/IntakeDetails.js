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
  UpdateIntakeFooter,
  PageDivider,
} from "@app/views/layouts";

// Components
import { Image } from "@app/views/components";

import { styles } from "./styles";

export default function IntakeDetails() {
  // TODO ADD SUPPORT FOR FOOD
  // Store State
  const { dailyNutrients, selectedIntake, selectedIntakeAmount } = useSelector(
    (state) => state.tracker
  );
  const { selectedIngredientMappingID } = useSelector(
    (state) => state.ingredient
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
    getIngredientMappingDetails({
      ingredient_mapping_id: selectedIngredientMappingID,
    });
  }
  function fetchIngredientMappingFromIntake() {
    if (selectedIntake && selectedIntake?.ingredient_mapping_id) {
      getIngredientMappingDetails({
        ingredient_mapping_id: selectedIntake?.ingredient_mapping_id,
        return_mappings: true,
      });
    }
  }
  function handleIngredientDetailsData() {
    if (!getIngredientMappingDetailsData) return;
    if (getIngredientMappingDetailsData?.ingredient_mappings) {
      setIngredientDetails(getIngredientMappingDetailsData);
    } else {
      setIngredientDetails({
        ...getIngredientMappingDetailsData,
        ingredient_mappings: ingredientDetails?.ingredient_mappings,
      });
    }
  }

  // UseEffects
  useEffect(() => {
    if (selectedIntake) fetchIngredientMappingFromIntake();
  }, []);
  useEffect(() => {
    if (selectedIngredientMappingID) fetchIngredientMapping();
  }, [selectedIngredientMappingID]);
  useEffect(() => {
    handleIngredientDetailsData();
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
            details={ingredientDetails}
            amount={selectedIntakeAmount}
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
        <UpdateIntakeFooter
          selectedIntake={selectedIntake}
          intake_id={selectedIntake.id}
          key={selectedIngredientMappingID}
          ingredient_mapping_id={ingredientDetails.ingredient_mapping_id}
        />
      )}
    </>
  );
}
