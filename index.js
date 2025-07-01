const btn = document.getElementById('playBtn');
const audio = document.getElementById('cook__audio');

btn.addEventListener('click', () => {
  audio.play();
  btn.textContent = "Relax";
  btn.style.padding = "5px 18px";
});

audio.addEventListener('ended', () => {
  btn.textContent = "Play";
  btn.style.padding = "5px 25px";
})

console.log('I want an example of work on the honor board');