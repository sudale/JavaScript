const panels = document.querySelectorAll('.panel');

// for (let i = 0; i < panels.length; i++) {
//     panels[i].addEventListener('click', function () {
//         panels[i].classList.add('active');
//     });

// }

panels.forEach(function (panel) {
    // console.log(panel);
    panel.addEventListener('click', function () {
        // 문제점 : 다른 패널들의 active클래스 제거부터
        removeActiveClasses();
        panel.classList.add('active');
    });
});

function removeActiveClasses() {
    panels.forEach(function (panel) {
        panel.classList.remove('active');

    });
}



