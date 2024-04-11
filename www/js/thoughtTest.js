let currentSequenceIndex = 0;
const sequences = [ createSequence1, createSequence2, createSequence3, createSequence4, createSequence5,
                    createSequence6, createSequence7, createSequence8, createSequence9, createSequence10];
let numberCorrectAnswers = 0;
let numberDisplayedSequences = 0;


document.getElementById("input").style.display = "none";
document.getElementById("next").style.display = "none";
document.getElementById("end").style.display = "none";

function displaySequence() {
    const currentSequence = sequences[currentSequenceIndex];
    if (typeof currentSequence === "function") {
        const sequence = currentSequence();
        const sSequence = sequence.join(", ");
        document.getElementById("sequence").innerHTML = `${currentSequenceIndex + 1}: ${sSequence}...`;
        document.getElementById("answer").value = "";
        document.getElementById("scores").innerHTML = `Правильных ответов: ${numberCorrectAnswers}`;
        numberDisplayedSequences ++;
        document.getElementById('progress').value = ((numberDisplayedSequences / sequences.length) * 100).toFixed(0);
        
    }
}

function nextSequence() {
    currentSequenceIndex ++;
    if (currentSequenceIndex >= sequences.length) {
        const percentage = Math.round(numberCorrectAnswers / numberDisplayedSequences * 100);
        const sResult = `${numberCorrectAnswers} из ${numberDisplayedSequences}  (${percentage} %)`;
        document.getElementById("name").innerHTML = `Продолжите текущую последовательность:`;
        document.getElementById("result").innerHTML = sResult;
        document.getElementById("sequence").innerHTML = "";
        document.getElementById("input").style.display = "none";
        document.getElementById("answer").value = "";
        document.getElementById("input").style.display = "block";
        document.getElementById("answer").disabled = false;
        return;
    }
    displaySequence();
    if (currentSequenceIndex === sequences.length - 1) {
        document.getElementById("next").style.display = "none";
        document.getElementById("end").style.display = "block";
    }
}

function startTest() {
    numberCorrectAnswers = 0;
    numberDisplayedSequences = 0;
    currentSequenceIndex = 0;
    displaySequence();
    document.getElementById("answer").value = "";
    document.getElementById("end").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("input").style.display = "block";
    document.getElementById("next").style.display = "block";
    document.getElementById("finish").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("scores").innerHTML = "";
    document.getElementById("answer").disabled = false;
}

function endTest() {
    document.getElementById("end").style.display = "none";
    const startButton = document.getElementById("start");
    startButton.style.display = "block";
    const percentage = Math.round((numberCorrectAnswers / numberDisplayedSequences) * 100 );
    const sResult = `${numberCorrectAnswers} из ${numberDisplayedSequences} (${percentage}%) правильных ответов`;
    document.getElementById("finish").innerHTML = `Тест завершен. Результат: ${sResult}.`;
    document.getElementById("sequence").innerHTML = "";
    document.getElementById("input").style.display = "none";
    document.getElementById("answer").disabled = true;
    document.getElementById("next").style.display = "none";
    document.getElementById("end").style.display = "none";
    document.getElementById("scores").innerHTML = "";
    startButton.addEventListener("click", startTest);
    document.getElementById("correct").value = percentage;
    document.getElementById("score").value = percentage;
    document.getElementById("submit-button").click();
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value);
    let isRight = false;
    let rightAnswer;
    switch (currentSequenceIndex) {
        case 0:
            rightAnswer = rightAnswer0;
            break;
        case 1:
            rightAnswer = rightAnswer1;
            break;
        case 2:
            rightAnswer = rightAnswer2;
            break;
        case 3:
            rightAnswer = rightAnswer3;
            break;
        case 4:
            rightAnswer = rightAnswer4;
            break;
        case 5:
            rightAnswer = rightAnswer5;
            break;
        case 6:
            rightAnswer = rightAnswer6;
            break;
        case 7:
            rightAnswer = rightAnswer7;
            break;
        case 8:
            rightAnswer = rightAnswer8;
            break;
        case 9:
            rightAnswer = rightAnswer9;
            break;
    }
    if (userAnswer === rightAnswer) {
        document.getElementById("scores").innerHTML = "Правильно!";
        numberCorrectAnswers ++;
        isRight = true;
    } else {
        document.getElementById("scores").innerHTML = `Неправильно. Правильный ответ: ${rightAnswer}`;
    }
    return isRight;
}

