Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
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

function addBackground(elementId, background, scale) {
    const img = document.createElement('img');
    img.src = background.linkToImage;
    img.style.position = 'absolute';
    img.style.top = '0px';
    img.style.left = '0px';
    img.style.width = (scale * background.widthInPixels) + 'px';
    img.style.height = (scale * background.heightInPixels) + 'px';
    img.style.zIndex = 1;
    document.getElementById(elementId).appendChild(img);
}

function addChest(elementId, background, chest, scale) {
    const img = document.createElement('img');
    img.src = chest.linkToImage;
    img.style.position = 'absolute';
    img.style.left = (scale * background.chest.pixelsFromLeft) + 'px';
    img.style.top = (scale * (background.chest.pixelsFromTop - background.chest.heightInPixels)) + 'px';
    img.style.width = (scale * (background.chest.widthInPixels)) + 'px';
    img.style.height = (scale * (background.chest.heightInPixels)) + 'px';
    img.style.zIndex = 2;
    img.style.cursor = 'zoom-in';
    document.getElementById(elementId).appendChild(img);
    img.onclick = function() {
        alert('hi');
    }
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

function addFireflyGroup(elementId, fireflySettings, fireflyGroup, scale) {
    for (let i = 0; i < fireflyGroup.fireflyCount; i++) {
        const interval = window.setInterval(
            () => {
                const top = vary(fireflyGroup.positionVariation.y, scale * fireflyGroup.pixelsFromTop);
                const left = vary(fireflyGroup.positionVariation.x, scale * fireflyGroup.pixelsFromLeft);
                blink(elementId, fireflySettings, top, left)
            },
            vary(fireflySettings.offTimeVariation, fireflySettings.averageOffSeconds) * 1000
        );
        window.addEventListener('resize', () => window.clearInterval(interval));
    }
}

function addFireflyGroups(elementId, background, scale) {
    for (let i = 0; i < background.fireflyGroups.length; i++) {
        addFireflyGroup(
            elementId,
            background.fireflySettings,
            background.fireflyGroups[i],
            scale
        );
    }
}

function addFireflies(elementId, background, scale) {
    addFireflyGroups(elementId, background, scale);
}