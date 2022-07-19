const h3 = document.querySelector('h3'); //숨어있는 태그
const color1 = document.querySelector('.color1'); //색을 지정가능한 입력창
const color2 = document.querySelector('.color2');
const body = document.querySelector('body'); //바디태그

//JS 이벤트 함수 addEventListener(a,b) a는 'click' 이벤트종류, b는 실행함수
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

// function 입력함수() {
//     alert('색을 바꿨네요!')
// }

function setGradient() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    h3.textContent = body.style.background + ';'
}