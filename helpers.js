Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

function clearAllTimeouts() {
  for (var i = setTimeout(function() {}, 0); i > 0; i--) {
    window.clearInterval(i);
    window.clearTimeout(i);
    if (window.cancelAnimationFrame) window.cancelAnimationFrame(i);
  }
}

function doInPage(actions){
  window.addEventListener('resize', () => {
    document.getElementById("container").innerHTML = "";
    clearAllTimeouts();
    actions();
  });
  actions();
}