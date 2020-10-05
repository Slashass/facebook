function renderContentText(text) {
    const shortTextLength = 50;
    const normalTextLength = 300;
    const largeTextLength = 10000;
    const textLength = text.length;

    
    if (textLength<=shortTextLength){
        // kaip labai mazai teksto padidinam texta
        return `<p class="big-font">${text}</p>`;
    } else if (textLength<=normalTextLength) {
        // kai normaliai texto tiesiog avaizduojam
        return `<p>${text}</p>`;
    } else if (textLength<=largeTextLength) {
        // kai labai daug nukerpam irpridedam see more...
        let shortText = '';
        for (let i=0; i<normalTextLength;i++) {
            shortText += text[i];
        }
        return `<p>${shortText}...<span class="seeMore">See more</span></p>`;
    } else {
        // jei teksto daugiau nei leidziama 
        console.warn(`virsyta max (${10000}) texto riba`);
        return '';
    }
}
export default renderContentText;