import { View } from "react-native";

// Constants
import { FONT_SIZES } from "@app/common/constants/styles";

// Components
import { TextSkeleton, Title3 } from "@app/views/components";

import { styles } from "./styles";

export default function FoodName(props) {
  // Props
  const { food, isLoading, style } = props;

  return (
    <View style={{ ...styles.wrapper, ...style }}>
      <View>
        {!isLoading && food && (
          <>
            <Title3>
              {food?.name}
              {food?.name_ph && ` (${food.name_ph})`}
              {food.name_owner && (
                <>
                  {` - `}
                  <Title3 style={styles.brandname}> {food.name_owner}</Title3>
                </>
              )}
            </Title3>
          </>
        )}
        {isLoading && (
          <>
            <View style={styles.titleSkeleton}>
              <TextSkeleton fontSize={FONT_SIZES.Medium} />
            </View>
          </>
        )}
      </View>
    </View>
  );
}
