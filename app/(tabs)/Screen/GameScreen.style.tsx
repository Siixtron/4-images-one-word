import { View, TouchableOpacity, Image, Text } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #CCFCCB;
  padding: 20px;
`;

export const ImageGrid = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

export const GameImage = styled(Image)`
  width: 150px;
  height: 110px;
  margin: 5px;
  border-radius: 10px;
`;

export const WordBox = styled(View)`
  paddding: 10px;
  flex-direction: row;
  margin-bottom: 20px;
  margin: 10px;
`;

export const LetterText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

export const LetterGrid = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LetterButton = styled(TouchableOpacity)`
  width: 45px;
  height: 40px;
  margin: 5px;
  background-color: #39D070;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const LetterSelectedButton = styled(TouchableOpacity)`
  min-width: 10%;
  width: auto;
  height: auto;
  min-height: 40px;
  margin: 5px;
  background-color: #39D070;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;