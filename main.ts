radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 80)
    } else if (receivedNumber == 2) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 125)
    } else if (receivedNumber == 3) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 125)
    } else if (receivedNumber == 4) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, 125)
    } else if (receivedNumber == 5) {
        mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 255)
    } else if (receivedNumber == 6) {
        mbit_Robot.RGB_Car_Big(255, 0, 0)
        mbit_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (receivedNumber == 7) {
        mbit_Robot.RGB_Car_Big(0, 255, 0)
        mbit_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (receivedNumber == 8) {
        mbit_Robot.RGB_Car_Big(0, 0, 255)
        mbit_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (receivedNumber == 9) {
        mbit_Robot.RGB_Car_Big(0, 0, 255)
        mbit_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (receivedNumber == 10) {
        mbit_Robot.RGB_Car_Big(0, 0, 0)
        mbit_Robot.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Black))
        mbit_Robot.Music_Car(mbit_Robot.enMusic.power_up)
    } else {
        mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
    }
})
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showLeds(`
    # # # # #
    # . # . #
    # . # . #
    # . # . #
    # # # # #
    `)
