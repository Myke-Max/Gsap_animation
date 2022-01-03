import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

export default function openModal(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  } else if (e.code === 'Escape') {
    return;
  }
  basicLightbox
    .create(
      `  <iframe width="560" height="315" src='https://myke-max.github.io/goit-js-hw-13-image-finder/'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    )
    .show();
}
