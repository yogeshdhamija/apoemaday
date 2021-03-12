function addScroll(container, scroll){
    const div = document.createElement('div');
    div.style.backgroundImage = 'url(../scroll/' + scroll.open.linkToImage + ')';
    div.style.backgroundSize = '100% 100%';
    div.style.left = '0px';
    div.style.top = '0px';
    div.style.marginTop = '2%';
    div.style.width = '600px';
    div.style.height = '96%';
    div.style.position = 'absolute';

    container.appendChild(div);
    return div;
}

function addPoemText(container, poemFile){
    const poemElement = document.createElement('iframe');
    poemElement.src = '../poems/' + poemFile;
    poemElement.style.display = 'block';
    poemElement.style.position = 'relative';
    poemElement.style.marginLeft = '70px';
    poemElement.style.marginRight = '70px';
    poemElement.style.top = '20%';
    poemElement.style.height = 'calc(100% - 40%)';
    poemElement.style.width = 'calc(100% - 140px)';
    poemElement.style.border = 'none';

    container.appendChild(poemElement);
    return poemElement;
}

function addPoem(elementId, scroll, poemFile){
    const container = document.getElementById(elementId);
    container.style.opacity = 1;

    const scrollElement = addScroll(container, scroll);
    addPoemText(scrollElement, poemFile);
}
