import { useEffect, useState } from "react";
import { View, SafeAreaView, TextInput } from "react-native";

import {
  BTN_VARIANTS,
  FONT_SIZES,
  FONT_WEIGHTS,
  SIZES,
} from "@app/common/constants/styles";

import { Button, Txt } from "@app/views/components";
import { SearchIcon, IntakeIcon } from "@app/assets/icons";
import themeColors from "@app/common/theme";

import { styles } from "./styles";

export default function HomeHeader() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [text, onChangeText] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.navContainer}>
          <View
            style={{
              ...styles.titleContainer,
              display: isSearchActive ? "none" : "flex",
            }}>
            <Txt
              style={{
                fontWeight: FONT_WEIGHTS.SemiBold,
                fontSize: FONT_SIZES.ExtraLarge,
              }}>
              KEATS
            </Txt>
          </View>

          <View
            style={[
              styles.searchWrapper,
              isSearchActive && styles.activeSearchWrapper,
            ]}>
            <Button
              style={styles.btnContainer}
              variant={BTN_VARIANTS.transparent}
              size={SIZES.Tiny}
              onPress={() => setIsSearchActive(true)}>
              <SearchIcon
                height={isSearchActive ? 16 : 22}
                width={isSearchActive ? 16 : 22}
                style={{
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
                color={themeColors.secondary}
              />
            </Button>
            {isSearchActive && (
              <TextInput
                onChangeText={onChangeText}
                value={text}
                placeholder='Search for anything...'
                style={{
                  flex: 1,
                  fontSize: FONT_SIZES.Medium,
                  paddingVertical: 4,
                }}
                autoCorrect={false}
              />
            )}
            {!isSearchActive && (
              <Button
                style={styles.btnContainer}
                variant={BTN_VARIANTS.transparent}
                size={SIZES.Tiny}
                onPress={() => alert("Pressed!")}>
                <IntakeIcon color={themeColors.secondary} />
              </Button>
            )}
          </View>
          {isSearchActive && (
            <Button
              style={styles.btnContainer}
              variant={BTN_VARIANTS.transparent}
              size={SIZES.Tiny}
              onPress={() => setIsSearchActive(false)}>
              <Txt>Cancel</Txt>
            </Button>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
