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
  const { consumerVitals } = props;

  // Functions
  function handlePress() {
    if (!consumerVitals) return;
    console.log(consumerVitals);
  }
  return (
    <View style={styles.wrapper}>
      <Card>
        <View style={styles.container}>
          {!consumerVitals ? (
            <View style={styles.skeleton}>
              <TextSkeleton fontSize={FONT_SIZES.Medium} />
            </View>
          ) : (
            <Body style={styles.title}>
              {consumerVitals?.diet_plan_name || ""}
            </Body>
          )}
          <View style={styles.rowContainer}>
            {consumerVitals ? (
              <SubHeadline2>Current Diet Plan</SubHeadline2>
            ) : (
              <View style={styles.smallSkeleton}>
                <TextSkeleton fontSize={FONT_SIZES.Small} />
              </View>
            )}
          </View>

          <View style={styles.spacerLine} />

          {!consumerVitals ? (
            <View style={styles.skeleton}>
              <TextSkeleton fontSize={FONT_SIZES.Medium} />
            </View>
          ) : (
            <Body style={styles.title}>
              {consumerVitals?.activity_lvl_name || ""}
            </Body>
          )}
          <View style={styles.rowContainer}>
            {consumerVitals ? (
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
        Change
      </Button>
    </View>
  );
}
