const btn = document.getElementById('playBtn');
const audio = document.getElementById('cook__audio');
const photo = document.getElementById('photo-container');

btn.addEventListener('click', () => {
  audio.play();
  btn.textContent = "Relax";
  btn.style.padding = "5px 18px";
  photo.classList.add('change__photo');
});

audio.addEventListener('ended', () => {
  btn.textContent = "Play";
  btn.style.padding = "5px 25px";
  photo.classList.remove('change__photo');
})

console.log('I want an example of work on the honor board');