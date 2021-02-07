Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

function clearAllTimeouts() {
    for (var i = setTimeout(function () { }, 0); i > 0; i--) {
        window.clearInterval(i);
        window.clearTimeout(i);
        if (window.cancelAnimationFrame) window.cancelAnimationFrame(i);
    }
}

function doInPage(containerElementId, actions) {
    window.addEventListener('resize', () => {
        document.getElementById(containerElementId).innerHTML = "";
        clearAllTimeouts();
        actions();
    });
    actions();
}

function calculateScaling(background) {
    const y = window.innerHeight / background.heightInPixels;
    const x = window.innerWidth / background.widthInPixels;
    let combined;
    if ((y * background.widthInPixels) > window.innerWidth) {
        combined = y;
    } else {
        combined = x;
    }
    return { y, x, combined }
}

function randomBetween(smaller, larger) {
    return (Math.random() * (larger - smaller)) + smaller;
}

function vary(variation, average) {
    return (randomBetween(-1, 1) * variation) + average;
}

function blink(elementId, fireflySettings, pixelsFromTop, pixelsFromLeft) {
    const blink = document.createElement('div');
    blink.style.position = 'absolute';
    blink.style.zIndex = 3;
    blink.style.opacity = '0';
    blink.style.backgroundColor = 'yellow';
    blink.style.animationName = 'firefly, ' + ['up', 'down'].random() + ', ' + ['left', 'right'].random();
    blink.style.borderRadius = '500px';

    blink.style.top = pixelsFromTop + 'px';
    blink.style.left = pixelsFromLeft + 'px';

    const size = vary(fireflySettings.sizeVariation, fireflySettings.averageSizeInPixels) + 'px';
    blink.style.height = size;
    blink.style.width = size;

    const blurRadius = vary(fireflySettings.blurSizeVariation, fireflySettings.averageBlurSizeInPixels) + 'px ';
    blink.style.boxShadow = "0px 0px " + blurRadius + blurRadius + "yellow";

    blink.style.animationDuration = vary(fireflySettings.onTimeVariation, fireflySettings.averageOnSeconds) + 's';
    blink.style.animationIterationCount = '1';
    document.getElementById(elementId).appendChild(blink);
    window.setTimeout(
        () => blink.remove(),
        1000 * (fireflySettings.averageOnSeconds + fireflySettings.onTimeVariation)
    );
}

function blinkNearby(elementId, fireflySettings, fireflyGroup, scaleX, scaleY) {
    const top = vary(fireflyGroup.positionVariation.y, scaleY * fireflyGroup.pixelsFromTop);
    const left = vary(fireflyGroup.positionVariation.x, scaleX * fireflyGroup.pixelsFromLeft);
    blink(elementId, fireflySettings, top, left)
}

function addFireflyGroup(elementId, fireflySettings, fireflyGroup, scaleX, scaleY) {
    const averageFirefliesOn = fireflyGroup.fireflyCount * (fireflySettings.averageOnSeconds / (fireflySettings.averageOffSeconds + fireflySettings.averageOnSeconds));

    for (let i = 0; i < averageFirefliesOn; i++) {
        blinkNearby(elementId, fireflySettings, fireflyGroup, scaleX, scaleY);
        const interval = window.setInterval(
            () => blinkNearby(elementId, fireflySettings, fireflyGroup, scaleX, scaleY),
            vary(fireflySettings.onTimeVariation / 2, fireflySettings.averageOnSeconds / 2) * 1000
        );
        window.setTimeout(
            () => window.clearInterval(interval),
            vary(fireflySettings.offTimeVariation / 2, fireflySettings.averageOffSeconds / 2) * 1000
        );
    }

    for (let i = 0; i < fireflyGroup.fireflyCount; i++) {
        window.setInterval(
            () => blinkNearby(elementId, fireflySettings, fireflyGroup, scaleX, scaleY),
            vary(fireflySettings.offTimeVariation, fireflySettings.averageOffSeconds) * 1000
        );
    }
}

function addFireflyGroups(elementId, background, scaleX, scaleY) {
    for (let i = 0; i < background.fireflyGroups.length; i++) {
        addFireflyGroup(
            elementId,
            background.fireflySettings,
            background.fireflyGroups[i],
            scaleX,
            scaleY
        );
    }
}