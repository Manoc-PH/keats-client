import { View } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Hooks
import { useGetIntake } from "@app/core/hooks/api";

// Store
import { actions } from "@app/core/store";

// Layouts
import {
  NutrientSummary,
  ScrollPage,
  FoodName,
  UpdateFoodIntakeFooter,
  PageDivider,
  IngredientCarousel,
} from "@app/views/layouts";

// Components
import { Image } from "@app/views/components";

import { styles } from "./styles";

export default function IntakeFoodDetails() {
  // Store State
  const { dailyNutrients, selectedIntake, selectedIntakeAmount } = useSelector(
    (state) => state.tracker
  );
  // Store Actions
  const { setIsDeleteIntakeModalVisible: sid } = actions;
  const dispatch = useDispatch();
  const setIsDeleteIntakeModalVisible = (value) => dispatch(sid(value));

  // Local State
  const [intakeDetails, setIntakeDetails] = useState();

  // Hooks
  const { getIntake, getIntakeData, isGetIntakeLoading } = useGetIntake();

  // Functions
  function fetchIntake() {
    getIntake({
      intake_id: selectedIntake?.id,
    });
  }
  function handleIntakeDetailsData() {
    if (!getIntakeData) return;
    if (getIntakeData?.food) {
      setIntakeDetails(getIntakeData);
    }
  }

  // UseEffects
  useEffect(() => {
    if (selectedIntake) fetchIntake();
  }, [selectedIntake]);
  useEffect(() => {
    handleIntakeDetailsData();
  }, [getIntakeData]);
  return (
    <>
      <ScrollPage style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          {intakeDetails?.food?.images &&
          intakeDetails?.food?.images?.length > 0 ? (
            <IngredientCarousel data={intakeDetails.ingredient_images} />
          ) : (
            <Image src={intakeDetails?.thumbnail_image_link} />
          )}
        </View>
        <View style={styles.container}>
          <NutrientSummary
            dailyNutrients={dailyNutrients}
            details={intakeDetails?.food?.details}
            amount={selectedIntakeAmount}
            isLoading={isGetIntakeLoading}
          />
          <PageDivider style={styles.spacer} />
          <FoodName
            style={styles.spacer}
            food={intakeDetails?.food?.details?.food}
            isLoading={isGetIntakeLoading}
          />
        </View>
      </ScrollPage>
      {intakeDetails && (
        <UpdateFoodIntakeFooter
          details={intakeDetails?.food?.details}
          intake_id={selectedIntake.id}
          food_id={selectedIntake.food_id}
          key={selectedIntake}
          selectedIntake={selectedIntake}
        />
      )}
    </>
  );
}
