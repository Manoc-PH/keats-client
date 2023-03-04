import { BTN_VARIANTS } from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { Button, HorizontalProgressBar, Title3 } from "@app/views/components";
import { SignupForm } from "@app/views/layouts";
import React, { useState } from "react";
import { View } from "react-native";

import { styles } from "./styles";

export default function Signup() {
  // Local States
  const [activePage, setActivePage] = useState(0);
  const [data, setData] = useState({
    username: "",
    password: "",
    birthday: "",
    sex: "",
    weight: "",
    height: "",
    activity_lvl_id: "",
    diet_plan_id: "",
  });

  // Variables
  const numOfPages = 7;

  function handleNext() {
    if (activePage < numOfPages - 1) setActivePage((prev) => prev + 1);
  }
  function handleBack() {
    if (activePage > 0) setActivePage((prev) => prev - 1);
  }

  return (
    <View style={styles.wrapper}>
      <SignupForm activePage={activePage} data={data} setData={setData} />
      <View style={styles.bottomWrapper}>
        <HorizontalProgressBar
          progress={((activePage + 1) / numOfPages) * 100}
          foregroundColor={themeColors.primary}
          backgroundColor={`${themeColors.primary}25`}
        />
        <View style={styles.bottomContentWrapper}>
          <Button variant={BTN_VARIANTS.outlined} onPress={handleBack}>
            Back
          </Button>
          <Button variant={BTN_VARIANTS.outlined} onPress={handleNext}>
            Next
          </Button>
        </View>
      </View>
    </View>
  );
}
