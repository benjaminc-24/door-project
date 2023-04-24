basic.forever(function () {
    // code and a input for door opening
    if (input.buttonIsPressed(Button.A) && (pins.digitalReadPin(DigitalPin.P4) == 0 && (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0))) {
        servos.P0.setAngle(90)
        basic.pause(5000)
        basic.pause(5000)
        servos.P0.setAngle(0)
    }
    // code and b input for door closing
    if (input.buttonIsPressed(Button.B) && (pins.digitalReadPin(DigitalPin.P4) == 0 && (pins.digitalReadPin(DigitalPin.P1) == 1 && pins.digitalReadPin(DigitalPin.P2) == 0))) {
        servos.P0.setAngle(0)
    }
})
