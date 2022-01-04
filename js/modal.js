const refs = {
  openModal: document.querySelector('.js-lightbox'),
  backdrop: document.querySelector('.lightbox__overlay'),
  iframe: document.querySelector('.iframe'),
  modalCloseBtn: document.querySelector('.lightbox__button'),
  linkButton: document.querySelector('.content_button'),
  modal_animation: document.querySelector('.modal'),
  close_button: document.querySelector('.close_button'),
};
export default function openModal(e) {
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
  refs.iframe.src = '';
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
refs.linkButton.addEventListener('click', openModal);
refs.close_button.addEventListener('click', onCloseAnimation);
