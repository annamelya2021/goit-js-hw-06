
const rangeRef  = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

 textRef.style.fontSize = `${rangeRef.value}px`

const onChangeFontSizeText = event =>
{
    textRef.style.fontSize = `${rangeRef.value}px`
}

rangeRef.addEventListener('input', onChangeFontSizeText )