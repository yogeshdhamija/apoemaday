function addBackground(containerElementId, chest, scale){
    const img = document.createElement('img');
    img.src = '../chest/' + chest.open.linkToImage;
    img.style.position = 'absolute';
    img.style.top = '0px';
    img.style.left = '0px';
    img.style.width = (scale.x * chest.open.widthInPixels) + 'px';
    img.style.height = (scale.y * chest.open.heightInPixels) + 'px';
    img.style.zIndex = 1;
    const container = document.getElementById(containerElementId);
    container.appendChild(img);
    container.style.opacity = 1;
}

function createPoemContainer(chest, poems, scale){
    const div = document.createElement('div');
    div.innerText = poems;
    div.style.zIndex = 2;
    div.style.height = (scale.y * chest.open.bottomSurface.heightInPixels) + 'px';
    div.style.width = (scale.x * chest.open.bottomSurface.widthInPixels) + 'px';
    div.style.position = 'absolute';
    div.style.display = 'block';
    div.style.top = (scale.y * chest.open.bottomSurface.pixelsFromTop) + 'px';
    div.style.left = (scale.x * chest.open.bottomSurface.pixelsFromLeft) + 'px';
    return div;
}

function addPoems(containerElementId, chest, poems, scale){
    const div = createPoemContainer(chest, poems, scale);
    const container = document.getElementById(containerElementId);
    container.appendChild(div);
}

function addFireflies(containerElementId, chest, scale){
    addFireflyGroups(containerElementId, chest.open, scale.x, scale.y);
}