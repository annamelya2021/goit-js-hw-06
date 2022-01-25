
const InputRef = document.querySelector('#validation-input');

const onGetInputName = event => {
    if (InputRef.value.length === Number(InputRef.dataset.length)) {
        InputRef.classList.add('valid');
        InputRef.classList.remove('invalid')

    } else {
        InputRef.classList.add('invalid');
         InputRef.classList.remove('valid')
    }

}
   InputRef.addEventListener('blur', onGetInputName )