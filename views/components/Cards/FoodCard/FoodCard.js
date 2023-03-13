import { FONT_SIZES } from "@app/common/constants/styles";
import React from "react";
import { View } from "react-native";

// Basic
import Caption1 from "../../Basic/Texts/Caption1";
import Caption2 from "../../Basic/Texts/Caption2";
import TextSkeleton from "../../Skeleton/TextSkeleton";

import { styles } from "./styles";

export default function FoodCard(props) {
  // Destructure
  const { name, name_ph, name_brand, id, thumbnail_link, isLoading } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageContainer}></View>
      <View style={styles.nameContainer}>
        {isLoading ? (
          <View style={styles.titleSkeleton}>
            <TextSkeleton
              style={styles.skeleton}
              fontSize={FONT_SIZES.Medium}
            />
          </View>
        ) : (
          <Caption1 style={styles.title}>
            {name}
            {name_ph && ` - ${name_ph}`}
          </Caption1>
        )}
        {isLoading ? (
          <View style={styles.subHeadlineSkeleton}>
            <TextSkeleton fontSize={FONT_SIZES.Small} />
          </View>
        ) : (
          <Caption2 style={styles.subtitle}>{name_brand}</Caption2>
        )}
      </View>
    </View>
  );
}
