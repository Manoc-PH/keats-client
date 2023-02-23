import { ArrowRightIcon } from "@app/assets/icons";
import themeColors from "@app/common/theme";
import { Card, SubHeadline2, Body } from "@app/views/components";
import { View } from "react-native";
import { styles } from "./styles";

export default function CurrentDietCard() {
  // TODO QUERY DIET PLAN HERE
  const title = "Extreme Lean Weight Loss";
  return (
    <View style={styles.wrapper}>
      <Card>
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <SubHeadline2>Current Diet Plan</SubHeadline2>
            <View style={styles.btnContainer}>
              {/* TODO ADD LINK TO CURRENT OPTIONS */}
              <SubHeadline2
                style={{
                  color: themeColors.primary,
                  marginRight: 5,
                }}>
                Change
              </SubHeadline2>
              <View style={styles.iconContainer}>
                <ArrowRightIcon />
              </View>
            </View>
          </View>
          <Body>{title}</Body>
        </View>
      </Card>
    </View>
  );
}
