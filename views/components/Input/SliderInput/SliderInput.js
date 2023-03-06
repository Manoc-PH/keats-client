import React, { useEffect, useState } from "react";
import { View, TextInput, FlatList } from "react-native";

import { styles } from "./styles";
import SubHeadline1 from "../../Basic/Texts/SubHeadline1/SubHeadline1";
import Title1 from "../../Basic/Texts/Title1";
import { SPACING } from "@app/common/constants/styles";

// TODO MAKE SLIDER INPUT WORK
export default function SliderInput(props) {
  // Destructure
  const {
    minValue,
    maxValue,
    incValue,
    initialIndex,
    value,
    onChangeText,
    suffix,
    label,
    ...rest
  } = props;

  const [data, setData] = useState();

  function formatData() {
    const tempData = [];
    for (let i = minValue; i <= maxValue; i += incValue) {
      tempData.push(i);
    }
    setData(tempData);
  }
  const width = SPACING.Regular * 3 + SPACING.Regular * 4 + SPACING.Huge;
  function print(changed, viewableItems) {
    console.log(changed, viewableItems);
  }
  useEffect(() => formatData(), []);
  return (
    <View style={styles.wrapper}>
      {label && (
        <View style={styles.labelContainer}>
          <SubHeadline1>{label}</SubHeadline1>
        </View>
      )}
      <View style={styles.container}>
        {data && (
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item}
            initialScrollIndex={initialIndex}
            // getItemLayout={(data, index) => ({
            //   length: 92,
            //   offset: 92 * index,
            //   index,
            // })}
            bounces={false}
            decelerationRate={"normal"}
            snapToAlignment='start'
            snapToInterval={width}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.itemContainer}>
                  <View style={styles.itemSpacingLeft} />
                  <View style={styles.itemSpacingLeft} />
                  <View style={styles.item}>
                    <Title1>{item}</Title1>
                  </View>
                  <View style={styles.itemSpacingRight} />
                  <View style={styles.itemSpacingRight} />
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
}
