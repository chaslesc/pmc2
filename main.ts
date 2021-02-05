input.onButtonPressed(Button.A, function () {
    MonChoix = Math.randomRange(0, 2)
    if (MonChoix == 0) {
        basic.showLeds(`
            # # . . .
            # . # . .
            # . . # .
            # . . # .
            # # # # .
            `)
    } else {
        if (MonChoix == 1) {
            basic.showLeds(`
                # # # # .
                # # # # #
                . # # . .
                . # # . .
                . # # . .
                `)
        } else {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        }
    }
})
radio.onReceivedNumberDeprecated(function (ChoixAdversaire) {
    if (MonChoix == 0 && ChoixAdversaire == 0) {
        basic.showLeds(`
            . . . # #
            . . # . #
            . # . . #
            . # . . #
            . # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(500)
        basic.showNumber(MonScore)
        basic.showString("-")
        basic.showNumber(ScoreAdversaire)
    } else {
        if (MonChoix == 0 && ChoixAdversaire == 1) {
            basic.showLeds(`
                . # # # #
                # # # # #
                . . # # .
                . . # # .
                . . # # .
                `)
            basic.pause(500)
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.pause(500)
            MonScore = MonScore + 1
            basic.showNumber(MonScore)
            basic.showString("-")
            basic.showNumber(ScoreAdversaire)
        } else {
            if (MonChoix == 0 && ChoixAdversaire == 2) {
                basic.showLeds(`
                    # . . # #
                    . # . # #
                    . . # . .
                    . # . # #
                    # . . # #
                    `)
                basic.pause(500)
                basic.showLeds(`
                    . . . . .
                    . # . # .
                    . . . . .
                    . # # # .
                    # . . . #
                    `)
                basic.pause(500)
                ScoreAdversaire = ScoreAdversaire + 1
                basic.showNumber(MonScore)
                basic.showString("-")
                basic.showNumber(ScoreAdversaire)
            } else {
                if (MonChoix == 1 && ChoixAdversaire == 0) {
                    basic.showLeds(`
                        . . . # #
                        . . # . #
                        . # . . #
                        . # . . #
                        . # # # #
                        `)
                    basic.pause(500)
                    basic.showLeds(`
                        . . . . .
                        . # . # .
                        . . . . .
                        . # # # .
                        # . . . #
                        `)
                    basic.pause(500)
                    ScoreAdversaire = ScoreAdversaire + 1
                    basic.showNumber(MonScore)
                    basic.showString(" - ")
                    basic.showNumber(ScoreAdversaire)
                } else {
                    if (MonChoix == 1 && ChoixAdversaire == 1) {
                        basic.showLeds(`
                            . # # # #
                            # # # # #
                            . . # # .
                            . . # # .
                            . . # # .
                            `)
                        basic.pause(500)
                        basic.showLeds(`
                            . . . . .
                            . # . # .
                            . . . . .
                            # # # # #
                            . . . . .
                            `)
                        basic.pause(500)
                        basic.showNumber(MonScore)
                        basic.showString("-")
                        basic.showNumber(ScoreAdversaire)
                    } else {
                        if (MonChoix == 1 && ChoixAdversaire == 2) {
                            basic.showLeds(`
                                # . . # #
                                . # . # #
                                . . # . .
                                . # . # .
                                # . . . #
                                `)
                            basic.pause(500)
                            basic.showLeds(`
                                . . . . .
                                . # . # .
                                . . . . .
                                # . . . #
                                . # # # .
                                `)
                            basic.pause(500)
                            MonScore = MonScore + 1
                            basic.showNumber(MonScore)
                            basic.showString("-")
                            basic.showNumber(ScoreAdversaire)
                        } else {
                            if (MonChoix == 2 && ChoixAdversaire == 0) {
                                basic.showLeds(`
                                    . . . # #
                                    . . # . #
                                    . # . . #
                                    . # . . #
                                    . # # # #
                                    `)
                                basic.showLeds(`
                                    . . . . .
                                    . # . # .
                                    . . . . .
                                    # . . . #
                                    . # # # .
                                    `)
                                basic.pause(500)
                                MonScore = MonScore + 1
                                basic.showNumber(MonScore)
                                basic.showString("-")
                                basic.showNumber(ScoreAdversaire)
                            } else {
                                if (MonChoix == 2 && ChoixAdversaire == 1) {
                                    basic.showLeds(`
                                        . # # # #
                                        # # # # #
                                        . . # # .
                                        . . # # .
                                        . . # # .
                                        `)
                                    basic.pause(500)
                                    basic.showLeds(`
                                        . . . . .
                                        . # . # .
                                        . . . . .
                                        . # # # .
                                        # . . . #
                                        `)
                                    basic.pause(500)
                                    ScoreAdversaire = ScoreAdversaire + 1
                                    basic.showNumber(MonScore)
                                    basic.showString("-")
                                    basic.showNumber(ScoreAdversaire)
                                } else {
                                    basic.showLeds(`
                                        # . . # #
                                        . # . # #
                                        . . # . .
                                        . # . # #
                                        # . . # #
                                        `)
                                    basic.pause(500)
                                    basic.showLeds(`
                                        . . . . .
                                        . # . # .
                                        . . . . .
                                        # # # # #
                                        . . . . .
                                        `)
                                    basic.pause(500)
                                    basic.showNumber(MonScore)
                                    basic.showString("-")
                                    basic.showNumber(ScoreAdversaire)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (MonScore == 3) {
        basic.showString("Gagné")
    } else {
        if (ScoreAdversaire == 3) {
            basic.showString("Perdu")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(MonChoix)
})
input.onGesture(Gesture.Shake, function () {
    MonScore = 0
    ScoreAdversaire = 0
    basic.clearScreen()
})
let MonChoix = 0
let MonScore = 0
let ScoreAdversaire = 0
ScoreAdversaire = 0
MonScore = 0
radio.setGroup(1)
basic.showString("PMC")
basic.forever(function () {
	
})
