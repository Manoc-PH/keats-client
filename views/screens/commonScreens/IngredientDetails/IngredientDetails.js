import { View } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// Hooks
import { useGetIngredientDetails } from "@app/core/hooks/api";

// Layouts
import {
  NutrientSummary,
  ScrollPage,
  IngredientName,
  ConsumeIngredientFooter,
} from "@app/views/layouts";

// Components
import { Image } from "@app/views/components";

import { styles } from "./styles";

export default function IngredientDetails() {
  // Store State
  const { dailyNutrients } = useSelector((state) => state.tracker);
  const { selectedIngredientID, selectedIngredientAmount } = useSelector(
    (state) => state.ingredient
  );

  // Local State
  const [ingredientDetails, setIngredientDetails] = useState();

  // Hooks
  const {
    getIngredientDetails,
    getIngredientDetailsData,
    isGetIngredientDetailsLoading,
    isGetIngredientDetailsSuccess,
  } = useGetIngredientDetails();

  // UseEffects
  useEffect(() => {
    if (selectedIngredientID) {
      if (!ingredientDetails || ingredientDetails?.id !== selectedIngredientID)
        getIngredientDetails(selectedIngredientID);
    }
  }, [selectedIngredientID]);
  useEffect(() => {
    if (isGetIngredientDetailsSuccess)
      setIngredientDetails(getIngredientDetailsData);
  }, [getIngredientDetailsData]);
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
            selectedIngredientAmount={selectedIngredientAmount}
          />
          <IngredientName ingredientDetails={ingredientDetails} />
        </View>
      </ScrollPage>
      <ConsumeIngredientFooter />
    </>
  );
}
