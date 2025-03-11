import { View, TouchableOpacity, Image, Text } from "react-native";
import styled from "styled-components";

export const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #17206e;
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

export const LetterText = styled(Text) <{ isWrong?: boolean }>`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.isWrong ? 'red' : 'black'};
`;

export const LetterGrid = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 95%;
  justify-content: flex-end;
  margin-right: 2px;
`;

export const LetterButton = styled(TouchableOpacity)`
  width: 45px;
  height: 40px;
  margin: 2px;
  background-color: #FFFF;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const LetterSelectedButton = styled(TouchableOpacity) <{ isWrong?: boolean }>`
  min-width: 10%;
  width: auto;
  height: auto;
  min-height: 40px;
  margin: 2px;
  background-color: #FFFF;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: ${props => props.isWrong ? '2px solid red' : 'none'};
  shadow-color: ${props => props.isWrong ? 'red' : 'black'};
  shadow-opacity: ${props => props.isWrong ? 0.9 : 0.2};
  shadow-radius: ${props => props.isWrong ? 5 : 3};
`;

export const EraseButton = styled(TouchableOpacity)`
  width: 45px;
  height: 84px;
  margin-vertical: 2px;

  background-color: #39D070;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Column = styled(View)`
  padding: 8px;
  flex-direction: row;

`;
