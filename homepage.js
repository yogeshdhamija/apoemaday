function addBackground(elementId, background, scale) {
    const img = document.createElement('img');
    img.src = 'backgrounds/' + background.linkToImage;
    img.style.position = 'absolute';
    img.style.top = '0px';
    img.style.left = '0px';
    img.style.width = (scale * background.widthInPixels) + 'px';
    img.style.height = (scale * background.heightInPixels) + 'px';
    img.style.zIndex = 1;
    const container = document.getElementById(elementId);
    container.appendChild(img);
    container.style.opacity = 1;
}

function addChest(elementId, background, chest, scale) {
    const img = document.createElement('img');
    img.src = 'chest/' + chest.closed.linkToImage;
    img.style.position = 'absolute';
    img.style.left = (scale * background.chest.pixelsFromLeft) + 'px';
    img.style.top = (scale * (background.chest.pixelsFromTop - background.chest.heightInPixels)) + 'px';
    img.style.width = (scale * (background.chest.widthInPixels)) + 'px';
    img.style.height = (scale * (background.chest.heightInPixels)) + 'px';
    img.style.zIndex = 2;
    img.style.cursor = 'zoom-in';
    const container = document.getElementById(elementId);
    container.appendChild(img);
    img.onclick = function () {
        container.style.opacity = 0;
        window.setTimeout(() => window.location.href="poems", 1000);
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

function blinkNearby(elementId, fireflySettings, fireflyGroup, scale) {
    const top = vary(fireflyGroup.positionVariation.y, scale * fireflyGroup.pixelsFromTop);
    const left = vary(fireflyGroup.positionVariation.x, scale * fireflyGroup.pixelsFromLeft);
    blink(elementId, fireflySettings, top, left)
}

function addFireflyGroup(elementId, fireflySettings, fireflyGroup, scale) {
    const averageFirefliesOn = fireflyGroup.fireflyCount * (fireflySettings.averageOnSeconds / (fireflySettings.averageOffSeconds + fireflySettings.averageOnSeconds));

    for (let i = 0; i < averageFirefliesOn; i++) {
        blinkNearby(elementId, fireflySettings, fireflyGroup, scale);
        const interval = window.setInterval(
            () => blinkNearby(elementId, fireflySettings, fireflyGroup, scale),
            vary(fireflySettings.onTimeVariation/2, fireflySettings.averageOnSeconds/2) * 1000
        );
        window.setTimeout(
            () => window.clearInterval(interval),
            vary(fireflySettings.offTimeVariation/2, fireflySettings.averageOffSeconds/2) * 1000
        );
    }

    for (let i = 0; i < fireflyGroup.fireflyCount; i++) {
        window.setInterval(
            () => blinkNearby(elementId, fireflySettings, fireflyGroup, scale),
            vary(fireflySettings.offTimeVariation, fireflySettings.averageOffSeconds) * 1000
        );
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