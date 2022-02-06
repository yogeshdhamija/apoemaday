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
    img.onclick = () => dimContainerAndPerformCallback(elementId, () => window.location.href="poems");
    const container = document.getElementById(elementId);
    container.appendChild(img);
}

function addFireflies(elementId, background, scale) {
    addFireflyGroups(elementId, background, scale.combined, scale.combined);
}
