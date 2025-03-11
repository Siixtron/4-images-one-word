import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming, 
  Easing 
} from "react-native-reanimated";

const Loader = () => {
  const scale = useSharedValue(1);

  scale.value = withRepeat(
    withTiming(1.5, { duration: 800, easing: Easing.inOut(Easing.ease) }),
    -1,
    true
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Container>
      <AnimatedBall style={animatedStyle} />
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #17206e;
`;

const AnimatedBall = styled(Animated.View)`
  width: 50px;
  height: 50px;
  background-color: #FFFF;
  border-radius: 25px;
`;

export default Loader;
