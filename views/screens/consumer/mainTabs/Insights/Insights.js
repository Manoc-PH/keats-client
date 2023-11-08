import { useEffect, useState } from "react";
import { View } from "react-native";
import moment from "moment";

// Constants
import { INTAKE_SUMMARY_TYPES } from "@app/common/constants/options";
import {
  BTN_VARIANTS,
  FONT_SIZES,
  SIZES,
  SPACING,
} from "@app/common/constants/styles";

// Assets
import { ArrowLeftIcon, ArrowRightIcon } from "@app/assets/icons";

// Theme
import themeColors from "@app/common/theme";

// Components
import { Body, Button, Title1 } from "@app/views/components";

// Layouts
import { IntakeSummaryBar, PageDivider, ScrollPage } from "@app/views/layouts";

import { styles } from "./styles";
export default function Insights() {
  // Local States
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));

  // Functions
  function handleBack() {
    if (currentDate) {
      setCurrentDate(
        moment(currentDate).startOf("M").subtract(1, "d").startOf("M")
      );
    } else setCurrentDate(moment().startOf("M").subtract(1, "d").startOf("M"));
  }
  function handleForward() {
    if (currentDate) {
      setCurrentDate(moment(currentDate).endOf("M").add(1, "d").endOf("M"));
    } else setCurrentDate(moment().endOf("M").add(1, "d").endOf("M"));
  }
  return (
    <ScrollPage>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Title1>Month's Insights</Title1>
          <View style={styles.smallSpacer} />
          <Body>
            In this tab, you can see how your dietary habits are changing over
            time.
          </Body>
        </View>
        <PageDivider />
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <Title1 style={{ paddingRight: SPACING.Regular }}>
              {moment(currentDate).format("MMMM YYYY")}
            </Title1>
            <View style={styles.rowContainer}>
              <Button
                size={SIZES.Small}
                style={{ marginRight: SPACING.Small }}
                variant={BTN_VARIANTS.outlined}
                color={themeColors.secondary}
                onPress={handleBack}>
                <ArrowLeftIcon
                  width={FONT_SIZES.Regular}
                  height={FONT_SIZES.Regular}
                  color={themeColors.secondary}
                />
              </Button>
              <Button
                size={SIZES.Small}
                variant={BTN_VARIANTS.outlined}
                color={themeColors.secondary}
                onPress={handleForward}>
                <ArrowRightIcon
                  width={FONT_SIZES.Regular}
                  height={FONT_SIZES.Regular}
                  color={themeColors.secondary}
                />
              </Button>
            </View>
          </View>
          <View style={styles.spacer} />
          <IntakeSummaryBar
            type={INTAKE_SUMMARY_TYPES.monthly}
            monthDate={currentDate}
          />
        </View>
      </View>
    </ScrollPage>
  );
}
