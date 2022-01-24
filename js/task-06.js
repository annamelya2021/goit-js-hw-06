
const InputRef = document.querySelector('#validation-input');

const onGetInputName = event => {
    if (InputRef.value.length === Number(InputRef.dataset.length)) {
        InputRef.classList.add('valid');

    } else {
        InputRef.classList.add('invalid');
    }

}
   InputRef.addEventListener('blur', onGetInputName )