let rightAnswer0;
function createSequence1() {
    const sequence0 = [];
    const x0 = Math.floor(Math.random() * 100);
    let x = x0 % 2 === 0 ? x0 + 1 : x0;
    sequence0.push(x);
    for (let i = 1; i < 9; i++) {
        x += 2;
        if (i === 8) {
            rightAnswer0 = x;
        } else {
            sequence0.push(x);
        }
    }
    return sequence0;
}

let rightAnswer1;
function createSequence2() {
    const sequence1 = [];
    const x0 = Math.floor(Math.random() * 100);
    let x = x0 % 2 === 0 ? x0 : x0 + 1;
    sequence1.push(x);
    for (let i = 1; i < 9; i++) {
        x += 2;
        if (i === 8) {
            rightAnswer1 = x;
        } else {
            sequence1.push(x);
        }
    }
    return sequence1;
}

let rightAnswer2;
function createSequence3() {
    const sequence2 = [0,1];
    let x = 1;
    for (let i = 2 ; i < 9; i++) {
        x= sequence2[i - 1] + sequence2[i - 2];
        if (i === 8) {
            rightAnswer2 = x;
        } else {
            sequence2.push(x);
        }
    }
    return sequence2;
}

function isPrime(num) {
    if (num < 1) return false;
    if (num === 2 || num === 3) return true;
    if (num %2 === 0) return false;
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let rightAnswer3;
function createSequence4() {
    const sequence3 = [];
    let x = 2;
    while (sequence3.length < 8) {
        if (isPrime(x)) {
            sequence3.push(x);
        }
        x ++;
    }
    rightAnswer3 = 23;
    return sequence3;
}

let rightAnswer4;
function createSequence5() {
    const sequence4 = [];
    let x = 2;
    for (let i = 0; i < 9; i++) {
        x *= 2;
        if (i === 8) {
            rightAnswer4 = x;
        } else {
            sequence4.push(x);
        }
    }
    return sequence4;
}

let rightAnswer5;
function createSequence6() {
    const sequence5 = [];
    let x = 0;
    for (let i = 1; i < 9; i++) {
        x += i;
        if (i === 8) {
            rightAnswer5 = x;
        } else {
            sequence5.push(x);
        }
    }
    return sequence5;
}

let rightAnswer6;
function createSequence7() {
    const sequence6 = [];
    for (let i = 0; i < 9; i++) {
        const powerOfTwo = Math.pow(2,i);
        if (i === 8 ){
            rightAnswer6 = powerOfTwo;
        } else {
            sequence6.push(powerOfTwo);
        }
    }
    return sequence6;
}

let rightAnswer7;
function createSequence8() {
    const sequence7 = [];
    let x = 0;
    for (let i = 1; i < 9; i++) {
        x = i % 2 === 0 ? -i : i;
        if (i === 8) {
            rightAnswer7 = x;
        } else {
            sequence7.push(x);
        }
    }
    return sequence7;
}

let rightAnswer8;
function createSequence9() {
    const sequence8 = [1];
    for (let i = 1; i < 9 ; i++) {
        let sum = 0;
        for (let j = 0; j < i; j++) {
            sum += sequence8[j] * sequence8[i - j - 1];
        }
        if (i === 8) {
            rightAnswer8 = sum;
        } else {
            sequence8.push(sum);
        }
    }
    return sequence8;
}

let rightAnswer9;
function createSequence10() {
    const sequence9 = [0, 1, 1];
    for (let i = 3; i < 9; i++) {
        const sum = sequence9[i - 1] + sequence9[i - 2] + sequence9[i - 3];
        if (i === 8) {
            rightAnswer9 = sum;
        } else {
            sequence9.push(sum);
        }
    }
    return sequence9;
}