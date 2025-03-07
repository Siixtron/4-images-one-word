import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #1a1a3d;
  padding: 20px;
`;

const ImageGrid = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

const GameImage = styled(Image)`
  width: 150px;
  height: 110px;
  margin: 5px;
  border-radius: 10px;
`;

const WordBox = styled(View)`
  flex-direction: row;
  margin-bottom: 20px;
`;

const LetterText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

const LetterGrid = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const LetterButton = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  margin: 5px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const HomeScreen = () => {
  const correctAnswer = ['D', 'O', 'O', 'R'];
  const WordLength = Array(correctAnswer.length).fill('');
  const RandomLetter = ['E', 'R', 'O', 'S', 'I', 'R', 'R', 'E', 'M', 'F', 'A', 'D', 'J','H']
  const [availableLetters, setAvailableLetters] = useState<string[]>(RandomLetter);
  const [pickedLetters, setPickedLetters] = useState<{ letter: string; index: number }[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<string[]>(WordLength);

  const handleLetterPress = (letter: string, index: number) => {
    const emptyIndex = selectedLetters.indexOf('');
    const prevAvailableLetter = [...availableLetters];
    const prevSelectedLetter = [...selectedLetters];
    prevSelectedLetter[emptyIndex] = letter;
    setSelectedLetters(prevSelectedLetter);
    prevAvailableLetter[index] = '';
    setAvailableLetters(prevAvailableLetter);
    setPickedLetters([...pickedLetters, { letter, index }]);
    console.log(pickedLetters);
  };

  const handleUnselectedLetter = (letter: string, index: number) => {
    const prevSelectedLetter = [...selectedLetters];  
    prevSelectedLetter[index] = '';
    setSelectedLetters(prevSelectedLetter);
  
    const prevAvailableLetter = [...availableLetters];
    prevAvailableLetter[index] = letter;
    setAvailableLetters(prevAvailableLetter);
  
    setPickedLetters(pickedLetters.filter(p => p.letter !== letter));
  };

  const checkAnswer = () => {
    if (selectedLetters.join('') === correctAnswer.join('')) {
      Alert.alert('Correct!', 'You guessed the right word!');
    } else {
      Alert.alert('Try Again!', 'Incorrect guess, try again.');
      setSelectedLetters(WordLength);
    }
  };

  return (
    <Container>
      <ImageGrid>
        <GameImage source={{ uri: Image.resolveAssetSource(require('../../assets/images/icon.png')).uri }} />
        <GameImage source={{ uri: Image.resolveAssetSource(require('../../assets/images/icon.png')).uri }} />
        <GameImage source={{ uri: Image.resolveAssetSource(require('../../assets/images/icon.png')).uri }} />
        <GameImage source={{ uri: Image.resolveAssetSource(require('../../assets/images/icon.png')).uri }} />
      </ImageGrid>
      
      <WordBox>
        {selectedLetters.map((letter, index) => (
          <LetterButton key={index} onPress={() => handleUnselectedLetter(letter, index)}>
            <LetterText>{letter || ''}</LetterText>
          </LetterButton>
        ))}
      </WordBox>

      <LetterGrid>
        {availableLetters.map((letter, index) => (
          <LetterButton key={index} onPress={() => handleLetterPress(letter, index)}>
            <LetterText>{letter}</LetterText>
          </LetterButton>
        ))}
      </LetterGrid>

      <TouchableOpacity onPress={checkAnswer} style={{ marginTop: 20, backgroundColor: '#ffcc00', padding: 15, borderRadius: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Submit</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default HomeScreen;
