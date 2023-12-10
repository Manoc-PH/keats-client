import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
// Components
import Button from "../Button";
// Constants
import { BTN_VARIANTS, SIZES } from "@app/common/constants/styles";
// Styles
import { styles } from "./styles";

function SwitchOptions(props) {
  // Props
  const { options, defaultOption, onChange } = props;

  // Local State
  const [activeOption, setActiveOption] = useState(defaultOption || "");

  // UseEffects
  useEffect(() => {
    if (activeOption) {
      onChange(activeOption);
    }
  }, [activeOption]);
  return (
    <ScrollView
      contentContainerStyle={styles.wrapper}
      showsHorizontalScrollIndicator={false}
      horizontal>
      {options &&
        options.map((item) => (
          <Button
            key={item.value}
            variant={
              activeOption == item.value
                ? BTN_VARIANTS.primary
                : BTN_VARIANTS.outlined
            }
            size={SIZES.Small}
            onPress={() => setActiveOption(item.value)}>
            {item.label}
          </Button>
        ))}
    </ScrollView>
  );
}

export default SwitchOptions;
