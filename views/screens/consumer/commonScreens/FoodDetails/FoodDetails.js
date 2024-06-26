import { View } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Hooks
import { useGetFoodDetails } from "@app/core/hooks/api";

// Layouts
import {
  NutrientSummary,
  ScrollPage,
  FoodName,
  ConsumeFoodFooter,
  PageDivider,
  ImagesCarousel,
} from "@app/views/layouts";

// Components
import { Image } from "@app/views/components";

import { styles } from "./styles";

export default function FoodDetails() {
  // Store State
  const { dailyNutrients } = useSelector((state) => state.tracker);
  const { selectedFoodID, setSelectedFoodBarcode, selectedFoodAmount } =
    useSelector((state) => state.food);

  // Local State
  const [foodDetails, setFoodDetails] = useState();

  // Hooks
  const { getFoodDetails, getFoodDetailsData, isGetFoodDetailsLoading } =
    useGetFoodDetails();

  // Functions
  function handleFoodData() {
    setFoodDetails(getFoodDetailsData);
  }

  // UseEffects
  useEffect(() => {
    if (selectedFoodID) getFoodDetails({ food_id: selectedFoodID });
    if (setSelectedFoodBarcode)
      getFoodDetails({ barcode: setSelectedFoodBarcode });
  }, [selectedFoodID, setSelectedFoodBarcode]);
  useEffect(() => {
    if (getFoodDetailsData) handleFoodData();
  }, [getFoodDetailsData]);
  return (
    <>
      <ScrollPage style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          {foodDetails?.food_images && foodDetails?.food_images?.length > 0 ? (
            <ImagesCarousel data={foodDetails.food_images} />
          ) : (
            <Image src={foodDetails?.thumbnail_image_link} />
          )}
        </View>
        <View style={styles.container}>
          <NutrientSummary
            dailyNutrients={dailyNutrients}
            details={foodDetails}
            amount={selectedFoodAmount}
            isLoading={isGetFoodDetailsLoading}
          />
          <PageDivider style={styles.spacer} />
          <FoodName
            style={styles.spacer}
            food={foodDetails?.food}
            isLoading={isGetFoodDetailsLoading}
          />
        </View>
      </ScrollPage>
      {foodDetails && (
        <ConsumeFoodFooter
          key={selectedFoodID}
          food_id={selectedFoodID}
          details={foodDetails}
        />
      )}
    </>
  );
}
