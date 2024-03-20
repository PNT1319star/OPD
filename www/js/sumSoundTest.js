const min_value = 1;
const max_value = 99;
const average = document.getElementById("average");
const results = document.getElementById("result");
const maxAttempts = 10;
let startTime;
let value1;
let value2;
let attempts = 0;
let totalReactionTime = 0;
let averageReactionTime;
let percentage;
let startTimeFirst;
let timeToSpeak;

function numberGenerator() {
    value1 = Math.floor(Math.random() * (max_value - min_value + 1)) + min_value;
    value2 = Math.floor(Math.random() * (max_value - min_value + 1)) + min_value;
    return [value1, value2];
}

function testStart() {
    document.querySelector(".start").style.display = "none";
    attempts ++;
    document.getElementById('progress').value = ((attempts / maxAttempts).toFixed(2) * 100).toFixed(0);

    if(attempts > maxAttempts) {
        document.getElementById('progress').value = 0;
        return;
    }
    const [value1, value2] = numberGenerator();
    let sound = new SpeechSynthesisUtterance(`${value1} плюс ${value2}`);
    sound.lang = "ru-RU";
    sound.onboundary = function (event) {
        if (event.charIndex === 0){
            startTimeFirst = performance.now();
        } else {
            timeToSpeak = performance.now() - startTimeFirst;
        }
    };
    if ("speechSynthesis" in window) {
        window.speechSynthesis.speak(sound);
        startTime = performance.now();
    } else {
        results.inner = "Your browser does not support voice synthesis.";
    }
}

let mistakes = 0;

function answerCheck(answer) {
    const time = performance.now() - startTime - timeToSpeak;
    if ((answer === "нечетное" && (value1 + value2) % 2 !== 0) || (answer === "четное" && (value1 + value2) %2 === 0)) {
        if (time.toFixed(2) < 0) {
            results.innerText = "Но это не обязательно...";
        } else  {
            results.innerText = `Ваше время реакции: ${time.toFixed(2)} миллисекунд.`;
            totalReactionTime += time;
        }
    } else {
        if (time.toFixed(2) < 0) {
            results.innerText = "Но это не обязательно...";
        } else {
            results.innerText = "Ошибка!";
            mistakes++;
        }
    }
    averageReactionTime = totalReactionTime / (attempts - mistakes);
    percentage = (averageReactionTime / totalReactionTime) * 100;

    if(attempts === maxAttempts) {
        average.innerText += `Среднее время реакции: ${averageReactionTime.toFixed(2)} миллисекунд.`;
        document.querySelector(".start").style.display = "block";

        document.getElementById("avg_time").value = averageReactionTime.toFixed(2);
        document.getElementById("total_time").value = totalReactionTime.toFixed(2);
        document.getElementById("correct").value = maxAttempts - mistakes;
        document.getElementById("misses").value = mistakes;
        document.getElementById("score").value = percentage;
        document.getElementById("submit-button").click();
    } else {
        setTimeout(testStart, 2000);
    }
}

