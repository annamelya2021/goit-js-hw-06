const refs = {
  input: document.querySelector('#name-input'),
  nameSpan: document.querySelector('#name-output'),
};
const onGetInputName = event => {

  if (refs.nameSpan.textContent.length === 0) {
   return refs.nameSpan.textContent = 'Anonymous';
  }
   return  refs.nameSpan.textContent = event.currentTarget.value;
};

refs.input.addEventListener('input', onGetInputName);


