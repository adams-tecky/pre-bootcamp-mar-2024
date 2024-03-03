const HEIGHT = window.innerHeight - 50
const WIDTH = window.innerWidth - 30

let foods = []
let obstacles = []

let enemies = []
let generateFoodIntervalId
let countDownIntervalId
let flag = false
let remainingTime = 60

let player = {
    x: WIDTH / 2,
    y: HEIGHT / 2,
    d: 30,
    v: 5
}

function setup() {
    console.log(WIDTH, HEIGHT)
    createCanvas(WIDTH, HEIGHT)
    generateFood()
    generateEnemies()
    generateObstacles()
    createButtons()
    noLoop()
}


function draw() {


    background(220)


    let statusText = ""
    if (flag) {
        fill('green')
        statusText = "Game is ongoing..."
        if (!generateFoodIntervalId)
            generateFoodIntervalId = setInterval(generateFood, 5000)

        if (remainingTime == 0) {
            flag = false
        }
    } else {
        fill('red')
        statusText = "Game is stopped"
        clearInterval(generateFoodIntervalId)
        clearInterval(countDownIntervalId)
        pauseGame()
    }

    text(statusText, 50, 50)

    text(`${remainingTime}s remaining`, 300, 50)

    // <<<<<<<<<<<<<<<<<<
    // Handle Keyboard input
    // >>>>>>>>>>>>>>>>>>
    if (keyIsDown(RIGHT_ARROW)) {

        if (checkCircleCollision(player.x + player.v, player.y, player.d / 2, obstacles[0].x, obstacles[0].y, obstacles[0].d / 2)) {

        } else {

            player.x = Math.min(player.x + player.v, WIDTH - player.d / 2)
        }

    }
    if (keyIsDown(LEFT_ARROW)) {
        player.x = Math.max(player.x - player.v, player.d / 2)
    }

    if (keyIsDown(UP_ARROW)) {
        if (checkCircleCollision(player.x, player.y - player.v, player.d / 2, obstacles[0].x, obstacles[0].y, obstacles[0].d / 2)) {

        } else {
            player.y = Math.max(player.y - player.v, player.d / 2)
        }
    }
    if (keyIsDown(DOWN_ARROW)) {
        player.y = Math.min(player.y + player.v, HEIGHT - player.d / 2)
    }

    // <<<<<<<<<<<<<<<<<<
    // Eat food
    // >>>>>>>>>>>>>>>>>>

    // check if each food collide with player
    let resultArray = []
    for (let entry of foods) {
        // console.log("check entry", entry)
        let result = checkCircleCollision(player.x, player.y, player.d / 2, entry.x, entry.y, entry.d / 2)
        // if collide ,player eats food and grows ,food disappear
        if (result) {
            player.d += 10
            console.log("Collide")
        }
        // if no collide,push the food into resultArray
        else {
            resultArray.push(entry)
        }
    }

    foods = resultArray


    fill('red')
    circle(player.x, player.y, player.d)


    for (let entry of foods) {

        fill('brown')
        circle(entry.x, entry.y, entry.d)
    }


    fill("yellow")
    circle(obstacles[0].x, obstacles[0].y, obstacles[0].d)

    let dice = Math.random()

    console.log(dice)
    if (dice > 0.3 && dice < 0.5) {
        // move right
        enemies[0].x = Math.min(enemies[0].x + enemies[0].v, WIDTH - enemies[0].d / 2)
    } else if (dice > 0.5 && dice < 0.7) {
        // move left
        enemies[0].x = Math.max(enemies[0].x - enemies[0].v, enemies[0].d / 2)
    } else if (dice > 0.7 && dice < 0.9) {
        // move up
        enemies[0].y = Math.max(enemies[0].y - enemies[0].v, enemies[0].d / 2)
    } else if (dice > 0.9) {
        enemies[0].y = Math.min(enemies[0].y + enemies[0].v, HEIGHT - enemies[0].d / 2)
    }

    fill("blue")
    circle(enemies[0].x, enemies[0].y, enemies[0].d)

}

function checkCircleCollision(x1, y1, r1, x2, y2, r2) {
    // 計算兩個圓心之間的距離
    var distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    // 判斷兩個圓心距離是否小於兩個圓的半徑和
    if (distance <= r1 + r2) {
        // 圓形接觸
        return true;
    } else {
        // 圓形不接觸
        return false;
    }
}

function generateFood() {
    for (let i = 0; i < 5; i++) {
        foods.push({
            x: Math.random() * WIDTH,
            y: Math.random() * HEIGHT,
            d: 10
        })
    }
}

function createButtons() {

    let startButton = createButton('Start')
    startButton.position(20, HEIGHT + 10)

    startButton.mousePressed(() => {
        resumeGame()
    })


    let stopButton = createButton('Stop');
    stopButton.position(80, HEIGHT + 10);

    stopButton.mousePressed(() => {
        pauseGame()
    })
}



function resumeGame() {
    countDownIntervalId = setInterval(() => {
        console.log("1s passed...")
        remainingTime--
    }, 1000)
    flag = true
    loop()

}

function pauseGame() {
    noLoop()
    flag = false

}

function generateObstacles() {
    obstacles.push({
        x: WIDTH / 2,
        y: HEIGHT / 4,
        d: 60
    })
}


function generateEnemies() {

    enemies.push({
        x: WIDTH / 2,
        y: HEIGHT / 4,
        d: 30,
        v: 5
    })

}