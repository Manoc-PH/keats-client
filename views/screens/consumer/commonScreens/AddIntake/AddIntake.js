import { useState } from "react";
import { View } from "react-native";

// Layouts
import { AddIntakeSearchbar } from "@app/views/layouts";

// Themes
import themeColors from "@app/common/theme";
// Components
import { Title1, Title3 } from "@app/views/components";

import { styles } from "./styles";

export default function AddIntake() {
  // Local State
  const [isSearchActive, setIsSearchActive] = useState();
  return (
    <View style={styles.container}>
      {!isSearchActive && (
        <View
          style={{
            backgroundColor: themeColors.secondaryLight,
            height: "100%",
            width: "100%",
          }}>
          <Title1>TESTING</Title1>
        </View>
      )}
      <AddIntakeSearchbar
        isSearchActive={isSearchActive}
        setIsSearchActive={setIsSearchActive}
      />
    </View>
  );
}
