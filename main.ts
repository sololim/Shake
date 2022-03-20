input.onGesture(Gesture.Shake, function () {
    basic.showString("Hello mama !")
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("I love you mama")
})
