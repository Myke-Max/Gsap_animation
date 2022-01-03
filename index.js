// import modal from './js/modal';
import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/src/styles/main.scss';

function openModal(e) {
  //   if (e.target.nodeName !== 'BUTTON') {
  //     return;
  //   } else if (e.code === 'Escape') {
  //     return;
  //   }
  return basicLightbox
    .create(
      ` <div>hello</div>`,
      //   `<iframe width="560" height="315" src='https://www.youtube.com/watch?v=T0w6quMAICk'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    )
    .show();
}

const linkButton = document.querySelector('.content_button');
console.log(basicLightbox);
console.log('hello');
console.log(linkButton);

linkButton.addEventListener('click', openModal);
