const object1 = document.getElementById("object1");
const object2 = document.getElementById("object2");
const startButton = document.getElementById("start");
const result = document.getElementById("result");
const reaction = document.getElementById("reaction");
let lastDirectionChangeTime = 0;
let object1Position = 0;
let object2Position = 0;
let object1Direction = "right";
let startTime = 0;
let testTime = 30000;
let reactionTime = 0;

const startTest = () => {
    const progress = document.getElementById("progress");
    let value = 0;
    const intervalID = setInterval(() => {
        value ++;
        progress.value = value;
        if (value === 30) {
            clearInterval(intervalID);
        }
    }, 1000);
    startButton.style.display = "none";
    lastDirectionChangeTime = 0;
    startTime = new Date().getTime();
    const results = [];
    const reactions = [];
    setInterval(() => {
        const random = Math.random();
        if (random > 0.5) {
            object1Direction = object1Direction === "right" ? "left" : "right";
            const elapsedTime = new Date().getTime() - startTime;
            const reactionTime = elapsedTime - lastDirectionChangeTime;
            reactions.push(reactionTime);
        }
    }, 2000);
    setTimeout(() => {
        clearInterval(object1MoveInterval);
        clearInterval(object1DirectionChangeInterval);
        clearInterval(checkCollisionInterval);
        startButton.style.display = "block";
        startButton.disabled = false;

        const averageResult = (results.reduce((a,b) => a+b, 0) / results.length).toFixed(2);
        const averageReaction = (reactions.reduce((a,b) => a+b, 0) / reactions.length / 1000).toFixed(2);
        result.innerText = `Среднее значение совпадения с шариком: ${averageResult}%`;
        reaction.innerText = `Среднее значение скорости реакции на изменение движения шарика: ${averageReaction} с/шарик`;

        document.getElementById("avg_time").value = averageReaction;
        document.getElementById("correct").value = averageResult;
        document.getElementById("score").value = averageResult;
        document.getElementById("submit-button").click();

        centerStartButton(); 
    }, testTime);
    startButton.style.display = "none";
    const object1MoveInterval = setInterval(() => {
        if(object1Direction === "right") {
            object1Position += 10;
            if ( object1Position >= box.clientWidth - 50) {
                object1Direction = "left";
            }
        } else {
            object1Position -= 10;
            if ( object1Position <= 0) {
                object1Direction = "right";
            }
        }
        object1.style.left = object1Position + "px";
    }, 50);

    const object1DirectionChangeInterval = setInterval (() => {
        const random = Math.random();
        if (random > 0.5) {
            object1Direction = object1Direction === "right" ? "left" : "right";
            const elapsedTime = new Date().getTime() - startTime;
            const percentMatch = ((elapsedTime / testTime) * 100).toFixed(2);
            results.push(Math.max(percentMatch,));
            lastDirectionChangeTime = elapsedTime;
        }
    },2000);

    const checkCollisionInterval = setInterval(()=> {
        const object1Position = object1.offsetLeft;
        const object2Position = object2.offsetLeft;
        if ( object1Position === object2Position) {
            const elapsedTime = new Date().getTime() - startTime;
            const reactionTime = elapsedTime - lastDirectionChangeTime;
            const speed = (reactionTime / 1000).toFixed(2);
            const percentMatch = ((elapsedTime / testTime) * 100).toFixed(2);
            result.innerText = `Совпадение с шариком: ${Math.max(percentMatch, 0)}%`;
            reaction.innerText = `Cкорость реакции на изменение движения шарика: ${speed} с/шарик`;
            lastDirectionChangeTime = elapsedTime;
        }
    }, 50);
};

const moveObject2 = (direction) => {
    const boxWidth = object2.parentElement.clientWidth;
    const object2Width = object2.clientWidth;
    let newObject2Position = object2Position;
    if(direction === "right" ) {
        newObject2Position += 10;
        if (newObject2Position + object2Width > boxWidth) {
            newObject2Position = boxWidth - object2Width;
        }
    } else if ( direction === "left") {
        newObject2Position -= 10;
        if (newObject2Position < 0) {
            newObject2Position = 0;
        }
    }
    object2Position = newObject2Position;
    object2.style.left = object2Position + "px";
};
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        moveObject2("left");
    } else if (event.key === "ArrowRight") {
        moveObject2("right");
    }
});
object1.addEventListener("click", () => {
    object1Direction = object1Direction === "right" ? "left" : "right";
    reactionTime = new Date().getTime() - startTime;
});

const centerStartButton = () => {
    const containerWidth = document.documentElement.clientWidth;
    const buttonWidth = startButton.offsetWidth;
    const leftMargin = (containerWidth - buttonWidth) / 2;
    startButton.style.marginLeft = leftMargin + "px";
};
startButton.addEventListener("click", startTest);