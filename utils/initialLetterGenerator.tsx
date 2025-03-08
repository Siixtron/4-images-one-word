const generateInitialLetters = (inputWord: string) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const initialLetters = inputWord.split('').map((letter, index) => ({
      letter: letter.toUpperCase(),
      id: index,
    }));
  
    const remainingLength = 12 - inputWord.length;
  
    // Add random letters to fill up to 12 while ensuring unique ids
    for (let i = 0; i < remainingLength; i++) {
      const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
      initialLetters.push({ letter: randomLetter, id: inputWord.length + i });
    }
  
    // Shuffle the letters array to randomize their order
    for (let i = initialLetters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [initialLetters[i], initialLetters[j]] = [initialLetters[j], initialLetters[i]];
    }
  
    return initialLetters;
  };
export default generateInitialLetters;