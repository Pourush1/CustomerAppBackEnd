const customers = require("./customers")
// @ponicode
describe("customers.customers", () => {
    test("0", async () => {
        await customers.customers("https://", 200)
    })

    test("1", async () => {
        await customers.customers("https://", 404)
    })

    test("2", async () => {
        await customers.customers("ponicode.com", 400)
    })

    test("3", async () => {
        await customers.customers("Www.GooGle.com", 400)
    })

    test("4", async () => {
        await customers.customers("Www.GooGle.com", 404)
    })

    test("5", async () => {
        await customers.customers(undefined, NaN)
    })
})
