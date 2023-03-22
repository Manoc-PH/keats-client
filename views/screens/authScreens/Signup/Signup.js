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
  const [errorMsg, setErrorMsg] = useState();
  const [data, setData] = useState({
    username: "",
    password: "",
    sex: "",
    birthday: "",
    weight: "",
    height: "",
    activity_lvl_id: "",
    diet_plan_id: "",
  });

  // Variables
  const numOfPages = 7;

  function handleNext() {
    if (errorMsg) return;
    if (activePage === 0 && (!data.username || !data.password)) {
      setErrorMsg("Missing fields, please enter both username and password");
      return;
    }
    if (activePage === 1 && !data.sex) {
      setErrorMsg("Missing fields, please select your sex");
      return;
    }
    if (activePage === 2 && !data.birthday) {
      setErrorMsg("Missing fields, please enter your birthday");
      return;
    }
    if (activePage === 3 && !data.weight) {
      setErrorMsg("Missing fields, please enter your weight");
      return;
    }
    if (activePage === 4 && !data.height) {
      setErrorMsg("Missing fields, please enter your height");
      return;
    }
    if (activePage === 5 && !data.activity_lvl_id) {
      setErrorMsg("Missing fields, please select your activity level");
      return;
    }
    if (activePage === 6 && !data.diet_plan_id) {
      setErrorMsg("Missing fields, please select your diet plan");
      return;
    }
    if (activePage < numOfPages - 1) setActivePage((prev) => prev + 1);
    setErrorMsg();
  }
  function handleBack() {
    if (activePage > 0) setActivePage((prev) => prev - 1);
  }

  return (
    <View style={styles.wrapper}>
      <SignupForm
        activePage={activePage}
        data={data}
        setData={setData}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
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
