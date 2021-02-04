Array.prototype.random = function() {
    return this[Math.floor((Math.random()*this.length))];
}

function calculateScaling(background) {
    const heightScalingFactor = window.innerHeight / background.heightInPixels;
    if((heightScalingFactor * background.widthInPixels) > window.innerWidth) {
        return heightScalingFactor;
    } else {
        const widthScalingFactor = window.innerWidth/background.widthInPixels;
        return widthScalingFactor;
    }
}

function addBackground(elementId, background, scale){
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

function addChest(elementId, background, chest, scale){
    const img = document.createElement('img');
    img.src = chest.linkToImage;
    img.style.position = 'absolute';
    img.style.left = (scale * background.bottomLeftCornerPositionOfChest.pixelsFromLeft) + 'px';
    img.style.top = (scale * (background.bottomLeftCornerPositionOfChest.pixelsFromTop - chest.heightInPixels)) + 'px';
    img.style.width = (scale * (chest.widthInPixels)) + 'px';
    img.style.height = ( scale * (chest.heightInPixels) ) + 'px';
    img.style.zIndex = 2;
    document.getElementById(elementId).appendChild(img);
}

function addFirefly(elementId) {
    const img = document.createElement('div');
    img.style.position = 'absolute';
    img.style.zIndex = 3;
    img.style.height = '15px';
    img.style.width = '15px';
    img.style.borderRadius = '50px';
    img.style.opacity = '0';
    img.style.animationName = 'firefly';
    img.style.animationDuration = '5s';
    img.style.animationIterationCount = '1';
    document.getElementById(elementId).appendChild(img);
}

function addFireflyGroup(elementId) {
    addFirefly(elementId);
}

function addFireflies(elementId) {
    addFireflyGroup(elementId);
}