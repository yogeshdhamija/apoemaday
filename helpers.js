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

function doInPage(containerElementId, actions){
  window.addEventListener('resize', () => {
    document.getElementById(containerElementId).innerHTML = "";
    clearAllTimeouts();
    actions();
  });
  actions();
}

function calculateScaling(background) {
    const heightScalingFactor = window.innerHeight / background.heightInPixels;
    if ((heightScalingFactor * background.widthInPixels) > window.innerWidth) {
        return heightScalingFactor;
    } else {
        const widthScalingFactor = window.innerWidth / background.widthInPixels;
        return widthScalingFactor;
    }
}