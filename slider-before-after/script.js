const slider = document.querySelector('.slider');
const range = slider.querySelector('.slider__range');

range.addEventListener('input', () => {
  slider.style.setProperty('--value', `${range.value}%`);
});
