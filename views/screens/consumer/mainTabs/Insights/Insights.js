import { useEffect, useState } from "react";
import { View } from "react-native";
import moment from "moment";

// Constants
import { INTAKE_SUMMARY_TYPES } from "@app/common/constants/options";

// Components
import { Body, Button, Title1 } from "@app/views/components";

// Layouts
import { IntakeSummaryBar, PageDivider, ScrollPage } from "@app/views/layouts";

import { styles } from "./styles";
import {
  BTN_VARIANTS,
  FONT_SIZES,
  SIZES,
  SPACING,
} from "@app/common/constants/styles";
import themeColors from "@app/common/theme";
import { ArrowLeftIcon, ArrowRightIcon } from "@app/assets/icons";
export default function Insights() {
  // Local States
  const [currentDate, setCurrentDate] = useState(moment().format("YYYY-MM-DD"));

  // UseEffects
  useEffect(() => {}, []);
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
                color={themeColors.secondary}>
                <ArrowLeftIcon
                  width={FONT_SIZES.Regular}
                  height={FONT_SIZES.Regular}
                  color={themeColors.secondary}
                />
              </Button>
              <Button
                size={SIZES.Small}
                variant={BTN_VARIANTS.outlined}
                color={themeColors.secondary}>
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
