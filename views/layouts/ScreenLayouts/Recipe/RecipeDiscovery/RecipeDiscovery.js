import { View } from "react-native";

// Constants
import { FONT_SIZES } from "@app/common/constants/styles";

// Components
import { TextSkeleton, Title3 } from "@app/views/components";

import { styles } from "./styles";
import RecipeCard from "@app/views/layouts/Cards/RecipeCard";

export default function RecipeDiscovery(props) {
  // Props
  const {} = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.optionContainer}></View>
      <View style={styles.recipeWrapper}>
        <View style={styles.recipeContainer}>
          <RecipeCard
            name={"This is the name of the recipe"}
            rating={5}
            rating_count={15}
          />
        </View>
        <View style={styles.recipeContainer}>
          <RecipeCard />
        </View>
        <View style={styles.recipeContainer}>
          <RecipeCard />
        </View>
        <View style={styles.recipeContainer}>
          <RecipeCard name={"This is the name of the recipe"} />
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
