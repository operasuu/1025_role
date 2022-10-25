input.onButtonPressed(Button.A, function () {
    char.move(-1)
})
input.onButtonPressed(Button.B, function () {
    char.move(1)
})
let sprite: game.LedSprite = null
let char: game.LedSprite = null
char = game.createSprite(2, 4)
let B = true
basic.forever(function () {
    if (B == true) {
        B = false
        basic.pause(500)
        sprite = game.createSprite(randint(0, 4), 0)
        basic.pause(1000)
        for (let index = 0; index <= 4; index++) {
            sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(500)
        }
        sprite.delete()
    }
    B = true
})
basic.forever(function () {
    led.plot(0, 4)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 4)
})
