const Mahalap = require("./maha-lap");
describe("Test Maha-Lap", () => {
    test("Test Tamnai with day", () => {
        const result = Mahalap.tamnaiWithDay("จันทร์");
        expect(result).toEqual(2);
    });
    test("Test Tamnai with day", () => {
        const result = Mahalap.tamnaiWithDay("อังคาร");
        expect(result).toEqual(3);
    });
    test("Test Tamnai with day", () => {
        const result = Mahalap.tamnaiWithDay("พุธ");
        expect(result).toEqual(4);
    });
    test("Test Tamnai with day", () => {
        const result = Mahalap.tamnaiWithDay("พฤหัสบดี");
        expect(result).toEqual(5);
    });
});