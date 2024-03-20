const canvas = document.getElementById('canvas');
const ctx1 = canvas.getContext('2d');
const ctx2 = canvas.getContext('2d');
const ctx3 = canvas.getContext('2d');
const progress1 = document.getElementById("progress1");
const progress2 = document.getElementById("progress2");
const progress3 = document.getElementById("progress3");
const startButton = document.getElementById("startButton");
let results;
const circle_x_1 = 200;
const circle_y_1 = 200;
const circle_x_2 = 600;
const circle_y_2 = 200;
const circle_x_3 = 1000;
const circle_y_3 = 200;
const circleRadius = 130;
const objectRadius = 15;
let totalAccuracy1 = 0;
let totalAttempts1 = 0;
let totalAccuracy2 = 0;
let totalAttempts2 = 0;
let totalAccuracy3 = 0;
let totalAttempts3 = 0;
const object1 = {
    x: circle_x_1 + circleRadius,
    y: circle_y_1
};
const object2 = {
    x: circle_x_2 + circleRadius,
    y: circle_y_2
};
const object3 = {
    x: circle_x_3 + circleRadius,
    y: circle_y_3
};
let fixedObject_x_1;
let fixedObject_y_1;
let fixedObject_x_2;
let fixedObject_y_2;
let fixedObject_x_3;
let fixedObject_y_3;

let count1 = 0;
let totalDistance1 = 0;
let result1 = 0;
let count2 = 0;
let totalDistance2 = 0;
let result2 = 0;
let count3 = 0;
let totalDistance3 = 0;
let result3 = 0;

function fixedObjectCalculator() {
    const angle1 = Math.random() * Math.PI * 2;
    const angle2 = Math.random() * Math.PI * 2;
    const angle3 = Math.random() * Math.PI * 2;
    fixedObject_x_1 = circle_x_1 + Math.cos(angle1) * circleRadius;
    fixedObject_y_1 = circle_y_1 + Math.sin(angle1) * circleRadius;
    fixedObject_x_2 = circle_x_2 + Math.cos(angle2) * circleRadius;
    fixedObject_y_2 = circle_y_2 + Math.sin(angle2) * circleRadius;
    fixedObject_x_3 = circle_x_3 + Math.cos(angle3) * circleRadius;
    fixedObject_y_3 = circle_y_3 + Math.sin(angle3) * circleRadius;
}

function circleDrawer() {
    ctx1.beginPath();
    ctx1.arc(circle_x_1, circle_y_1, circleRadius, 0, Math.PI * 2);
    ctx1.strokeStyle ='red';
    ctx1.stroke();
    ctx2.beginPath();
    ctx2.arc(circle_x_2, circle_y_2, circleRadius, 0, Math.PI * 2);
    ctx2.strokeStyle = 'green';
    ctx2.stroke();
    ctx3.beginPath();
    ctx3.arc(circle_x_3, circle_y_3, circleRadius, 0, Math.PI * 2);
    ctx3.strokeStyle = 'blue';
    ctx3.stroke();
}

function objectDrawer() {
    ctx1.beginPath();
    ctx1.arc(object1.x, object1.y, objectRadius, 0, Math.PI * 2);
    ctx1.fillStyle = 'blue';
    ctx1.fill();
    ctx2.beginPath();
    ctx2.arc(object2.x, object2.y, objectRadius, 0, Math.PI * 2);
    ctx2.fillStyle = 'red';
    ctx2.fill();
    ctx3.beginPath();
    ctx3.arc(object3.x, object3.y, objectRadius, 0, Math.PI * 2);
    ctx3.fillStyle = 'green';
    ctx3.fill();
}

function fixedObjectDrawer() {
    ctx1.beginPath();
    ctx1.arc(fixedObject_x_1, fixedObject_y_1, objectRadius, 0, Math.PI * 2);
    ctx1.stroke();
    ctx2.beginPath();
    ctx2.arc(fixedObject_x_2, fixedObject_y_2, objectRadius, 0, Math.PI * 2);
    ctx2.stroke();
    ctx3.beginPath();
    ctx3.arc(fixedObject_x_3, fixedObject_y_3, objectRadius, 0, Math.PI * 2);
    ctx3.stroke();
}

function objectPositionUpdate() {
    const angle1 = performance.now() / 400;
    object1.x = circle_x_1 + Math.cos(angle1) * circleRadius;
    object1.y = circle_y_1 + Math.sin(angle1) * circleRadius;
    const angle2 = performance.now() / 300;
    object2.x = circle_x_2 + Math.cos(angle2) * circleRadius;
    object2.y = circle_y_2 + Math.sin(angle2) * circleRadius;
    const angle3 = performance.now() / 200;
    object3.x = circle_x_3 + Math.cos(angle3) * circleRadius;
    object3.y = circle_y_3 + Math.sin(angle3) * circleRadius;
}


