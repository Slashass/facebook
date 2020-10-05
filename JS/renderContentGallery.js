function renderContentGallery(photoArray) {
    const maxGallarySize = 4;

    // jei nera duotas foto sarasas
    if (!photoArray) {
        return '';
    }

let photosHTML = '';    
for (let i=0; i<photoArray.length;i++) {
    if (i>=maxGallarySize) {
        break;
    }
    photosHTML += `<img src="./img/posts/${photoArray[i]}" alt="user post photos">`;
}

    let moreHTML = 0;
    if (photoArray.length > maxGallarySize) {
        moreHTML = `<div class="morePhotos">+${photoArray.length - maxGallarySize}</div>`;
    }

    return `<div class="gallery gallery-${photoArray.length > maxGallarySize ? maxGallarySize : photoArray.length}">
            ${photosHTML}
            ${moreHTML}
            </div>`;
}

export default renderContentGallery;