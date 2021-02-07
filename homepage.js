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

function addFireflies(elementId, background, scale) {
    addFireflyGroups(elementId, background, scale.combined, scale.combined);
}