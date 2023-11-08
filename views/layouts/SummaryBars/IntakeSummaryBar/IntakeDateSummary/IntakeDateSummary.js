import React, { useEffect, useState } from "react";
import { View } from "react-native";
import moment from "moment";

// Constants
import { FONT_SIZES } from "@app/common/constants/styles";

// Theme
import themeColors from "@app/common/theme";

// Components
import { CircleBar, SubHeadline2, TextSkeleton } from "@app/views/components";

// Assets
import { CheckIcon } from "@app/assets/icons";

import { styles } from "./styles";
export default function IntakeDateSummary(props) {
  // Destructure
  const { isLoading, nutrientSummary, date } = props;

  // Local state
  const [progress, setProgress] = useState();

  // Variables
  const size = styles.itemSpace.width * 0.7;

  // UseEffects
  useEffect(() => {
    if (nutrientSummary)
      setProgress(
        (nutrientSummary?.calories / nutrientSummary?.max_calories) * 100
      );
  }, [nutrientSummary]);
  return (
    <View key={date} style={{ ...styles.barContainer, ...styles.itemSpace }}>
      {/* TODO SET COLOR TO GRAY IF MONTH IS NOT EQUAL TO DATE MONTH */}
      {isLoading && !nutrientSummary && (
        <CircleBar progress={0} size={size}>
          <TextSkeleton
            style={{
              width: styles.itemSpace.width * 0.35,
              height: FONT_SIZES.Tiny * 0.7,
            }}
            fontSize={FONT_SIZES.Small}></TextSkeleton>
        </CircleBar>
      )}
      {!isLoading && !nutrientSummary && date && (
        <CircleBar progress={0} size={size}>
          <SubHeadline2>{moment(date).format("DD")}</SubHeadline2>
        </CircleBar>
      )}
      {nutrientSummary && (
        <>
          {progress > 90 && progress < 110 ? (
            <View style={styles.checkContainer}>
              <CheckIcon color={themeColors.background} />
            </View>
          ) : (
            <CircleBar progress={progress || 0} size={size}>
              <SubHeadline2>{moment(date).format("DD")}</SubHeadline2>
            </CircleBar>
          )}
        </>
      )}
    </View>
  );
}
