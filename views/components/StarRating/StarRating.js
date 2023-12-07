import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
// Assets
import { StarGradientIcon } from "@app/assets/icons";
import { styles } from "./styles";

export default function StarRating(props) {
  // Props
  const { rating, editable, setCount } = props;

  // Local state
  const [localCount, setLocalCount] = useState(rating);

  // useEffects
  useEffect(() => {
    if (editable) setCount(localCount);
  }, [localCount]);
  useEffect(() => {
    if (rating > -1) setLocalCount(rating);
  }, [rating]);
  return (
    <View style={editable ? styles.editableWrapper : styles.wrapper}>
      {editable && (
        <>
          <Pressable onPress={() => setLocalCount(1)}>
            <StarGradientIcon
              height={35}
              width={35}
              id={"first"}
              percent={localCount >= 1 ? 1 : 0}
            />
          </Pressable>
          <Pressable onPress={() => setLocalCount(2)}>
            <StarGradientIcon
              height={35}
              width={35}
              id={"second"}
              percent={localCount >= 2 ? 1 : 0}
            />
          </Pressable>
          <Pressable onPress={() => setLocalCount(3)}>
            <StarGradientIcon
              height={35}
              width={35}
              id={"third"}
              percent={localCount >= 3 ? 1 : 0}
            />
          </Pressable>
          <Pressable onPress={() => setLocalCount(4)}>
            <StarGradientIcon
              height={35}
              width={35}
              id={"fourth"}
              percent={localCount >= 4 ? 1 : 0}
            />
          </Pressable>
          <Pressable onPress={() => setLocalCount(5)}>
            <StarGradientIcon
              height={35}
              width={35}
              id={"fifth"}
              percent={localCount >= 5 ? 1 : 0}
            />
          </Pressable>
        </>
      )}
      {!editable &&
        Array.from({ length: 5 }, (item, index) => (
          <StarGradientIcon
            key={index}
            id={"f" + index}
            percent={rating - index > 1 ? 1 : rating - index}
          />
        ))}
    </View>
  );
}
