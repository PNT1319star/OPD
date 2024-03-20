const min_value = 1;
const max_value = 99;
const highAverage = document.getElementById("highAverage");
const lowAverage = document.getElementById("lowAverage");
const results = document.getElementById("result");
const max_attempt = 10;
let startTime;
let value1, value2, sum;
let attempts = 0;
let totalReactionTime = 0;
let totalReactionTimeLowAverage = 0;
let averageReactionTimeHighAverage = 0;
let averageReactionTimeLowAverage = 0;
let percentageReactionTimeHigh;
let mistake = 0;

function numberGenerate() {
    value1 = Math.floor(Math.random() * (max_value - min_value + 1)) + min_value;
    value2 = Math.floor(Math.random() * (max_value - min_value + 1)) + min_value;
    return [value1, value2];
}

function testStart() {
    document.querySelector(".start").style.display = "none";
    document.getElementById("progress").value = attempts;
    if (attempts === max_attempt) {
        attempts = 0;
        totalReactionTime = 0;
        averageReactionTimeHighAverage.innerText = "";
        averageReactionTimeLowAverage.innerText = "";
    }
    attempts++;
    document.getElementById("progress").value = ((attempts / 10).toFixed(2) * 100).toFixed(0);
    if (attempts > max_attempt) {
        return;
    }
    const [value1, value2] = numberGenerate();
    results.innerText = `${value1} + ${value2}`;
    startTime = performance.now();
    return [value1, value2];
}

function answerCheck(answer) {
    let time = performance.now() - startTime;
    if ((answer === "четное" && (value1 + value2) % 2 === 0) || (answer === "нечетное" && (value1 + value2) % 2 !== 0)) {
        results.innerText = `Ваше время реакции: ${(time).toFixed(2)} миллисекунд.`;
        totalReactionTime += time;
    } else {
        results.innerText = "Неправильно!";
        mistake ++;
        totalReactionTimeLowAverage += time;
    }
    sum ++;
    if (mistake === 0) {averageReactionTimeLowAverage = 0;}
    if (mistake === attempts) {averageReactionTimeHighAverage = 0;}
    else{ 
        averageReactionTimeHighAverage = totalReactionTime / (attempts - mistake);
        averageReactionTimeLowAverage = totalReactionTimeLowAverage / mistake;
    }
    if (attempts === max_attempt) {
        highAverage.innerText +=  ` Среднее время реакции (правильные ответы): ${averageReactionTimeHighAverage.toFixed(2)} миллисекунд.`;
        lowAverage.innerText += `Среднее время реакции (неправильные ответы): ${averageReactionTimeLowAverage.toFixed(2)} миллисекунд.`;
        percentageReactionTimeHigh = (averageReactionTimeHighAverage / (averageReactionTimeHighAverage + averageReactionTimeLowAverage)) * 100;
        document.querySelector(".start").style.display = "block";
        document.getElementById("avg_time").value = averageReactionTimeHighAverage.toFixed(2);
        document.getElementById("total_time").value = totalReactionTime.toFixed(2);
        document.getElementById("correct").value = max_attempt - mistake;
        document.getElementById("misses").value = mistake;
        document.getElementById("score").value = percentageReactionTimeHigh;
        document.getElementById("submit-button").click();
    } else {
        setTimeout(testStart, 2000);
    }
}
