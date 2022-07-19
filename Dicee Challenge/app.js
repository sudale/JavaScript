'use strict'
// alert('hi')

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');

// img1,img2에 주사위6번이 나오도록 한다
// img1.setAttribute('src', 'images/dice6.png');
// img2.setAttribute('src', 'images/dice6.png');

// 랜덤 숫자를 1-6로 만들어서 randomNumver1에 입력
let randomNumver1 = Math.floor(Math.random() * 6) + 1;
let randomNumver2 = Math.floor(Math.random() * 6) + 1;

// 랜덤 숫자의 주사위 사진을 img에 나오게 한다
img1.setAttribute('src', 'images/dice' + randomNumver1 + '.png');
img2.setAttribute('src', 'images/dice' + randomNumver2 + '.png');

// 랜덤 숫자를 비교해서 player1 또는 player2가 이겼는지 보여준다
// 비겼을때는 draw! 를 보여준다
const h1 = document.querySelector('h1');
if (randomNumver1 > randomNumver2) {
    h1.textContent = '👍Player 1 Wins';
} else if (randomNumver1 < randomNumver2) {
    h1.textContent = 'Player 2 Wins👍';
} else {
    // (randomNumver1 == randomNumver2)
    h1.textContent = 'Draw!';
}
