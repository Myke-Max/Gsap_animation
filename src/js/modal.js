import refs from './refs.js';

function openModal(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  e.preventDefault();
  refs.openModal.classList.add('is-open');
  refs.modalCloseBtn.addEventListener('click', onCloseModal);
  refs.backdrop.addEventListener('click', onBackDropClose);
  window.addEventListener('keydown', onEscClose);
}
const onCloseModal = () => {
  refs.openModal.classList.remove('is-open');
  videoStopper('videoContainer');
};
const onEscClose = e => {
  if (e.code === 'Escape') {
    onCloseModal();
  }
};

const onBackDropClose = e => {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
};

const onCloseAnimation = () => {
  refs.modal_animation.classList.add('close');
};

let videoStopper = function (id) {
  let containerElement = document.getElementById(id);
  let iframe_tag = containerElement.querySelector('iframe');
  if (iframe_tag) {
    let iframeSrc = iframe_tag.src;
    iframe_tag.src = iframeSrc;
  }
};
refs.linkButton.addEventListener('click', openModal);
refs.close_button.addEventListener('click', onCloseAnimation);
