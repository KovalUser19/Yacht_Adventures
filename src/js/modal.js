(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
     form: document.querySelector('form'),
  };

  /* refs.openModalBtn.addEventListener('click', toggleModal); */
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.form.addEventListener('submit', onValidateForm);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  };
  function onValidateForm(evt) {
    evt.preventDefault();
    refs.modal.classList.toggle("is-hidden")
    refs.form.reset();
  }
})();
