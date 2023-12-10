import { View } from "react-native";
import { useEffect, useState } from "react";
// Components
import { TextInput } from "@app/views/components";

import { styles } from "./styles";

export default function RecipeName(props) {
  // Props
  const { recipeNameDetails, setRecipeNameDetails } = props;

  // Local state
  const [recipeName, setRecipeName] = useState();
  const [servings, setServings] = useState();
  const [prepTime, setPrepTime] = useState();
  const [description, setDescription] = useState();

  // UseEffects
  useEffect(() => {
    if (recipeName)
      setRecipeNameDetails({ ...recipeNameDetails, name: recipeName });
    else setRecipeNameDetails({ ...recipeNameDetails, name: "" });
  }, [recipeName]);
  useEffect(() => {
    if (servings)
      setRecipeNameDetails({
        ...recipeNameDetails,
        servings: parseInt(servings, 10),
      });
    else setRecipeNameDetails({ ...recipeNameDetails, servings: "" });
  }, [servings]);
  useEffect(() => {
    if (prepTime)
      setRecipeNameDetails({
        ...recipeNameDetails,
        prep_time: parseInt(prepTime, 10),
      });
    else setRecipeNameDetails({ ...recipeNameDetails, prep_time: "" });
  }, [prepTime]);
  useEffect(() => {
    if (description)
      setRecipeNameDetails({ ...recipeNameDetails, description: description });
    else setRecipeNameDetails({ ...recipeNameDetails, description: "" });
  }, [description]);
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TextInput
          label='Recipe Name *'
          placeholder='Enter the recipe name'
          value={recipeName}
          onChangeText={setRecipeName}
        />
        <View style={styles.rowWrapper}>
          <TextInput
            wrapperStyle={styles.input}
            label='Servings *'
            placeholder='4 servings'
            keyboardType='numeric'
            maxLength={5}
            value={servings}
            onChangeText={setServings}
          />
          <TextInput
            wrapperStyle={styles.input}
            label='Prep. Time *'
            placeholder='4 minutes'
            keyboardType='numeric'
            maxLength={5}
            value={prepTime}
            onChangeText={setPrepTime}
          />
        </View>
        <TextInput
          label='Description'
          placeholder='Enter a description of the recipe'
          value={description}
          onChangeText={setDescription}
          multiline
        />
      </View>
    </View>
  );
}
