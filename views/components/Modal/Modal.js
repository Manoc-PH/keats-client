import React from "react";
import { Modal as ModalRn, View } from "react-native";
import styles from "./styles";

function Modal(props) {
  const { isVisible, setIsVisible, content } = props;
  return (
    <ModalRn
      animationType='fade'
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        setIsVisible(!isVisible);
      }}>
      <View style={styles.view}>{content && content}</View>
    </ModalRn>
  );
}

export default Modal;
