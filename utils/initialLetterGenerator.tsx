const generateInitialLetters = (inputWord: string) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const initialLetters = inputWord.split('').map((letter, index) => ({
      letter: letter.toUpperCase(),
      id: index,
    }));
  
    const remainingLength = 12 - inputWord.length;
  
    for (let i = 0; i < remainingLength; i++) {
      const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      initialLetters.push({ letter: randomLetter, id: inputWord.length + i });
    }
  
    initialLetters.sort(() => Math.random() - 0.5);

  
    return initialLetters;
  };
export default generateInitialLetters;