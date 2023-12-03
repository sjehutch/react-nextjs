'use client';
import { useEffect } from 'react';

function userProgress(setProgress) {
  useEffect(() => {
    const progressTimer = setTimeout(() => {
      setProgress(100);
    }, 0);

    return () => clearTimeout(progressTimer); 
  }, [setProgress]);
}

export default userProgress;