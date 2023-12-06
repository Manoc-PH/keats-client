import React from "react";
import { Dimensions, Image, View } from "react-native";
// Components
import { Body, CarouselImage } from "@app/views/components";
// Theme
import themeColors from "@app/common/theme";
// Constants
import { SPACING } from "@app/common/constants/styles";

export default function ImagesCarousel(props) {
  const { data } = props;
  if (!data) return;

  const { width } = Dimensions.get("window");
  const newData = [];
  data.map((item) => {
    newData.push({
      key: item.id,
      ...item,
      children: (
        <View
          style={{
            width: width,
            height: width,
            position: "relative",
          }}>
          <Image
            style={{ width: width, height: width }}
            source={{
              uri: item?.name_url ? item.name_url : "",
            }}
          />
          <View
            style={{
              position: "absolute",
              top: SPACING.Regular,
              left: SPACING.Regular,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: `${themeColors.secondary}50`,
              paddingHorizontal: SPACING.Regular,
              paddingVertical: SPACING.Tiny,
              borderRadius: SPACING.Tiny,
            }}>
            <Body style={{ color: themeColors.background }}>{item.amount}</Body>
          </View>
        </View>
      ),
    });
  });
  return <CarouselImage data={newData} />;
}
