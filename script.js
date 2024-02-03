const backgroundMusic = document.getElementById('background');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
  backgroundMusic.play().then(() => {
    backgroundMusic.volume = 1;
  })
  .catch(() => {
    console.warn('Autoplay was prevented. Inform the user that they need to interact to play the music.');
  });
});
const yesMusic = document.getElementById('holy');
const yesButton = document.getElementById('yes-button');

yesButton.addEventListener('click', () => {
  yesMusic.play().then(() => {
    yesMusic.volume = 1;
  })
  .catch(() => {
    console.warn('Autoplay was prevented. Inform the user that they need to interact to play the music.');
  });
});
const noMusic = document.getElementById('naw');
const noButton = document.getElementById('no');

noButton.addEventListener('click', () => {
  noMusic.play().then(() => {
    noMusic.volume = 1;
  })
  .catch(() => {
    console.warn('Autoplay was prevented. Inform the user that they need to interact to play the music.');
  });
});
  





  

