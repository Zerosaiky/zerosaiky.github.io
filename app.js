let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let items = [];

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");


let currentAudio = null;

function playAudio(id) {
    var audio = document.getElementById(id);

    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause(); // Остановить предыдущее аудио, если оно существует и не равно текущему аудио
        currentAudio.currentTime = 0; // Сбросить позицию воспроизведения к началу
    }

    if (audio.paused) {
        audio.play();
        currentAudio = audio;
    } else {
        audio.pause();
    }
}

btn1.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар 1!");
        items.push("Товар 1"); // Добавление товара 1 в массив
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.setText("Вы выбрали товар 2!");
        items.push("Товар 2"); // Добавление товара 2 в массив
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(JSON.stringify(items)); // Отправка массива с выбранными товарами
});
