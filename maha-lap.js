class MahaLap {
    static tamnaiWithDay(day) {
        if (day === "อังคาร") {
            return 3;
        } else if (day === "พุธ") {
            return 4;
        } else if (day === "พฤหัสบดี") {
            return 5;
        } else {
            return 2;
        }

    }
}
module.exports = MahaLap;