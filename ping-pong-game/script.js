var paddle = document.querySelector("footer")
var ball = document.querySelector("header")
var board = document.querySelector("main")
var scoreEle = document.querySelector("span")
let score = 0;
let bottom = 0
let left = 0
let verticalFlag = false
let horizontalFlag = false
const move = () => {
    if (verticalFlag) {
        if (bottom == 0) {
            verticalFlag = false
        }
        bottom--
        ball.style.bottom = bottom + "px";
    } else {
        if (bottom == 400 - 20 - 20 - 5) {
            if (ball.getBoundingClientRect().left > paddle.getBoundingClientRect().left &&
                ball.getBoundingClientRect().right < paddle.getBoundingClientRect().right
            ) {
                verticalFlag = true;
                score++
                scoreEle.innerText = score;
            } else {
                verticalFlag = true;
                score = 0
                scoreEle.innerText = score;
                alert("bhai tum har gaye")
            }
        }
        bottom++
        ball.style.bottom = bottom + "px";
    }

    if (horizontalFlag) {
        if (left == 0) {
            horizontalFlag = false
        }
        left--
        ball.style.left = left + "px";
    } else {
        if (left == 600 - 20) {
            horizontalFlag = true
        }
        left++
        ball.style.left = left + "px";
    }
    requestAnimationFrame(move)
}

requestAnimationFrame(move)

let paddleLeft = 0
document.addEventListener("keydown", e => {
    if (e.key == "ArrowLeft") {
        paddleLeft -= 10
        paddle.style.left = paddleLeft + "px"
    } else if (e.key == "ArrowRight") {
        paddleLeft += 10
        paddle.style.left = paddleLeft + "px"

    }
})



document.addEventListener("keydown", event => {
    // alert(event.key)
})