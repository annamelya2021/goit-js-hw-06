const refs = {
  input: document.querySelector('#name-input'),
  nameSpan: document.querySelector('#name-output'),
};
const onGetInputName = event => {

  if (refs.input.value === '') {
    return refs.nameSpan.textContent = 'Anonymous';
  } else {
   refs.nameSpan.textContent = event.currentTarget.value;
  }
};

refs.input.addEventListener('input', onGetInputName);


