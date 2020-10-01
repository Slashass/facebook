import renderHeader from './renderHeader.js';
import renderContent from './renderContent.js';
import renderFooter from './renderFooter.js';


function renderSinglePost (data) {
    //validacija

    // logika
    console.log('generuoju viena posta');
    console.log(data);

    return `<div class="post">
            ${renderHeader()}
            ${renderContent()}
            ${renderFooter()}
        </div>`;
}

export default renderSinglePost;