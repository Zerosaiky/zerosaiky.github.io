let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

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
	}
	else {
		tg.MainButton.setText("Выбрано сведение");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Выбран мастеринг");
		item = "2";
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});
