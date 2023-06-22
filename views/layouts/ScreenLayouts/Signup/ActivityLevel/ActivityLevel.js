import React, { useEffect } from "react";
import { Image, Pressable, View } from "react-native";
// Components
import { Body, CarouselSelect, Title3 } from "@app/views/components";
// Theme
import themeColors from "@app/common/theme";
// Constants
import { SPACING } from "@app/common/constants/styles";

export default function ActivityLevel(props) {
  const { activityLevels, activity_lvl_id, setActivityLvlId } = props;
  if (!activityLevels) return;
  const newData = [];
  activityLevels.map((item) => {
    newData.push({
      key: item.id,
      ...item,
      children: (
        <Pressable
          onPress={() => {
            setActivityLvlId(item.id);
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: SPACING.Large,
            borderWidth: 2,
            borderColor:
              activity_lvl_id === item.id
                ? themeColors.primary
                : themeColors.backgroundLight,
            backgroundColor: themeColors.background,
          }}>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: item.background_color,
              borderTopLeftRadius: SPACING.Medium,
              borderTopRightRadius: SPACING.Medium,
              padding: SPACING.Medium,
            }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={{
                uri: item.main_image_link,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              padding: SPACING.Medium,
            }}>
            <Title3>{item.name}</Title3>
            <View style={{ width: "100%", height: SPACING.Regular }} />
            <Body>{item.activity_lvl_desc}</Body>
          </View>
        </Pressable>
      ),
    });
  });
  useEffect(() => {
    if (!activity_lvl_id) setActivityLvlId(newData[0].id);
  }, []);
  return <CarouselSelect data={newData} style={{ height: "80%" }} />;
}
