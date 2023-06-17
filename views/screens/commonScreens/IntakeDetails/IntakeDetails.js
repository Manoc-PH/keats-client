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
    getIngredientMappingDetails(selectedIngredientMappingID);
  }
  function fetchIngredientMappingFromIntake() {
    if (selectedIntake && selectedIntake?.ingredient_mapping_id) {
      getIngredientMappingDetails(selectedIntake?.ingredient_mapping_id);
    }
  }
  function fetchIngredient() {
    if (selectedIntake && selectedIntake?.ingredient_id) {
      getIngredientDetails(selectedIntake?.ingredient_id);
    }
  }
  function handleIniditalLoad() {
    if (getIngredientDetailsData && getIngredientMappingDetailsData) {
      setIngredientDetails({
        ...getIngredientDetailsData,
        ...getIngredientMappingDetailsData,
      });
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
    if (selectedIntake) {
      fetchIngredient();
      fetchIngredientMappingFromIntake();
    }
  }, []);
  useEffect(() => {
    if (selectedIngredientMappingID) fetchIngredientMapping();
  }, [selectedIngredientMappingID]);
  useEffect(() => {
    handleIniditalLoad(getIngredientDetailsData);
  }, [getIngredientDetailsData, getIngredientMappingDetailsData]);
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
            details={ingredientDetails}
            amount={selectedIntakeAmount}
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
          key={selectedIngredientMappingID}
          ingredient_mapping_id={
            selectedIngredientMappingID
              ? selectedIngredientMappingID
              : ingredientDetails.ingredient_mapping_id
          }
        />
      )}
    </>
  );
}
