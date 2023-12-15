// App.js
import React, { useState } from 'react';
import { Howl } from 'howler';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const sound = new Howl({
    src: ['./1.mp3'], // Replace with the path to your actual audio file
    format: ['mp3'],
  });

  const togglePlay = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h1>React Howler Audio Player</h1>
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default App;
