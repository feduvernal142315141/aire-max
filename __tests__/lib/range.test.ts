import { tupleToRange, rangeToTuple } from "@/lib/range"

describe("tupleToRange", () => {
  it("converts a [min, max] tuple to a range object", () => {
    expect(tupleToRange([100, 500])).toEqual({ min: 100, max: 500 })
  })

  it("handles an empty array by returning zeros", () => {
    expect(tupleToRange([])).toEqual({ min: 0, max: 0 })
  })

  it("handles a tuple with only one element", () => {
    expect(tupleToRange([200])).toEqual({ min: 200, max: 0 })
  })
})

describe("rangeToTuple", () => {
  it("converts a range object to a [min, max] tuple", () => {
    expect(rangeToTuple({ min: 100, max: 500 })).toEqual([100, 500])
  })

  it("handles zero values", () => {
    expect(rangeToTuple({ min: 0, max: 0 })).toEqual([0, 0])
  })
})

describe("round-trip conversion", () => {
  it("tupleToRange then rangeToTuple returns the original tuple", () => {
    expect(rangeToTuple(tupleToRange([200, 800]))).toEqual([200, 800])
  })
})
