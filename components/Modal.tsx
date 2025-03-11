import React, { useEffect } from "react";
import { Modal, TouchableOpacity, View, Text } from "react-native";
import styled from "styled-components";
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming, 
  Easing 
} from "react-native-reanimated";

const GameModal = ({ visible, onClose, label }: { visible: boolean; onClose: () => void; label: string }) => {
  const translateY = useSharedValue(300);

  useEffect(() => {
    if (visible) {
      translateY.value = withTiming(0, { duration: 700, easing: Easing.out(Easing.ease) });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <Modal transparent={true} visible={visible} animationType="none">
      <ModalContainer>
        <AnimatedModalContent style={animatedStyle}>
          <ModalText>{label}</ModalText>
          <CloseButton onPress={onClose}>
            <CloseButtonText>Close</CloseButtonText>
          </CloseButton>
        </AnimatedModalContent>
      </ModalContainer>
    </Modal>
  );
};

// Styled Components
const ModalContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #00000099; /* Semi-transparent black */
`;

const AnimatedModalContent = styled(Animated.View)`
  width: 100%;
  height: 200px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #17206e;
  padding: 20px;
  margin-bottom: 20px;
`;

const ModalText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #FFFF;
`;

const CloseButton = styled(TouchableOpacity)`
  padding: 10px;
  background-color: red;
  border-radius: 5px;
`;

const CloseButtonText = styled(Text)`
  color: #ffffff;
  font-size: 16px;
`;

export default GameModal;
