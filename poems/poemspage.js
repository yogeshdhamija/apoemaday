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
    div.style.zIndex = 2;
    div.style.height = (scale.y * chest.open.bottomSurface.heightInPixels) + 'px';
    div.style.width = (scale.x * chest.open.bottomSurface.widthInPixels) + 'px';
    div.style.position = 'absolute';
    div.style.display = 'block';
    div.style.top = (scale.y * chest.open.bottomSurface.pixelsFromTop) + 'px';
    div.style.left = (scale.x * chest.open.bottomSurface.pixelsFromLeft) + 'px';
    return div;
}

function addPoem(poem, container, scroll, scale, num){
    const img = document.createElement('img');
    img.src = '../scroll/' + scroll.closed.linkToImage;
    img.style.display = 'block';
    img.style.position = 'absolute';
    img.style.width = '17%';
    img.style.maxHeight = '100%';
    img.style.minHeight = '75%';
    img.style.marginTop = 'auto';
    img.style.marginBottom = 'auto';
    img.style.zIndex = 3;
    img.style.left = (num * 17) + '%';
    img.style.bottom = '0px';

    const div = document.createElement('div');

    div.appendChild(img);
    container.appendChild(div);
}

function addPoems(containerElementId, chest, poems, scroll, scale){
    const container = createPoemContainer(chest, poems, scale);

    poems.slice(-6).forEach((poem, i) => {
        addPoem(poem, container, scroll, scale, i);
        addPoem(poem, container, scroll, scale, i);
        addPoem(poem, container, scroll, scale, i);
        addPoem(poem, container, scroll, scale, i);
        addPoem(poem, container, scroll, scale, i);
        addPoem(poem, container, scroll, scale, i);
    });

    document.getElementById(containerElementId).appendChild(container);
}

function addFireflies(containerElementId, chest, scale){
    addFireflyGroups(containerElementId, chest.open, scale.x, scale.y);
}