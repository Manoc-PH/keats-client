import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { ArrowRightIcon } from "@app/assets/icons";

import { Card, SubHeadline2, Body } from "@app/views/components";
import { styles } from "./styles";

export default function CurrentDietCard() {
  // Store State
  const { accountVitals } = useSelector((state) => state.account);

  return (
    <View style={styles.wrapper}>
      <Card>
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <SubHeadline2>Current Diet Plan</SubHeadline2>
            <View style={styles.btnContainer}>
              {/* TODO ADD LINK TO CURRENT OPTIONS */}
              <SubHeadline2 style={styles.subheadline}>Change</SubHeadline2>
              <View style={styles.iconContainer}>
                <ArrowRightIcon />
              </View>
            </View>
          </View>
          <Body style={styles.title}>
            {accountVitals?.diet_plan_name || ""}
          </Body>
        </View>
      </Card>
    </View>
  );
}
