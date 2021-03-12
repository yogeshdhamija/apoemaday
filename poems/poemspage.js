function addBackground(containerElementId, chest, scale) {
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

function createPoemContainer(chest, poems, scale) {
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

function addTitle(container, poem) {
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
    title.style.fontFamily = 'charmonman';
    container.appendChild(title);
}

function addDate(container, poem, scroll, scale) {
    const date = document.createElement('div');
    date.textContent = poem.date;
    date.style.transformOrigin = 'bottom right';
    date.style.transform = 'rotate(-90deg)';
    date.style.color = 'maroon';
    date.style.zIndex = 4;
    date.style.display = 'block';
    date.style.position = 'absolute';
    date.style.top = '120px';
    date.style.left = ((scale.x * scroll.closed.imageEndsFromLeftInPixels) - 30) + 'px';
    date.style.width = '0px';
    date.style.height = '0px';
    date.style.fontSize = '20px';
    date.style.whiteSpace = 'nowrap';
    date.style.fontFamily = 'charmonman';
    container.appendChild(date);
}

function link(element, bodyId, link) {
    element.onclick = function () {
        document.getElementById(bodyId).style.opacity = 0;
        window.setTimeout(() => window.location.href = link, 500);
    };
}

function changeHash(element, bodyId, hash) {
    element.onclick = function () {
        document.getElementById(bodyId).style.opacity = 0;
        window.setTimeout(() => window.location.hash = hash, 500);
    };
}

function linkToOpenPoem(element, bodyId, poemFile) {
    const withoutHtmlExtension = poemFile.slice(0,-5);
    link(element, bodyId, 'open#'+withoutHtmlExtension);
}

function addLink(container, poem, scroll, scale, bodyId) {
    const element = document.createElement('div');
    element.style.zIndex = 5;
    element.style.display = 'block';
    element.style.position = 'absolute';
    element.style.height = '100%';
    element.style.width = (scale.x * (scroll.closed.imageEndsFromLeftInPixels - scroll.closed.imageBeginsFromLeftInPixels)) + 'px';
    element.style.left = (scale.x * scroll.closed.imageBeginsFromLeftInPixels) + 'px';
    element.style.cursor = 'pointer';

    linkToOpenPoem(element, bodyId, poem.linkToFile);

    container.appendChild(element);
}

function addRolledPoem(poem, container, scroll, scale, bodyId) {
    const div = document.createElement('div');
    div.style.display = 'block';
    div.style.position = 'absolute';
    div.style.width = '25%';
    div.style.maxHeight = '100%';
    div.style.minHeight = '60%';
    div.style.zIndex = 3;
    div.style.left = '0px';
    div.style.bottom = '0px';
    div.style.backgroundImage = 'url(../scroll/' + scroll.closed.linkToImage + ')';
    div.style.backgroundSize = '100% 100%';

    addTitle(div, poem);
    addDate(div, poem, scroll, scale);
    addLink(div, poem, scroll, scale, bodyId);

    container.appendChild(div);
}

function addFlower(container, scroll) {
    const img = document.createElement('img');
    img.src = '../scroll/' + scroll.flower.linkToImage;
    img.style.position = 'absolute';
    img.style.width = '25%';
    img.style.zIndex = 4;
    img.style.left = '0px';
    img.style.bottom = '5%';
    container.appendChild(img);
}

function addStackedPoems(poems, container, scroll, scale, bodyId) {
    const stack = document.createElement('div');
    stack.style.display = 'block';
    stack.style.position = 'absolute';
    stack.style.width = '50%';
    stack.style.maxHeight = '100%';
    stack.style.minHeight = '60%';
    stack.style.zIndex = 3;
    stack.style.left = '50%';
    stack.style.bottom = '0px';
    stack.style.backgroundImage = 'url(../scroll/' + scroll.stacked.linkToImage + ')';
    stack.style.backgroundSize = '100% 100%';

    const stackedPoem = createStackedPoemElement(poems, scale, scroll);
    stack.appendChild(stackedPoem);

    const shadow = createShadowElement(scale, scroll);
    stack.appendChild(shadow);

    const weight = createPaperWeightElement(scroll, scale);
    stack.appendChild(weight);

    const topLink = createLinkToStackPoem(bodyId, poems, scroll, scale);
    stack.appendChild(topLink);

    const sideLink = createLinkToShowOlderPoem(bodyId, poems, scroll, scale);
    stack.appendChild(sideLink);

    container.appendChild(stack);
}

function createLinkToShowOlderPoem(bodyId, poems, scroll, scale) {
    const e = document.createElement('div');
    e.style.zIndex = 7;
    e.style.display = 'block';
    e.style.position = 'absolute';
    e.style.width = '100%';
    e.style.height = '100%';
    e.style.cursor = 'zoom-in';
    e.style.top = '0px'
    e.style.left = '0px';
    e.style.transform = 'rotate(3deg)';

    const current = window.location.hash?.slice(1);

    const hash = current
        ? parseInt(current) > 1
            ? parseInt(current) - 1
            : ""
        : isToday(poems.last().date)
            ? poems.length - 3
            : poems.length - 2;

    changeHash(e, bodyId, hash);

    return e;
}

function createLinkToStackPoem(bodyId, poems, scroll, scale) {
    const linkElement = document.createElement('div');
    linkElement.style.zIndex = 8;
    linkElement.style.display = 'block';
    linkElement.style.position = 'absolute';
    linkElement.style.width = (scale.x * (scroll.stacked.imageEndsFromLeftInPixels - scroll.stacked.imageBeginsFromLeftInPixels)) + 'px';
    linkElement.style.height = (scale.y * (scroll.stacked.imageEndsFromTopInPixels - scroll.stacked.imageBeginsFromTopInPixels)) + 'px';
    linkElement.style.cursor = 'pointer';
    linkElement.style.top = (scale.y * scroll.stacked.imageBeginsFromTopInPixels) + 'px';
    linkElement.style.left = (scale.x * scroll.stacked.imageBeginsFromLeftInPixels) + 'px';
    linkElement.style.transform = 'rotate(3deg)';

    linkToOpenPoem(linkElement, bodyId, getPoemForStack(poems).linkToFile);

    return linkElement;
}

function createPaperWeightElement(scroll, scale) {
    const onPaper = !window.location.hash;
    const weight = document.createElement('img');
    weight.src = '../scroll/' + scroll.paperWeight.linkToImage;
    weight.style.display = 'block';
    weight.style.position = 'absolute';
    weight.style.width = ((0.1 * scale.x * scroll.paperWeight.widthInPixels) + 'px');
    weight.style.height = ((0.1 * scale.y * scroll.paperWeight.heightInPixels) + 'px');
    weight.style.left = onPaper ? '35%' : '-15%';
    weight.style.top = onPaper ? '35%' : '-15%';
    weight.style.zIndex = 6;
    weight.style.transform = 'rotate('+ vary(180, 180) +'deg)';
    return weight;
}

function createShadowElement(scale, scroll) {
    const onPaper = !window.location.hash;
    const shadow = document.createElement('div');
    shadow.style.display = 'block';
    shadow.style.position = 'absolute';
    shadow.style.width = '0px';
    shadow.style.height = '0px';
    shadow.style.top = onPaper ? '35%' : '-15%';
    shadow.style.left = onPaper ? '35%' : '-15%';
    const offsetX = (((0.1 * scale.x * scroll.paperWeight.widthInPixels) / 2) + 'px ');
    const offsetY = (((0.1 * scale.y * scroll.paperWeight.heightInPixels) / 2) + 'px ');
    const spread = (((0.1 * scale.y * scroll.paperWeight.heightInPixels) / 1.5) + 'px ');
    shadow.style.boxShadow = offsetX + offsetY + spread + spread + 'black';
    shadow.style.opacity = 0.6;
    shadow.style.zIndex = 5;
    return shadow;
}

function getPoemForStack(poems) {
    const hash = window.location.hash.slice(1);
    return hash
        ? poems[hash]
        : isToday(poems.last().date)
            ? poems.secondLast()
            : poems.last();
}

function createStackedPoemElement(poems, scale, scroll) {
    const poemElement = document.createElement('iframe');
    poemElement.src = '../poems/' + getPoemForStack(poems).linkToFile;
    poemElement.scroll = 'no';
    poemElement.scrolling = 'no';
    poemElement.style.display = 'block';
    poemElement.style.position = 'absolute';
    poemElement.style.width = (scale.x * (scroll.stacked.imageEndsFromLeftInPixels - scroll.stacked.imageBeginsFromLeftInPixels)) + 'px';
    poemElement.style.height = (scale.y * (scroll.stacked.imageEndsFromTopInPixels - scroll.stacked.imageBeginsFromTopInPixels)) + 'px';
    poemElement.style.top = (scale.y * scroll.stacked.imageBeginsFromTopInPixels) + 'px';
    poemElement.style.left = (scale.x * scroll.stacked.imageBeginsFromLeftInPixels) + 'px';
    poemElement.style.zIndex = 4;
    poemElement.style.transform = 'rotate(3deg)';
    poemElement.style.border = 'none';
    poemElement.style.margin = 'none';
    poemElement.style.padding = 'none';
    poemElement.style.overflow = 'hidden';
    return poemElement;
}

function addPoems(containerElementId, chest, poems, scroll, scale) {
    const container = createPoemContainer(chest, poems, scale);

    if (isToday(poems.last().date)) {
        addRolledPoem(poems.last(), container, scroll, scale, containerElementId);
    } else {
        addFlower(container, scroll);
    }

    addStackedPoems(poems, container, scroll, scale, containerElementId);

    document.getElementById(containerElementId).appendChild(container);
}

function addFireflies(containerElementId, chest, scale) {
    addFireflyGroups(containerElementId, chest.open, scale.x, scale.y);
}
