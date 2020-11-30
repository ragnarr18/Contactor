import { View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import styles from './styles';

const addModal = ({ isOpen, closeModel, children }) => (
  <Modal
    style={styles.model}
    animationType="slide"
    transparent={false}
    isVisible={isOpen}
    hasBackdrop
    onBackdropPress={closeModel}
    onDismiss={() => {
    }}
  >
    <View style={styles.body}>
      {children}
    </View>
  </Modal>
);

export default addModal;
