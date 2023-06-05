import { View } from "react-native";

import { ArrowRightIcon } from "@app/assets/icons";

import { FONT_SIZES } from "@app/common/constants/styles";

import {
  Card,
  SubHeadline2,
  Body,
  TextSkeleton,
  Button,
} from "@app/views/components";
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
      <Card>
        <View style={styles.container}>
          {!accountVitals ? (
            <View style={styles.skeleton}>
              <TextSkeleton fontSize={FONT_SIZES.Medium} />
            </View>
          ) : (
            <Body style={styles.title}>
              {accountVitals?.diet_plan_name || ""}
            </Body>
          )}
          <View style={styles.rowContainer}>
            {accountVitals ? (
              <SubHeadline2>Current Diet Plan</SubHeadline2>
            ) : (
              <View style={styles.smallSkeleton}>
                <TextSkeleton fontSize={FONT_SIZES.Small} />
              </View>
            )}
          </View>

          <View style={styles.spacerLine} />

          {!accountVitals ? (
            <View style={styles.skeleton}>
              <TextSkeleton fontSize={FONT_SIZES.Medium} />
            </View>
          ) : (
            <Body style={styles.title}>
              {accountVitals?.activity_lvl_name || ""}
            </Body>
          )}
          <View style={styles.rowContainer}>
            {accountVitals ? (
              <SubHeadline2>Current Activity Level</SubHeadline2>
            ) : (
              <View style={styles.smallSkeleton}>
                <TextSkeleton fontSize={FONT_SIZES.Small} />
              </View>
            )}
          </View>
        </View>
      </Card>
      <View style={styles.spacer} />
      <Button style={styles.btn} onPress={handlePress}>
        Know More
      </Button>
    </View>
  );
}
