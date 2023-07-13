describe("Javascript Scope Problems", function () {
  it("Problem 1 - localVarFunc should return 'I am local'", function () {
    expect(localVarFunc()).toEqual("I am local");
  });
  it("Problem 2 - globalVarFunc should return 'I am global'", function () {
    expect(globalVarFunc()).toEqual("I am global");
  });
  it("Problem 3 - outerFunc should return an object containing the values of `myVar` in `outerFunc` and `innerFunc`", function () {
    expect(outerFunc()).toEqual({ outer: "outer", inner: "inner" });
  });
  it("Problem 4 - globalCounter should be 3 after incrementCounter is called three times", function () {
    incrementCounter();
    incrementCounter();
    incrementCounter();
    expect(globalCounter).toEqual(3);
  });
  it("Problem 5 - loopVar should be 4 after loopFunc has run", function () {
    expect(loopFunc()).toEqual(4);
  });
  it("Problem 6 - `innerCounterFunc` should return incremented values", function () {
    let innerFunc = outerCounterFunc();
    expect(innerFunc()).toEqual(1);
    expect(innerFunc()).toEqual(2);
    expect(innerFunc()).toEqual(3);
  });
});
