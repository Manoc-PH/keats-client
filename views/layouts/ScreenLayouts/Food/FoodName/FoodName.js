import { useEffect, useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import { Caption2, Title3 } from "@app/views/components";

export default function FoodName() {
  // Store State
  const { foodDetails } = useSelector((state) => state.food);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {foodDetails && (
          <>
            <Title3>
              {foodDetails.name}
              {foodDetails?.name_ph && `- ${foodDetails.name_ph}`}
            </Title3>
            <Caption2 style={styles.brandname}>
              {foodDetails.name_brand}
            </Caption2>
          </>
        )}
      </View>
    </View>
  );
}
