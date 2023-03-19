import { View } from "react-native";

import { styles } from "./styles";
import { Caption2, TextSkeleton, Title3 } from "@app/views/components";
import { FONT_SIZES } from "@app/common/constants/styles";

export default function FoodName(props) {
  const { foodDetails } = props;

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
        {!foodDetails && (
          <>
            <View style={styles.titleSkeleton}>
              <TextSkeleton fontSize={FONT_SIZES.Medium} />
            </View>
            <View style={styles.titleSkeleton}>
              <TextSkeleton fontSize={FONT_SIZES.Medium} />
            </View>
            <View style={styles.brandnameSkeleton}>
              <TextSkeleton fontSize={FONT_SIZES.Tiny} />
            </View>
          </>
        )}
      </View>
    </View>
  );
}
