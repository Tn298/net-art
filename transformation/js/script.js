const tvs = document.querySelectorAll('.tv');

tvs.forEach(tv => {
  tv.addEventListener('click', () => {
    tv.classList.toggle('on');
  });
});
