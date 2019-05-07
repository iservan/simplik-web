console.clear();

ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  }
});

Splitting({ target: '.heading' });




ScrollReveal().reveal('.logo', { 
  delay: 700,
  duration: 900,
  easing: 'ease',
  scale: 3,
  mobile: false
});

var slideUp = {
  delay: 1900,
  duration: 500,
  distance: '150%',
  origin: 'bottom'
};

ScrollReveal().reveal('.scroll-down', slideUp);
