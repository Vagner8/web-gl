import { useState, useEffect } from 'react';
import { throttle } from '../helpers';
import { socket } from '../socket';

interface RandomNumber {
  randomNumber: number;
}

export function useRandomNumber(wait: number) {
  const [isConnected, setIsConnected] = useState(false);
  const [randomNumber, setRandomNumber] = useState(0);
  useEffect(() => {
    const onRandomNumberEvent = throttle(
      ({ randomNumber }: RandomNumber) => setRandomNumber(randomNumber),
      wait
    );
    const onConnect = () => setIsConnected(true);
    const onDisconnect = () => setIsConnected(false);
    socket.connect();
    socket.on('connect', onConnect);
    socket.on('random_number', onRandomNumberEvent);
    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('random_number', onRandomNumberEvent);
    };
  }, [wait]);

  return {
    isConnected,
    randomNumber,
  };
}
