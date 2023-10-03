import { StyleSheet } from "react-native";
import themeColors from "@app/common/theme";
import { ZINDEX } from "@app/common/constants/styles";

const styles = StyleSheet.create({
  view: {
    backgroundColor: `${themeColors.secondary}40`,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: ZINDEX.modal,
    elevation: ZINDEX.modal,
    shadowColor: "#00000000",
  },
  modalView: {
    margin: 20,
    backgroundColor: "black",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default styles;
