import React, { useEffect } from "react";
import { Image, Pressable, View } from "react-native";
// Theme
import themeColors from "@app/common/theme";
// Constants
import { SPACING } from "@app/common/constants/styles";
// Asssets
import { ImageIcon } from "@app/assets/icons";
// Components
import { Body, CarouselSelect, Title3 } from "@app/views/components";

export default function DietPlan(props) {
  const { dietPlans, diet_plan_id, setDietPlanId } = props;
  if (!dietPlans) return;
  const newData = [];
  dietPlans.map((item) => {
    newData.push({
      key: item.id,
      ...item,
      children: (
        <Pressable
          onPress={() => {
            setDietPlanId(item.id);
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: SPACING.Large,
            borderWidth: 2,
            borderColor:
              diet_plan_id === item.id
                ? themeColors.primary
                : themeColors.backgroundLight,
            backgroundColor: themeColors.background,
          }}>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: item?.background_color
                ? item.background_color
                : themeColors.backgroundLight,
              borderTopLeftRadius: SPACING.Medium,
              borderTopRightRadius: SPACING.Medium,
              padding: SPACING.Medium,
            }}>
            {item?.main_image_link ? (
              <Image
                style={{ width: "100%", height: "100%" }}
                source={{
                  uri: item.main_image_link,
                }}
              />
            ) : (
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <ImageIcon width={SPACING.Huge * 2} height={SPACING.Huge * 2} />
              </View>
            )}
          </View>
          <View
            style={{
              flex: 1,
              padding: SPACING.Medium,
            }}>
            <Title3>{item.name}</Title3>
            <View style={{ width: "100%", height: SPACING.Regular }} />
            <Body>{item.diet_plan_desc}</Body>
          </View>
        </Pressable>
      ),
    });
  });
  useEffect(() => {
    if (!diet_plan_id) setDietPlanId(newData[0].id);
  }, []);
  return <CarouselSelect data={newData} style={{ height: "80%" }} />;
}
