import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
// Constants
import { SPACING } from "@app/common/constants/styles";
// Icons
import {} from "@app/assets/icons";
// Components
import { SwitchButton } from "@app/views/components";
// Hooks
import { useGetRecipeReviews } from "@app/core/hooks/api";

import { styles } from "./styles";
import ReviewCard from "@app/views/layouts/Cards/ReviewCard";

export default function RecipeInfo(props) {
  // Props
  const { RecipeID } = props;
  const [activeInfo, setActiveInfo] = useState("Reviews");
  const [infoSet, setInfoSet] = useState([]);

  // Hooks
  const { getRecipeReviews, getRecipeReviewsData, isGetRecipeReviewsLoading } =
    useGetRecipeReviews();

  // Functions
  function handleSwitchView(value) {
    setInfoSet([]);
    if (value === 1) setActiveInfo("Reviews");
    if (value === 2) setActiveInfo("Ingredients");
    if (value === 3) setActiveInfo("Instructions");
  }
  function handleSwitchInfo(value) {
    if (value === "Reviews") getRecipeReviews({ recipe_id: RecipeID });
  }

  // UseEffects
  useEffect(() => {
    getRecipeReviews({ recipe_id: RecipeID });
  }, [RecipeID]);
  useEffect(() => {
    handleSwitchInfo(activeInfo);
  }, [activeInfo]);
  useEffect(() => {
    if (getRecipeReviewsData?.reviews?.length > 0) {
      setInfoSet(getRecipeReviewsData.reviews);
    }
  }, [getRecipeReviewsData]);
  return (
    <View style={styles.wrapper}>
      <SwitchButton
        onValueChange={handleSwitchView}
        switchWidth={
          Dimensions.get("window").width - SPACING.Medium - SPACING.Medium
        }
        options={["Reviews", "Ingredients", "Instructions"]}
      />
      {activeInfo === "Reviews" && (
        <View>
          {isGetRecipeReviewsLoading && (
            <>
              <ReviewCard isLoading />
              <ReviewCard isLoading />
              <ReviewCard isLoading />
            </>
          )}
          {infoSet &&
            !isGetRecipeReviewsLoading &&
            infoSet.map((item) => (
              <ReviewCard
                key={item.id}
                name={item.name_owner}
                rating={item.rating}
                description={item.description}
                date_created={item.date_created}
              />
            ))}
        </View>
      )}
      {activeInfo === "Ingredients" && <View></View>}
      {activeInfo === "Instructions" && <View></View>}
    </View>
  );
}
