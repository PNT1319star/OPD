const words = ['красный', 'зеленый', 'синий', 'оранжевый', 'желтый', 'розовый', 'черный', 'белый','фиолетовый'];
const colors = ['red', 'green','blue','orange', 'yellow', 'pink','black', 'white', 'purple'];
let word;
let color;
let answer = '';
let count, rightAnswers, rightReactionTime, wrongReactionTime = 0;
let startTime;
let averageReactionTime = 0;
const startButton = document.getElementById("start");


startButton.addEventListener('click', function () {
    document.getElementById('start').style.display = 'none';
    enableButtons();
    startTest();

});

const centerStartButton = () => {
    const containerWidth = document.documentElement.clientWidth;
    const buttonWidth = startButton.offsetWidth;
    const leftMargin = (containerWidth - buttonWidth) / 2 - 45;
    startButton.style.marginLeft = leftMargin + "px";
};

function enableButtons() {
    document.getElementById('red').disabled = false;
    document.getElementById('green').disabled = false;
    document.getElementById('blue').disabled = false;
    document.getElementById('yellow').disabled = false;
    document.getElementById('pink').disabled = false;
    document.getElementById('orange').disabled = false;
    document.getElementById('purple').disabled = false;
    document.getElementById('white').disabled = false;
    document.getElementById('black').disabled = false;
}

function disableButtons() {
    document.getElementById('red').disabled = true;
    document.getElementById('green').disabled = true;
    document.getElementById('blue').disabled = true;
    document.getElementById('yellow').disabled = true;
    document.getElementById('pink').disabled = true;
    document.getElementById('orange').disabled = true;
    document.getElementById('purple').disabled = true;
    document.getElementById('white').disabled = true;
    document.getElementById('black').disabled = true;
}

function startTest() {
    document.getElementById('rightAnswers').innerHTML = '';
    document.getElementById('scores').innerHTML = '';
    document.getElementById('progress').value = 0;
    count = 0;
    rightAnswers = 0;
    rightReactionTime = 0;
    wrongReactionTime = 0;
    averageReactionTime = 0;
    document.getElementById('result').innerHTML = '';
    getNextWord();
}

function getNextWord() {
    word = Math.floor(Math.random() * words.length);
    color = Math.floor(Math.random() * colors.length);
    startTime = new Date().getTime();
    document.getElementById('word').innerHTML = words[word];
    document.getElementById('word').style.color = colors[color];
}

document.getElementById('red').addEventListener('click', function () {
    checkAnswer('red');
});

document.getElementById('green').addEventListener('click', function () {
    checkAnswer('green');
});

document.getElementById('blue').addEventListener('click', function () {
    checkAnswer('blue');
});

document.getElementById('yellow').addEventListener('click', function () {
    checkAnswer('yellow');
});

document.getElementById('pink').addEventListener('click', function () {
    checkAnswer('pink');
});

document.getElementById('orange').addEventListener('click', function () {
    checkAnswer('orange');
});

document.getElementById('purple').addEventListener('click', function () {
    checkAnswer('purple');
});

document.getElementById('white').addEventListener('click', function () {
    checkAnswer('white');
});

document.getElementById('black').addEventListener('click', function () {
    checkAnswer('black');
});

function checkAnswer(clickedColor) {
    const reactionTime = new Date().getTime() - startTime;
    let averageReactionTimePercent;
    if (count >= 20) {
        document.getElementById('word').innerHTML = 'Тест завершен!';
        centerStartButton(); 
        startButton.style.display = 'block';

        const averageCorrectReactionTime = rightReactionTime / rightAnswers;
        const averageIncorrectReactionTime = wrongReactionTime / (count - rightAnswers);
        document.getElementById('scores').innerHTML = `Среднее время реакции на правильные ответы: ${averageCorrectReactionTime.toFixed(2)} мс, на неправильные ответы: ${averageIncorrectReactionTime.toFixed(2)} мс`;
        const averageReactionTime = (rightAnswers > 0) ? averageCorrectReactionTime : 0;
        averageReactionTimePercent = ((averageReactionTime / 1000) * 100).toFixed(0);
        //sendForm
        document.getElementById("score").value = averageReactionTimePercent;
        document.getElementById('avg_time').value = averageReactionTime;
        document.getElementById("correct").value = rightAnswers;
        document.getElementById("submit-button").click();
        //sendForm
        disableButtons();
        return;
    }
    count++;
    if (clickedColor === colors[color] || clickedColor === words[word]) {
        document.getElementById('result').innerHTML = `Правильно! Время реакции: ${reactionTime} мс`;
        rightAnswers++;
        rightReactionTime += reactionTime;
        document.getElementById('rightAnswers').innerHTML = `Количество правильных ответов: ${rightAnswers}`;
    } else {
        document.getElementById('result').innerHTML = `Неправильно! Время реакции: ${reactionTime} мс`;
        wrongReactionTime += reactionTime;
    }
    word = Math.floor(Math.random() * words.length);
    color = Math.floor(Math.random() * colors.length);
    startTime = new Date().getTime();
    document.getElementById('word').innerHTML = words[word];
    document.getElementById('word').style.color = colors[color];
    answer = '';
    document.getElementById('progress').value = ((count / 20).toFixed(2) * 100).toFixed(0);
}