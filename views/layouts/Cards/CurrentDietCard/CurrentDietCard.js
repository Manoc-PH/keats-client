import { View } from "react-native";

import { ArrowRightIcon } from "@app/assets/icons";

import { FONT_SIZES } from "@app/common/constants/styles";

import { Card, SubHeadline2, Body, TextSkeleton } from "@app/views/components";
import { styles } from "./styles";

export default function CurrentDietCard(props) {
  // Props
  const { accountVitals } = props;

  // Functions
  function handlePress() {
    if (!accountVitals) return;
    console.log(accountVitals);
  }
  return (
    <View style={styles.wrapper}>
      <Card onPress={handlePress}>
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            {accountVitals ? (
              <>
                <SubHeadline2>Current Diet Plan</SubHeadline2>
                <View style={styles.btnContainer}>
                  {/* TODO ADD LINK TO CURRENT OPTIONS */}
                  <SubHeadline2 style={styles.subheadline}>Change</SubHeadline2>
                  <View style={styles.iconContainer}>
                    <ArrowRightIcon />
                  </View>
                </View>
              </>
            ) : (
              <View style={styles.smallSkeleton}>
                <TextSkeleton fontSize={FONT_SIZES.Small} />
              </View>
            )}
          </View>
          {!accountVitals ? (
            <View style={styles.skeleton}>
              <TextSkeleton fontSize={FONT_SIZES.Medium} />
            </View>
          ) : (
            <Body style={styles.title}>
              {accountVitals?.diet_plan_name || ""}
            </Body>
          )}
        </View>
      </Card>
    </View>
  );
}
