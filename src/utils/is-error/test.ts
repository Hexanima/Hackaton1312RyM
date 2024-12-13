import { isError } from "."

describe("IsError Test", () => {
    test("Should be an error", () => {
        const res = isError(new Error("Error"))

        expect(res).toBe(true)
    })

    test("Should not be an error", () => {
        const res = isError("Not an error")

        expect(res).toBe(false)
    })
})