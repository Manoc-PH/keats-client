import { ArrowRightIcon } from "@app/assets/icons";
import themeColors from "@app/common/theme";
import { Card, Txt } from "@app/views/components";
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
            <Txt style={styles.subTitle}>Current Diet Plan</Txt>
            <View style={styles.btnContainer}>
              {/* TODO ADD LINK TO CURRENT OPTIONS */}
              <Txt
                style={{
                  ...styles.subTitle,
                  color: themeColors.primary,
                  marginRight: 5,
                }}>
                Change
              </Txt>
              <View style={styles.iconContainer}>
                <ArrowRightIcon />
              </View>
            </View>
          </View>
          <Txt style={styles.title}>{title}</Txt>
        </View>
      </Card>
    </View>
  );
}