function firstCircle() {
    const distance = Math.sqrt((object1.x - fixedObject_x_1) ** 2 + (object1.y - fixedObject_y_1) ** 2);
    totalDistance1 += distance;
    count1++;
    progress1.value = ((count1 / 70).toFixed(2) * 100).toFixed(0);
    getResult1();
}

function secondCircle() {
    const distance = Math.sqrt((object2.x - fixedObject_x_2) ** 2 + (object2.y - fixedObject_y_2) ** 2);
    totalDistance2 += distance;
    count2++;
    progress2.value = ((count2 / 115).toFixed(2) * 100).toFixed(0);
    getResult2();
}

function thirdCircle() {
    const distance = Math.sqrt((object3.x - fixedObject_x_3) ** 2 + (object3.y - fixedObject_y_3) ** 2);
    totalDistance3 += distance;
    count3++;
    progress3.value = ((count3 / 300).toFixed(2) * 100).toFixed(0);
    getResult3();
}

function getOverallResult() {
    const averageAccuracy = ((result1 + result2 + result3) / 90).toFixed(0);
    document.getElementById('result').innerText = `Ваша средняя точность: ${averageAccuracy}%`;
    startButton.style.display = 'block';
    startButton.disabled = false;
    document.getElementById("avg_time").value = averageAccuracy;
    document.getElementById("score").value = averageAccuracy;
    document.getElementById("submit-button").click();
}

function getResult1() {
    const averageDistance1 = totalDistance1;
    totalDistance1 = 0;
    let accuracy;
    accuracy = 100 - (averageDistance1 / circleRadius * 100);
    if (accuracy < 0) {
        accuracy = 0;
    }
    result1 = result1 + accuracy;
    totalAccuracy1 += accuracy;
    totalAttempts1++;
    const averageAccuracy1 = totalAccuracy1 / totalAttempts1;
    document.getElementById('result1').innerText = `${accuracy.toFixed(0)}%`;
    if (count1 === 70 && count2 === 115 && count3 === 300){
        getOverallResult();
        document.getElementById('result1').innerText = `${averageAccuracy1.toFixed(0)}%`;
    }
}

function getResult2() {
    const averageDistance2 = totalDistance2;
    totalDistance2 = 0;
    let accuracy;
    accuracy = 100 - (averageDistance2 / circleRadius * 100);
    if (accuracy < 0) {
        accuracy = 0;
    }
    result2 = result2 + accuracy;
    totalAccuracy2 += accuracy;
    totalAttempts2++;
    const averageAccuracy2 = totalAccuracy2 / totalAttempts2;
    document.getElementById('result2').innerText = `${accuracy.toFixed(0)}%`;
    if (count1 === 70 && count2 === 115 && count3 === 300){
        getOverallResult();
        document.getElementById('result2').innerText = `${averageAccuracy2.toFixed(0)}%`;
    }
}

function getResult3() {
    const averageDistance1 = totalDistance3;
    totalDistance3 = 0;
    let accuracy;
    accuracy = 100 - (averageDistance1 / circleRadius * 100);
    if (accuracy < 0) {
        accuracy = 0;
    }
    result3 = result3 + accuracy;
    totalAccuracy3 += accuracy;
    totalAttempts3++;
    const averageAccuracy3 = totalAccuracy3 / totalAttempts3;
    document.getElementById('result3').innerText = `${accuracy.toFixed(0)}%`;
    if (count1 === 70 && count2 === 115 && count3 === 300){
        getOverallResult();
        document.getElementById('result3').innerText = `${averageAccuracy3.toFixed(0)}%`;
    }
}
function loop() {
    ctx1.clearRect(0, 0, 400, canvas.height);
    ctx2.clearRect(400, 0, 800, canvas.height);
    ctx3.clearRect(800, 0, 1200, canvas.height);
    circleDrawer();
    fixedObjectDrawer();
    objectPositionUpdate();
    objectDrawer();
    requestAnimationFrame(loop);
}

fixedObjectCalculator();
loop();

startButton.addEventListener("click", function() {
    startButton.style.display = 'none';
    startButton.disabled = true;
    count = 0;
    results = 0;
    totalAccuracy1 = 0;
    totalAttempts1 = 0;
    totalAccuracy2 = 0;
    totalAttempts2 = 0;
    totalAccuracy3 = 0;
    totalAttempts3 = 0;
    count1 = 0;
    totalDistance1 = 0;
    result1 = 0;
    count2 = 0;
    totalDistance2 = 0;
    result2 = 0;
    count3 = 0;
    totalDistance3 = 0;
    result3 = 0;
    fixedObjectCalculator();
    circleDrawer();
    fixedObjectDrawer();
    objectPositionUpdate();
    objectDrawer();
});

document.addEventListener('keydown', (event) => {
    if (event.code === 'Digit1' && count1 < 70 && startButton.disabled === true) {
        firstCircle();
    }
    if (event.code === 'Digit2' && count2 < 115 && startButton.disabled === true) {
        secondCircle();
    }
    if (event.code === 'Digit3' && count3 < 300 && startButton.disabled === true) {
        thirdCircle();
    }
});
