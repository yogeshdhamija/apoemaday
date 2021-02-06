function clearAllTimeouts() {
  for (var i = setTimeout(function() {}, 0); i > 0; i--) {
    window.clearInterval(i);
    window.clearTimeout(i);
    if (window.cancelAnimationFrame) window.cancelAnimationFrame(i);
  }
}