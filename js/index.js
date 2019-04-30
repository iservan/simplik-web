console.clear();

ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  }
});

Splitting({ target: '.heading' });

var mouse;


/*function mouse_timeout() {
  mouse = setTimeout(
     document.getElementById('scroll-downs').style.opacity="1", 2000);
}

function myStopFunction() {
  clearTimeout(mouse);
}
mouse_timeout();
*/