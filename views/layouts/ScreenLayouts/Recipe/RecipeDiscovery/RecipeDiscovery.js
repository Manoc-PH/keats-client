import { View } from "react-native";

// Constants
import { FONT_SIZES } from "@app/common/constants/styles";
// Components
import { TextSkeleton, Title3 } from "@app/views/components";
// Hooks
import { useGetRecipeDiscovery } from "@app/core/hooks/api";
import RecipeCard from "@app/views/layouts/Cards/RecipeCard";

import { styles } from "./styles";

export default function RecipeDiscovery(props) {
  // Props
  const {} = props;

  // Hooks
  const {} = useGetRecipeDiscovery();

  return (
    <View style={styles.wrapper}>
      <View style={styles.optionContainer}></View>
      <View style={styles.recipeWrapper}>
        <View style={styles.recipeContainer}>
          <RecipeCard
            name={"This is the name of the recipe"}
            rating={5}
            rating_count={15}
            image_url={
              "https://static.toiimg.com/thumb/58394256.cms?imgsize=104892&width=800&height=800"
            }
          />
        </View>
        <View style={styles.recipeContainer}>
          <RecipeCard />
        </View>
        <View style={styles.recipeContainer}>
          <RecipeCard />
        </View>
        <View style={styles.recipeContainer}>
          <RecipeCard name={"Thgdg dfg dfgdf"} />
        </View>
        <View style={styles.recipeContainer}>
          <RecipeCard />
        </View>
        <View style={styles.recipeContainer}>
          <RecipeCard />
        </View>
        <View style={styles.recipeContainer}>
          <RecipeCard />
        </View>
      </View>
    </View>
  );
}
