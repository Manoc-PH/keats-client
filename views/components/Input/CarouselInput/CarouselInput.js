import { SPACING } from "@app/common/constants/styles";
import React from "react";
import { FlatList, View } from "react-native";
import Card from "../../Basic/Card";
import Title3 from "../../Basic/Texts/Title3";

import { styles } from "./styles";

export default function CarouselInput(props) {
  // Destructure
  const {
    height,
    // items
  } = props;

  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      desc: "lorem ipsum doler ipsut lorem ipsum doler ipsut lorem ipsum doler ipsut lorem ipsum doler ipsut",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      desc: "lorem ipsum doler ipsut lorem ipsum doler ipsut lorem ipsum doler ipsut lorem ipsum doler ipsut",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      desc: "lorem ipsum doler ipsut lorem ipsum doler ipsut lorem ipsum doler ipsut lorem ipsum doler ipsut",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      title: "Fourth Item",
      desc: "lorem ipsum doler ipsut lorem ipsum doler ipsut lorem ipsum doler ipsut lorem ipsum doler ipsut",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d74",
      title: "Fifth Item",
      desc: "lorem ipsum doler ipsut lorem ipsum doler ipsut lorem ipsum doler ipsut lorem ipsum doler ipsut",
    },
  ];

  return (
    <View {...props} style={{ ...styles.wrapper, ...props.style }}>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={CarouselCard}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        // ItemSeparatorComponent={() => (
        //   <View style={{ width: SPACING.Medium }} />
        // )}
      />
    </View>
  );
}

function CarouselCard(props) {
  const { item } = props;
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <View></View>
          <View>
            <Title3>{item.title}</Title3>
          </View>
        </Card>
      </View>
    </View>
  );
}
