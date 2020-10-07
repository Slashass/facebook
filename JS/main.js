import posts from './data.js';
import renderPosts from './render.js';


renderPosts(posts);


/* renderPost
    for -> renderSinglePost
        renderHeader
        renderContent
            renderContentText
            renderContetGallary
        renderFooter
*/

// overwritina 
/*const headerDOM = document.querySelector('header');
headerDOM.innerHTML = '<span>Labas rytas!</span>';
headerDOM.innerHTML += '<span>ka tu?</span>';*/




// checkas funkcijai ir clikams
//function asideClick () {
  //  console.log('click click...')
//}

//const asidesDOM = document.querySelectorAll('aside');
//console.log(asidesDOM);

//asidesDOM[0].addEventListener('click', asideClick)
