import React, { useState } from "react";
import { Modal as ModalRn, Text, Pressable, View } from "react-native";
import styles from "./styles";

function Modal(props) {
  const { isVisible, setIsVisible, content } = props;
  return (
    <View style={styles.centeredView}>
      <ModalRn
        animationType='fade'
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(!isVisible);
        }}>
        <View style={styles.view}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setIsVisible(!isVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </ModalRn>
    </View>
  );
}

export default Modal;
