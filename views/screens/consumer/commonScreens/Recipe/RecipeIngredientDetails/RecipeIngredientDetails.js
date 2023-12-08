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
  RecipeIngredientFooter,
  PageDivider,
  ImagesCarousel,
} from "@app/views/layouts";

// Components
import { Image } from "@app/views/components";

import { styles } from "./styles";

export default function RecipeIngredientDetails() {
  // Store State
  const { dailyNutrients } = useSelector((state) => state.tracker);
  const {
    selectedIngredientID,
    selectedIngredientMappingID,
    selectedIngredientAmount,
  } = useSelector((state) => state.ingredient);

  // Local State
  const [ingredientDetails, setIngredientDetails] = useState();
  const [selectedVariant, setSelectedVariant] = useState();
  const [selectedSubvariant, setSelectedSubvariant] = useState();

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
      if (!ingredientDetails || ingredientDetails?.id !== selectedIngredientID)
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
    <>
      <ScrollPage style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          {ingredientDetails?.ingredient_images &&
          ingredientDetails?.ingredient_images?.length > 0 ? (
            <ImagesCarousel data={ingredientDetails.ingredient_images} />
          ) : (
            <Image src={ingredientDetails?.thumbnail_image_link} />
          )}
        </View>
        <View style={styles.container}>
          <NutrientSummary
            dailyNutrients={dailyNutrients}
            details={ingredientDetails}
            amount={selectedIngredientAmount}
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
            setSelectedVariant={setSelectedVariant}
            setSelectedSubvariant={setSelectedSubvariant}
          />
        </View>
      </ScrollPage>
      {ingredientDetails && (
        <RecipeIngredientFooter
          key={selectedIngredientMappingID}
          ingredient_mapping_id={
            selectedIngredientMappingID ||
            ingredientDetails.ingredient_mapping_id
          }
          ingredientDetails={ingredientDetails?.ingredient}
          nutrient={ingredientDetails?.nutrient}
          selectedVariant={selectedVariant}
          selectedSubvariant={selectedSubvariant}
        />
      )}
    </>
  );
}
