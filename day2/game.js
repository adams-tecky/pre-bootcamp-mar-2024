const HEIGHT = window.innerHeight - 50
const WIDTH = window.innerWidth - 30



let foods = []

let player = {
    x: WIDTH / 2,
    y: HEIGHT / 2,
    d: 30,
    v: 5
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

    // noLoop()
}

generateFood()
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


    fill('red')
    circle(player.x, player.y, player.d)


    for (let entry of foods) {


        fill('brown')
        circle(entry.x, entry.y, entry.d)
    }

}