import renderSinglePost from './renderSinglePost.js';

function renderPosts(data) {
    // validacija


    // logika
    let HTML = '';

    for (let i=0; i < data.length; i++) {
        
        const post = data[i];
    
        HTML += renderSinglePost(post);
    }
    // reikiamo elemento paieska html'e
    const feedDOM = document.querySelector('main');
    
    //perrasome reikiamo html reiksme
    feedDOM.innerHTML + HTML;
    
}
export default renderPosts;