function addBackground(containerElementId, chest, scale){
    const img = document.createElement('img');
    img.src = '../chest/' + chest.open.linkToImage;
    img.style.position = 'absolute';
    img.style.top = '0px';
    img.style.left = '0px';
    img.style.width = (scale * chest.open.widthInPixels) + 'px';
    img.style.height = (scale * chest.open.heightInPixels) + 'px';
    img.style.zIndex = 1;
    const container = document.getElementById(containerElementId);
    container.appendChild(img);
    container.style.opacity = 1;
}