const delay = 1500;
const max_attempt = 10;
let timeId;
let attempt = 0;
let totalReactionTime = 0;
let averageReactionTime;
let averagePercent;

function startTest() {
    document.querySelector(".start").style.display = "none";
    if (attempt === max_attempt) {
        attempt = 0;
        totalReactionTime = 0;
        averageReactionTime = 0;
        average.innerText = "";
    }
    attempt++;
    document.getElementById('progress').value = ((attempt / 10).toFixed(2) * 100).toFixed(0);
    if(attempt > max_attempt) {
        return;
    }
    timeId = setTimeout(playSound, delay);
}

function playSound() {
    const audio = new Audio("../audio/sound1.mp3");
    audio.play();
    const startTime = Date.now();
    const listener = function () {
        const reactionTime = Date.now() - startTime;
        document.getElementById("reactionTime").innerHTML = `Ваше время реакции: ${reactionTime} миллисекунд`;
        totalReactionTime += reactionTime;
        averageReactionTime = totalReactionTime/attempt;
        document.removeEventListener('keydown',listener);
    }
    document.addEventListener('keydown', listener);
    if (attempt === max_attempt) {
        average.innerText += `Среднее время реакции: ${averageReactionTime.toFixed(2)} миллисекунд.`;
        averagePercent = ((averageReactionTime / delay) * 100).toFixed(2);

        document.querySelector(".start").style.display = "block";

        document.getElementById("total_time").value = totalReactionTime.toFixed(2);
        document.getElementById("avg_time").value = averageReactionTime.toFixed(2);
        document.getElementById("score").value = averagePercent;
        document.getElementById("submit-button").click();
    } else {
        setTimeout(startTest, 2000);
    }
}