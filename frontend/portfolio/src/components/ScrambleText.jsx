import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrambleText = () => {
  const codeletters = "&#*+%?£@§$";
  const messages = ['Evgenia Melnikova'];
  const [scrambled, setScrambled] = useState('');
  const [isScrambling, setIsScrambling] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  // Function to generate a random string of a given length
  const generateRandomString = (length) => {
    let randomText = '';
    while (randomText.length < length) {
      randomText += codeletters.charAt(Math.floor(Math.random() * codeletters.length));
    }
    return randomText;
  };

  // Function to animate in the letters
  const animateIn = (currentMessage, length) => {
    if (length <= currentMessage.length) {
      // Generate random text based on the current length
      const randomText = generateRandomString(length);
      setScrambled(randomText); // Set the scrambled text
      setTimeout(() => animateIn(currentMessage, length + 1), 50); // Increase the length
    } else {
      setScrambled(currentMessage); // Show the actual message
      setIsScrambling(false); // Stop scrambling
      setTimeout(cycleText, 2000); // Wait before cycling to the next message
    }
  };

  // Function to cycle through messages
  const cycleText = () => {
    setMessageIndex((prev) => (prev + 1) % messages.length);
    const currentMessage = messages[messageIndex];
    setScrambled(''); // Clear the scrambled text
    setIsScrambling(true);
    animateIn(currentMessage, 1); // Start animating in the letters
  };

  useEffect(() => {
    const currentMessage = messages[messageIndex];
    if (isScrambling) {
      animateIn(currentMessage, 1); // Start scrambling when isScrambling is true
    }
  }, [messageIndex, isScrambling]); // Added isScrambling to dependencies

  useEffect(() => {
    cycleText(); // Start cycling through the text
  }, []);

  return (
    <div>
      <h1>
        <motion.span
          key={scrambled}
          initial={{ opacity: 0 }}
          animate={{ opacity: 8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.10 }}
          className="shadow-[inset_0px_-6px_0px_#7e22ce]"
        >
          {scrambled}
        </motion.span>
      </h1>
    </div>
  );
};

export default ScrambleText;

