import React, { useEffect, useState } from 'react';
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
  width: 45px;
  height: 40px;
  margin: 5px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const HomeScreen = () => {
  const correctAnswer: string[] = ['D', 'O', 'O', 'R'];
  const initialLetters: { letter: string; id: number; }[] = [
    { letter: 'E', id: 0 }, { letter: 'R', id: 1 }, { letter: 'O', id: 2 },
    { letter: 'S', id: 3 }, { letter: 'I', id: 4 }, { letter: 'R', id: 5 },
    { letter: 'R', id: 6 }, { letter: 'E', id: 7 }, { letter: 'M', id: 8 },
    { letter: 'F', id: 9 }, { letter: 'A', id: 10 }, { letter: 'D', id: 11 },
  ];

  const [availableLetters, setAvailableLetters] = useState(initialLetters);
  const [selectedLetters, setSelectedLetters] = useState(Array(correctAnswer.length).fill(''));

  const handleLetterPress = (selectedLetter: { letter: string; id: number; }) => {
    const emptyIndex = selectedLetters.indexOf('');
  
    setSelectedLetters((prev) => {
      const newSelected = [...prev];
      newSelected[emptyIndex] = selectedLetter;
      return newSelected;
    });

    setAvailableLetters((prev) =>
      prev.map((letter) => (letter.id === selectedLetter.id ? { ...letter, letter: '' } : letter))
    );
  };
  
  const handleUnselectedLetter = (removedLetter: { id: number; letter: string; }) => {
    setSelectedLetters((prev) =>
      prev.map((letter) => (letter.id === removedLetter.id ? '' : letter))
    );
  
    setAvailableLetters((prev) =>
      prev.map((letter) => (letter.id === removedLetter.id ? { ...letter, letter: removedLetter.letter } : letter))
    );
  };

  
  useEffect(() => {
    if (!selectedLetters.includes('')) {
      if(selectedLetters.join('') === correctAnswer.join('')) {
        Alert.alert('Correct!', 'You guessed the right word!');
      } else {
        Alert.alert('Try Again!', 'Incorrect guess, try again.');
        setSelectedLetters(Array(correctAnswer.length).fill(''));
        setAvailableLetters(initialLetters.map((letter) => ({ ...letter, letter: letter.letter }))); // Reset available letters
      }
    }
  }, [selectedLetters]);

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
          <LetterButton key={index} onPress={() => handleUnselectedLetter(letter)}>
            <LetterText>{letter?.letter}</LetterText>
          </LetterButton>
        ))}
      </WordBox>

      <LetterGrid>
        {availableLetters.map((letter) => (
          <LetterButton disabled={letter.letter === '' || !selectedLetters.includes('')} key={letter.id} onPress={() => handleLetterPress(letter)}>
            <LetterText>{letter?.letter}</LetterText>
          </LetterButton>
        ))}
      </LetterGrid>
    </Container>
  );
};

export default HomeScreen;
