import { CommonActions, useNavigation } from "@react-navigation/native";

const reloadScreen = () => {
  const navigation = useNavigation();
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: navigation.getCurrentRoute().name }],
    })
  );
};

export { reloadScreen };
