import { View } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Hooks
import {
  useGetIngredientDetails,
  useGetIngredientMappingDetails,
} from "@app/core/hooks/api";

// Layouts
import {
  NutrientSummary,
  ScrollPage,
  IngredientName,
  ConsumeIngredientFooter,
  PageDivider,
  ImagesCarousel,
} from "@app/views/layouts";

// Components
import { Image } from "@app/views/components";

import { styles } from "./styles";

export default function RecipeDetails() {
  // Store State
  const { dailyNutrients } = useSelector((state) => state.tracker);
  const {
    selectedIngredientID,
    selectedIngredientMappingID,
    selectedIngredientAmount,
  } = useSelector((state) => state.ingredient);

  // Local State
  const [recipeDetails, setIngredientDetails] = useState();

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
    getIngredientMappingDetails({
      ingredient_mapping_id: selectedIngredientMappingID,
    });
  }
  function handleIngredientMappingData() {
    setIngredientDetails((prevValue) => ({
      ...prevValue,
      ...getIngredientMappingDetailsData,
    }));
  }

  // UseEffects
  useEffect(() => {
    if (selectedIngredientID) {
      if (!recipeDetails || recipeDetails?.id !== selectedIngredientID)
        getIngredientDetails(selectedIngredientID);
    }
  }, [selectedIngredientID]);
  useEffect(() => {
    if (getIngredientDetailsData)
      setIngredientDetails(getIngredientDetailsData);
  }, [getIngredientDetailsData]);
  useEffect(() => {
    if (selectedIngredientMappingID) fetchIngredientMapping();
  }, [selectedIngredientMappingID]);
  useEffect(() => {
    if (getIngredientMappingDetailsData) handleIngredientMappingData();
  }, [getIngredientMappingDetailsData]);
  return (
    <ScrollPage style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        {recipeDetails?.ingredient_images &&
        recipeDetails?.ingredient_images?.length > 0 ? (
          <ImagesCarousel data={recipeDetails.ingredient_images} />
        ) : (
          <Image src={recipeDetails?.thumbnail_image_link} />
        )}
      </View>
      <View style={styles.container}>
        <NutrientSummary
          dailyNutrients={dailyNutrients}
          details={recipeDetails}
          amount={selectedIngredientAmount}
          isLoading={
            isGetIngredientDetailsLoading ||
            isGetIngredientMappingDetailsLoading
          }
        />
        <PageDivider style={styles.spacer} />
        <IngredientName
          style={styles.spacer}
          recipeDetails={recipeDetails}
          isLoading={
            isGetIngredientDetailsLoading ||
            isGetIngredientMappingDetailsLoading
          }
        />
      </View>
    </ScrollPage>
  );
}
