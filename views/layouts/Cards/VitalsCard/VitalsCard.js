import { View } from "react-native";

import { ArrowRightIcon } from "@app/assets/icons";

import { FONT_SIZES, SPACING } from "@app/common/constants/styles";

import {
  Card,
  SubHeadline2,
  Body,
  TextSkeleton,
  Button,
} from "@app/views/components";
import { styles } from "./styles";
import moment from "moment";
import { CmToFtStr, KgToLbsStr } from "@app/common/utils/converter";
import themeColors from "@app/common/theme";

export default function VitalsCard(props) {
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
          {/* Height and Weight */}
          <View style={styles.rowContainer}>
            <View
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderColor: themeColors.backgroundDark,
                marginRight: SPACING.Regular,
              }}>
              {/* Weight  */}
              {!consumerVitals ? (
                <View style={styles.skeleton}>
                  <TextSkeleton fontSize={FONT_SIZES.Medium} />
                </View>
              ) : (
                <Body style={styles.title}>
                  {KgToLbsStr(consumerVitals?.weight) || ""}
                </Body>
              )}
              <View style={styles.rowContainer}>
                {consumerVitals ? (
                  <SubHeadline2>Weight </SubHeadline2>
                ) : (
                  <View style={styles.smallSkeleton}>
                    <TextSkeleton fontSize={FONT_SIZES.Small} />
                  </View>
                )}
              </View>
            </View>
            <View style={{ flex: 1 }}>
              {/* Height  */}
              {!consumerVitals ? (
                <View style={styles.skeleton}>
                  <TextSkeleton fontSize={FONT_SIZES.Medium} />
                </View>
              ) : (
                <Body style={styles.title}>
                  {CmToFtStr(consumerVitals?.height) || ""}
                </Body>
              )}
              <View style={styles.rowContainer}>
                {consumerVitals ? (
                  <SubHeadline2>Height </SubHeadline2>
                ) : (
                  <View style={styles.smallSkeleton}>
                    <TextSkeleton fontSize={FONT_SIZES.Small} />
                  </View>
                )}
              </View>
            </View>
          </View>

          <View style={styles.spacerLine} />
          <View style={styles.rowContainer}>
            <View
              style={{
                flex: 1,
                borderRightWidth: 1,
                borderColor: themeColors.backgroundDark,
                marginRight: SPACING.Regular,
              }}>
              {/* Birthday  */}
              {!consumerVitals ? (
                <View style={styles.skeleton}>
                  <TextSkeleton fontSize={FONT_SIZES.Medium} />
                </View>
              ) : (
                <Body style={styles.title}>
                  {moment(consumerVitals?.birthday).format("MMM DD, YYYY") ||
                    ""}
                </Body>
              )}
              <View style={styles.rowContainer}>
                {consumerVitals ? (
                  <SubHeadline2>Birthday</SubHeadline2>
                ) : (
                  <View style={styles.smallSkeleton}>
                    <TextSkeleton fontSize={FONT_SIZES.Small} />
                  </View>
                )}
              </View>
            </View>
            <View style={{ flex: 1 }}>
              {/* Sex  */}
              {!consumerVitals ? (
                <View style={styles.skeleton}>
                  <TextSkeleton fontSize={FONT_SIZES.Medium} />
                </View>
              ) : (
                <Body style={styles.title}>
                  {(consumerVitals?.sex === "m" ? "Male" : "Female") || ""}
                </Body>
              )}
              <View style={styles.rowContainer}>
                {consumerVitals ? (
                  <SubHeadline2>Sex </SubHeadline2>
                ) : (
                  <View style={styles.smallSkeleton}>
                    <TextSkeleton fontSize={FONT_SIZES.Small} />
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </Card>
      <View style={styles.spacer} />
      <Card>
        <View style={styles.container}>
          {/* Diet Plan  */}
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
          {/* Activity Level  */}
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
      <Button onPress={handlePress}>Change</Button>
    </View>
  );
}
