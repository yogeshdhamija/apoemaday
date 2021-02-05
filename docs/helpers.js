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
    document.getElementById(elementId).appendChild(img);
}

function randomBetween(smaller, larger) {
    return (Math.random() * (larger - smaller)) + smaller;
}

function vary(variation, average) {
    return (randomBetween(-1, 1) * variation) + average;
}

function blink(elementId, fireflies, pixelsFromTop, pixelsFromLeft) {
    const img = document.createElement('div');
    img.style.position = 'absolute';
    img.style.zIndex = 3;
    img.style.opacity = '0';
    img.style.animationName = 'firefly, ' + ['up', 'down'].random() + ', ' + ['left', 'right'].random();

    img.style.top = pixelsFromTop + 'px';
    img.style.left = pixelsFromLeft + 'px';

    const size = vary(fireflies.sizeVariation, fireflies.averageSizeInPixels) + 'px';
    img.style.height = size;
    img.style.width = size;
    img.style.borderRadius = '500px';

    img.style.animationDuration = vary(fireflies.onTimeVariation, fireflies.averageOnSeconds) + 's';
    img.style.animationIterationCount = '1';
    document.getElementById(elementId).appendChild(img);
    window.setTimeout(() => img.remove(), 5000);
}

function addSmallFireflyGroup(elementId, fireflies, pixelsFromTop, pixelsFromLeft) {
    for (let i = 0; i < fireflies.smallGroup.fireflyCount; i++) {
        const interval = window.setInterval(() => {
            const top = vary(fireflies.smallGroup.positionVariation.y, pixelsFromTop);
            const left = vary(fireflies.smallGroup.positionVariation.x, pixelsFromLeft);
            blink(elementId, fireflies, top, left)
        },
            vary(fireflies.offTimeVariation, fireflies.averageOffSeconds) * 1000
        );
        window.addEventListener('resize', () => window.clearInterval(interval));
    }
}

function addSmallFireflyGroups(elementId, fireflies, background, scale) {
    for (let i = 0; i < background.fireflyGroups.length; i++) {
        addSmallFireflyGroup(
            elementId,
            fireflies,
            scale * background.fireflyGroups[i].pixelsFromTop,
            scale * background.fireflyGroups[i].pixelsFromLeft
        );
    }
}

function addLargeFireflyGroup(elementId, fireflies, background, chest, scale) {
    for (let i = 0; i < fireflies.largeGroup.fireflyCount; i++) {
        const interval = window.setInterval(() => {
            const top = vary(
                fireflies.largeGroup.positionVariation.y,
                scale * (background.chest.pixelsFromTop - (background.chest.heightInPixels * 1.5))
            );
            const left = vary(
                fireflies.largeGroup.positionVariation.x,
                scale * (background.chest.pixelsFromLeft + (background.chest.widthInPixels / 2)
                ));
            blink(elementId, fireflies, top, left)
        },
            vary(fireflies.offTimeVariation, fireflies.averageOffSeconds) * 1000
        );
        window.addEventListener('resize', () => window.clearInterval(interval));
    }
}

function addFireflies(elementId, fireflies, background, chest, scale) {
    addSmallFireflyGroups(elementId, fireflies, background, scale);
    addLargeFireflyGroup(elementId, fireflies, background, chest, scale);
}