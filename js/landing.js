let actual = window.pageYOffset;
window.onscroll = function() {
  let desplazamiento = window.pageYOffset;
  if (actual >= desplazamiento) {
    document.getElementById('hero').style.top = '190px';
  } else {
    document.getElementById('hero').style.top = '-50px';
  }
};
