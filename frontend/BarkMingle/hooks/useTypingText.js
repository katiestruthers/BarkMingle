import { useState, useEffect, useRef } from "react";
// source: https://www.letsbuildui.dev/articles/a-typing-text-effect-with-react-hooks/'

const forward = "forward";
const backward = "backward";

export const useTypingText = (words, keySpeed, maxPauseAmount) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[wordIndex].split(""));

  const direction = useRef("");
  const typingInterval = useRef();
  const letterIndex = useRef();

  useEffect(() => {
    let pauseCounter = 0;

    const typeLetter = () => {
      if (letterIndex.current >= words[wordIndex].length) {
        direction.current = backward;

        pauseCounter = maxPauseAmount;
        
        return;
      }
      const segment = words[wordIndex].split("");
      setCurrentWord(currentWord.concat(segment[letterIndex.current]));
      letterIndex.current = letterIndex.current + 1;
    };

    const backspace = () => {
      if (letterIndex.current === 0) {
        const isOnLastWord = wordIndex === words.length - 1;

        setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
        direction.current = forward;

        return;
      }
      const segment = currentWord.slice(0, currentWord.length - 1);
      setCurrentWord(segment);
      letterIndex.current = currentWord.length - 1;
    };

    typingInterval.current = setInterval(() => {
      // keeps the word in a paused state until counter hits 0
      if (pauseCounter > 0) {
        pauseCounter = pauseCounter - 1;
        return;
      }
      if (direction.current === forward) {
        typeLetter();
      } else {
        backspace();
      }
    }, keySpeed);
    return () => {
      clearInterval(typingInterval.current);
    };
  }, [currentWord, wordIndex, keySpeed, words, maxPauseAmount]);

  return {
    word: currentWord,
  };
};
