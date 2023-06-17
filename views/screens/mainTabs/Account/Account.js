import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Store
import { actions } from "@app/core/store";
// Hooks
import { useGetConsumerVitals } from "@app/core/hooks/api";
// Layouts
import { PageDivider, ScrollPage, VitalsCard } from "@app/views/layouts";

import { styles } from "./styles";
import { useEffect } from "react";

export default function Account() {
  // Store State
  const { consumerVitals } = useSelector((state) => state.account);

  // Store Actions
  const { setConsumerVitals: savs } = actions;
  const dispatch = useDispatch();
  const setConsumerVitals = (v) => dispatch(savs(v));

  // Hooks
  const {
    getConsumerVitals,
    getConsumerVitalsData,
    isGetConsumerVitalsSuccess,
  } = useGetConsumerVitals();

  // UseEffects
  useEffect(() => {
    if (!consumerVitals) getConsumerVitals();
  }, []);
  useEffect(() => {
    if (isGetConsumerVitalsSuccess) setConsumerVitals(getConsumerVitalsData);
  }, [getConsumerVitalsData]);

  return (
    <ScrollPage>
      <View style={styles.wrapper}>
        <View style={styles.spacer} />
        <PageDivider />
        <View style={styles.container}>
          <VitalsCard consumerVitals={consumerVitals} />
        </View>
      </View>
    </ScrollPage>
  );
}
