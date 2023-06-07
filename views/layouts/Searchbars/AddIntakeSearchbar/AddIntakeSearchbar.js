import { View } from "react-native";
import themeColors from "@app/common/theme";
import { useNavigation } from "@react-navigation/native";

// Components
import { Body, Button, TextInput } from "@app/views/components";

// Constants
import { BTN_VARIANTS, SIZES, SPACING } from "@app/common/constants/styles";

// Assets
import { SearchIcon } from "@app/assets/icons";

export default function AddIntakeSearchbar() {
  // Local State
  const [text, onChangeText] = useState("");

  // Hooks
  const navigation = useNavigation();

  // Functions
  function handleCancel() {
    navigation.navigate("Home", { screen: "HomeDefault" });
  }

  return (
    <View style={styles.boilerplate}>
      <View style={styles.searchWrapper}>
        <View style={styles.searchInputContainer}>
          <TextInput
            onChangeText={onChangeText}
            value={text}
            placeholder='Search for a food...'
            onStartIconPress={() => {}}
            startIcon={
              <SearchIcon
                height={SPACING.Medium}
                width={SPACING.Medium}
                style={styles.searchIcon}
                color={themeColors.secondary}
              />
            }
          />
        </View>
        <Button
          variant={BTN_VARIANTS.transparent}
          size={SIZES.Tiny}
          onPress={handleCancel}>
          <Body>Cancel</Body>
        </Button>
      </View>
    </View>
  );
}
