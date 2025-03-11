import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'react-native';
import GameModal from '@/components/Modal';
import uuid from 'react-native-uuid';
import { Column, Container, EraseButton, GameImage, ImageGrid, LetterButton, LetterGrid, LetterSelectedButton, LetterText, WordBox } from './GameScreen.style';
import Animated, { useSharedValue, withSequence, withRepeat, withTiming, useAnimatedStyle } from 'react-native-reanimated';


const GamesScreen = (
  { word, images, initialLetters, fetchNewWord  }: {
    word: any,
    images: any[],
    initialLetters: { letter: string; id: number; }[],
    fetchNewWord: () => void,
  }) => {
  const correctAnswer: string[] = word[0]?.toUpperCase().split('') || [];
  const [modalVisible, setModalVisible] = useState(false);
  const [availableLetters, setAvailableLetters] = useState(initialLetters);
  const [selectedLetters, setSelectedLetters] = useState(Array(correctAnswer.length).fill(''));
  const [isWrong, setIsWrong] = useState(false);
  const isCorrect = selectedLetters.map((letter) => letter.letter).join('') === correctAnswer.join('') && !!selectedLetters;

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

  const handleClear = () => {
    setSelectedLetters(correctAnswer.fill('')); 
    setAvailableLetters(initialLetters);
  }

  const shakeAnimation = useSharedValue(2);

  const triggerShake = () => {
    shakeAnimation.value = withSequence(
      withRepeat(withTiming(10, { duration: 200 }), 6, true),
    );
  };

  const animatedWordBoxStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shakeAnimation.value }],

  }));

  useEffect(() => {
    if (!selectedLetters.includes('')) {
      if(isCorrect) {
        setModalVisible(true);
      } else {
        setIsWrong(true);
        triggerShake();
      }
    } else {
      setIsWrong(false);
    }
  }, [selectedLetters]);

  console.log(correctAnswer)


  return (
    <Container>
      <ImageGrid>
        {images?.map((image) => (
          <GameImage key={uuid.v4()} source={{ uri: image.src.tiny }} />
        ))}
      </ImageGrid>
      
      <Animated.View style={animatedWordBoxStyle}>
      <WordBox>
        {selectedLetters.map((letter, index) => (
          <LetterSelectedButton isWrong={isWrong} key={index} onPress={() => handleUnselectedLetter(letter)}>
            <LetterText>{letter?.letter}</LetterText>
          </LetterSelectedButton>
        ))}
      </WordBox>
      </Animated.View>

      <Column>
      <LetterGrid>
        {availableLetters.map((letter) => (
          <LetterButton disabled={letter.letter === '' || !selectedLetters.includes('')} key={letter.id} onPress={() => handleLetterPress(letter)}>
            <LetterText>{letter?.letter}</LetterText>
          </LetterButton>
        ))}
      </LetterGrid>

      <EraseButton onPress={handleClear}>
          <LetterText>Clear</LetterText>
      </EraseButton>
      </Column>

      {isCorrect && <GameModal
        visible={modalVisible} 
        onClose={() => {
          setModalVisible(false); 
          fetchNewWord();
        }}
        label="Next Level" /> 
      }
    </Container>
  );
};

export default GamesScreen;


