class RGB {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    static fromACI(aci) {
        if (aci >= 0 && aci <= 256) {
            return colors[aci];
        }
        throw new Error(`Incorrect ACI color`);
    }
}

// AutoCAD Color Index (ACI)
// Source: https://gohtx.com/acadcolors.php
const colors = [
    new RGB(0, 0, 0),
    new RGB(255, 0, 0),
    new RGB(255, 255, 0),
    new RGB(0, 255, 0),
    new RGB(0, 255, 255),
    new RGB(0, 0, 255),
    new RGB(255, 0, 255),
    new RGB(255, 255, 255),
    new RGB(65, 65, 65),
    new RGB(128, 128, 128),
    new RGB(255, 0, 0),
    new RGB(255, 170, 170),
    new RGB(189, 0, 0),
    new RGB(189, 126, 126),
    new RGB(129, 0, 0),
    new RGB(129, 86, 86),
    new RGB(104, 0, 0),
    new RGB(104, 69, 69),
    new RGB(79, 0, 0),
    new RGB(79, 53, 53),
    new RGB(255, 63, 0),
    new RGB(255, 191, 170),
    new RGB(189, 46, 0),
    new RGB(189, 141, 126),
    new RGB(129, 31, 0),
    new RGB(129, 96, 86),
    new RGB(104, 25, 0),
    new RGB(104, 78, 69),
    new RGB(79, 19, 0),
    new RGB(79, 59, 53),
    new RGB(255, 127, 0),
    new RGB(255, 212, 170),
    new RGB(189, 94, 0),
    new RGB(189, 157, 126),
    new RGB(129, 64, 0),
    new RGB(129, 107, 86),
    new RGB(104, 52, 0),
    new RGB(104, 86, 69),
    new RGB(79, 39, 0),
    new RGB(79, 66, 53),
    new RGB(255, 191, 0),
    new RGB(255, 234, 170),
    new RGB(189, 141, 0),
    new RGB(189, 173, 126),
    new RGB(129, 96, 0),
    new RGB(129, 118, 86),
    new RGB(104, 78, 0),
    new RGB(104, 95, 69),
    new RGB(79, 59, 0),
    new RGB(79, 73, 53),
    new RGB(255, 255, 0),
    new RGB(255, 255, 170),
    new RGB(189, 189, 0),
    new RGB(189, 189, 126),
    new RGB(129, 129, 0),
    new RGB(129, 129, 86),
    new RGB(104, 104, 0),
    new RGB(104, 104, 69),
    new RGB(79, 79, 0),
    new RGB(79, 79, 53),
    new RGB(191, 255, 0),
    new RGB(234, 255, 170),
    new RGB(141, 189, 0),
    new RGB(173, 189, 126),
    new RGB(96, 129, 0),
    new RGB(118, 129, 86),
    new RGB(78, 104, 0),
    new RGB(95, 104, 69),
    new RGB(59, 79, 0),
    new RGB(73, 79, 53),
    new RGB(127, 255, 0),
    new RGB(212, 255, 170),
    new RGB(94, 189, 0),
    new RGB(157, 189, 126),
    new RGB(64, 129, 0),
    new RGB(107, 129, 86),
    new RGB(52, 104, 0),
    new RGB(86, 104, 69),
    new RGB(39, 79, 0),
    new RGB(66, 79, 53),
    new RGB(63, 255, 0),
    new RGB(191, 255, 170),
    new RGB(46, 189, 0),
    new RGB(141, 189, 126),
    new RGB(31, 129, 0),
    new RGB(96, 129, 86),
    new RGB(25, 104, 0),
    new RGB(78, 104, 69),
    new RGB(19, 79, 0),
    new RGB(59, 79, 53),
    new RGB(0, 255, 0),
    new RGB(170, 255, 170),
    new RGB(0, 189, 0),
    new RGB(126, 189, 126),
    new RGB(0, 129, 0),
    new RGB(86, 129, 86),
    new RGB(0, 104, 0),
    new RGB(69, 104, 69),
    new RGB(0, 79, 0),
    new RGB(53, 79, 53),
    new RGB(0, 255, 63),
    new RGB(170, 255, 191),
    new RGB(0, 189, 46),
    new RGB(126, 189, 141),
    new RGB(0, 129, 31),
    new RGB(86, 129, 96),
    new RGB(0, 104, 25),
    new RGB(69, 104, 78),
    new RGB(0, 79, 19),
    new RGB(53, 79, 59),
    new RGB(0, 255, 127),
    new RGB(170, 255, 212),
    new RGB(0, 189, 94),
    new RGB(126, 189, 157),
    new RGB(0, 129, 64),
    new RGB(86, 129, 107),
    new RGB(0, 104, 52),
    new RGB(69, 104, 86),
    new RGB(0, 79, 39),
    new RGB(53, 79, 66),
    new RGB(0, 255, 191),
    new RGB(170, 255, 234),
    new RGB(0, 189, 141),
    new RGB(126, 189, 173),
    new RGB(0, 129, 96),
    new RGB(86, 129, 118),
    new RGB(0, 104, 78),
    new RGB(69, 104, 95),
    new RGB(0, 79, 59),
    new RGB(53, 79, 73),
    new RGB(0, 255, 255),
    new RGB(170, 255, 255),
    new RGB(0, 189, 189),
    new RGB(126, 189, 189),
    new RGB(0, 129, 129),
    new RGB(86, 129, 129),
    new RGB(0, 104, 104),
    new RGB(69, 104, 104),
    new RGB(0, 79, 79),
    new RGB(53, 79, 79),
    new RGB(0, 191, 255),
    new RGB(170, 234, 255),
    new RGB(0, 141, 189),
    new RGB(126, 173, 189),
    new RGB(0, 96, 129),
    new RGB(86, 118, 129),
    new RGB(0, 78, 104),
    new RGB(69, 95, 104),
    new RGB(0, 59, 79),
    new RGB(53, 73, 79),
    new RGB(0, 127, 255),
    new RGB(170, 212, 255),
    new RGB(0, 94, 189),
    new RGB(126, 157, 189),
    new RGB(0, 64, 129),
    new RGB(86, 107, 129),
    new RGB(0, 52, 104),
    new RGB(69, 86, 104),
    new RGB(0, 39, 79),
    new RGB(53, 66, 79),
    new RGB(0, 63, 255),
    new RGB(170, 191, 255),
    new RGB(0, 46, 189),
    new RGB(126, 141, 189),
    new RGB(0, 31, 129),
    new RGB(86, 96, 129),
    new RGB(0, 25, 104),
    new RGB(69, 78, 104),
    new RGB(0, 19, 79),
    new RGB(53, 59, 79),
    new RGB(0, 0, 255),
    new RGB(170, 170, 255),
    new RGB(0, 0, 189),
    new RGB(126, 126, 189),
    new RGB(0, 0, 129),
    new RGB(86, 86, 129),
    new RGB(0, 0, 104),
    new RGB(69, 69, 104),
    new RGB(0, 0, 79),
    new RGB(53, 53, 79),
    new RGB(63, 0, 255),
    new RGB(191, 170, 255),
    new RGB(46, 0, 189),
    new RGB(141, 126, 189),
    new RGB(31, 0, 129),
    new RGB(96, 86, 129),
    new RGB(25, 0, 104),
    new RGB(78, 69, 104),
    new RGB(19, 0, 79),
    new RGB(59, 53, 79),
    new RGB(127, 0, 255),
    new RGB(212, 170, 255),
    new RGB(94, 0, 189),
    new RGB(157, 126, 189),
    new RGB(64, 0, 129),
    new RGB(107, 86, 129),
    new RGB(52, 0, 104),
    new RGB(86, 69, 104),
    new RGB(39, 0, 79),
    new RGB(66, 53, 79),
    new RGB(191, 0, 255),
    new RGB(234, 170, 255),
    new RGB(141, 0, 189),
    new RGB(173, 126, 189),
    new RGB(96, 0, 129),
    new RGB(118, 86, 129),
    new RGB(78, 0, 104),
    new RGB(95, 69, 104),
    new RGB(59, 0, 79),
    new RGB(73, 53, 79),
    new RGB(255, 0, 255),
    new RGB(255, 170, 255),
    new RGB(189, 0, 189),
    new RGB(189, 126, 189),
    new RGB(129, 0, 129),
    new RGB(129, 86, 129),
    new RGB(104, 0, 104),
    new RGB(104, 69, 104),
    new RGB(79, 0, 79),
    new RGB(79, 53, 79),
    new RGB(255, 0, 191),
    new RGB(255, 170, 234),
    new RGB(189, 0, 141),
    new RGB(189, 126, 173),
    new RGB(129, 0, 96),
    new RGB(129, 86, 118),
    new RGB(104, 0, 78),
    new RGB(104, 69, 95),
    new RGB(79, 0, 59),
    new RGB(79, 53, 73),
    new RGB(255, 0, 127),
    new RGB(255, 170, 212),
    new RGB(189, 0, 94),
    new RGB(189, 126, 157),
    new RGB(129, 0, 64),
    new RGB(129, 86, 107),
    new RGB(104, 0, 52),
    new RGB(104, 69, 86),
    new RGB(79, 0, 39),
    new RGB(79, 53, 66),
    new RGB(255, 0, 63),
    new RGB(255, 170, 191),
    new RGB(189, 0, 46),
    new RGB(189, 126, 141),
    new RGB(129, 0, 31),
    new RGB(129, 86, 96),
    new RGB(104, 0, 25),
    new RGB(104, 69, 78),
    new RGB(79, 0, 19),
    new RGB(79, 53, 59),
    new RGB(51, 51, 51),
    new RGB(80, 80, 80),
    new RGB(105, 105, 105),
    new RGB(130, 130, 130),
    new RGB(190, 190, 190),
    new RGB(255, 255, 255)
];

exports.RGB = RGB;
