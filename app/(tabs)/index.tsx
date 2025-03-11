import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Text } from 'react-native';
import GameScreen from './Screen/GameScreen';
import Loader from '@/components/Loader';
import fetcher from '@/api/Fetcher';
import useSWR from 'swr';
import generateInitialLetters from '@/utils/initialLetterGenerator';

const HomeScreen = () => {

  
  const { data: word, error: wordError, isLoading: wordLoading , mutate: fetchNewWord } = useSWR(
    `https://random-word-api.vercel.app/api?words=1&length=${Math.floor(Math.random() * 5) + 3}`,
    fetcher
  );
  const { data: images, error: imagesError, isLoading: imagesLoading } = useSWR(
    word ? `https://api.pexels.com/v1/search?query=${word[0]}&per_page=4` : null,
    fetcher
  );
  if (wordLoading || imagesLoading) {
    return <Loader />;
  }
  if (wordError || imagesError) {
    Alert.alert('Error', 'Failed to load data');
  }

  const initialLetters = generateInitialLetters(word[0]);

  return <GameScreen word={word} images={images?.photos} fetchNewWord={fetchNewWord} initialLetters={initialLetters}/>;
};

export default HomeScreen;

