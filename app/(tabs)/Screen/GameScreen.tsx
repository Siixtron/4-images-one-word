import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import GameModal from '@/components/Modal';
import uuid from 'react-native-uuid';
import { Container, GameImage, ImageGrid, LetterButton, LetterGrid, LetterSelectedButton, LetterText, WordBox } from './GameScreen.style';


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
      if(selectedLetters.map((letter) => letter.letter).join('') === correctAnswer.join('') && !!selectedLetters && !!correctAnswer) {
        setModalVisible(true);
      } else {
        Alert.alert('Try Again!', 'Incorrect guess, try again.');
        setSelectedLetters(Array(correctAnswer.length).fill(''));
        setAvailableLetters(initialLetters.map((letter) => ({ ...letter, letter: letter.letter }))); 
      }
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
      
      <WordBox>
        {selectedLetters.map((letter, index) => (
          <LetterSelectedButton key={index} onPress={() => handleUnselectedLetter(letter)}>
            <LetterText>{letter?.letter}</LetterText>
          </LetterSelectedButton>
        ))}
      </WordBox>

      <LetterGrid>
        {availableLetters.map((letter) => (
          <LetterButton disabled={letter.letter === '' || !selectedLetters.includes('')} key={letter.id} onPress={() => handleLetterPress(letter)}>
            <LetterText>{letter?.letter}</LetterText>
          </LetterButton>
        ))}
      </LetterGrid>

      <GameModal
        visible={modalVisible} 
        onClose={() => {
          setModalVisible(false); 
          fetchNewWord();
        }} 
        label="Bien joué ! Niveau Suivant ?" 
      />
      {/* <Button title='Restart' onPress={fetchNewWord}/> */}
    </Container>
  );
};

export default GamesScreen;


