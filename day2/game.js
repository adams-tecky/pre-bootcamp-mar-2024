const HEIGHT = window.innerHeight - 50
const WIDTH = window.innerWidth - 30



let foods = []

let player = {
    x: WIDTH / 2,
    y: HEIGHT / 2,
    d: 30,
    v: 5
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

function setup() {
    console.log(WIDTH, HEIGHT)
    createCanvas(WIDTH, HEIGHT)
    generateFood()
    // noLoop()

}


function draw() {


    background(220)


    if (keyIsDown(RIGHT_ARROW)) {
        player.x = Math.min(player.x + player.v, WIDTH - player.d / 2)
    }
    if (keyIsDown(LEFT_ARROW)) {
        player.x = Math.max(player.x - player.v, player.d / 2)
    }

    if (keyIsDown(UP_ARROW)) {
        player.y = Math.max(player.y - player.v, player.d / 2)
    }
    if (keyIsDown(DOWN_ARROW)) {
        player.y = Math.min(player.y + player.v, HEIGHT - player.d / 2)
    }

    // check if each food collide with player
    // take food from foods(array of object) one by one 
    // use checkCollide function with player's xy coordinates input and raidus and food's xy coordinates and radius

    // if collide ,player eats food and grows ,food disappear
    // if no collide, do nth

    let resultArray = []
    for (let entry of foods) {
        // console.log("check entry", entry)
        let result = checkCircleCollision(player.x, player.y, player.d / 2, entry.x, entry.y, entry.d / 2)

        if (result) {
            player.d += 10
            console.log("Collide")
        } else {
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

}