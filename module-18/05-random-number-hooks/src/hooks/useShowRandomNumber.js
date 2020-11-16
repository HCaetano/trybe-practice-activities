import { useState, useEffect } from 'react';

const useShowRandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    setInterval(setRandomNumber(Math.random * 100), 10000)
  }, randomNumber)

  return randomNumber;
}

export default useShowRandomNumber;