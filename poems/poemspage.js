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
    const div = document.createElement('div');
    div.style.display = 'block';
    div.style.position = 'absolute';
    div.style.width = '17%';
    div.style.maxHeight = '100%';
    div.style.minHeight = '75%';
    div.style.marginTop = 'auto';
    div.style.marginBottom = 'auto';
    div.style.zIndex = 3;
    div.style.left = (num * 17) + '%';
    div.style.bottom = '0px';
    div.style.backgroundImage = 'url(../scroll/' + scroll.closed.linkToImage + ')';
    div.style.backgroundSize = '100% 100%';
    
    const title = document.createElement('div');
    title.textContent = poem.title;
    title.style.transformOrigin = 'top left';
    title.style.transform = 'rotate(-90deg)';
    title.style.color = 'maroon';
    title.style.zIndex = 4;
    title.style.display = 'block';
    title.style.position = 'absolute';
    title.style.bottom = '0px';
    title.style.left = '10%';
    title.style.fontSize = '30px';
    title.style.whiteSpace = 'nowrap';
    
    div.appendChild(title);
    container.appendChild(div);
}

function addPoems(containerElementId, chest, poems, scroll, scale){
    const container = createPoemContainer(chest, poems, scale);

    poems.slice(-6).forEach((poem, i) => {
        addPoem(poem, container, scroll, scale, i);
    });

    document.getElementById(containerElementId).appendChild(container);
}

function addFireflies(containerElementId, chest, scale){
    addFireflyGroups(containerElementId, chest.open, scale.x, scale.y);
}