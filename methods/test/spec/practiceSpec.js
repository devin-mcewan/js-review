describe("PROBLEM 1: checkNaN", function () {
  it("should return true for non-numeric input", function () {
    expect(checkNaN("hello")).toBe(true);
  });

  it("should return false for numeric input", function () {
    expect(checkNaN(123)).toBe(false);
  });
});

describe("PROBLEM 2: parseStrFloat", function () {
  it("should parse float string to float number", function () {
    expect(parseStrFloat("23.45")).toBe(23.45);
  });
});

describe("PROBLEM 3: toFixedTwo", function () {
  it("should round float to two decimal places", function () {
    expect(toFixedTwo(3.456)).toBe("3.46");
  });
});

describe("PROBLEM 4: toFixedZero", function () {
  it("should round float to zero decimal places", function () {
    expect(toFixedZero(3.456)).toBe("3");
  });
});

describe("PROBLEM 5: getRandomNum", function () {
  it("should return a number between 0 and 10", function () {
    expect(getRandomNum()).not.toBeLessThan(0);
    expect(getRandomNum()).not.toBeGreaterThan(10);
  });
});

describe("PROBLEM 6: splitString", function () {
  it("should split string by space", function () {
    expect(splitString("hello world", " ")).toEqual(["hello", "world"]);
  });
});

describe("PROBLEM 7: splitCSV", function () {
  it("should split CSV string by comma", function () {
    expect(splitCSV("apple,banana,cherry")).toEqual([
      "apple",
      "banana",
      "cherry",
    ]);
  });
});

describe("PROBLEM 8: replaceAllVowels", function () {
  it("should replace all vowels with a dash", function () {
    expect(replaceAllVowels("banana")).toBe("b-n-n-");
  });
});

describe("PROBLEM 9: replaceAllSpaces", function () {
  it("should replace all spaces with an underscore", function () {
    expect(replaceAllSpaces("hello world")).toBe("hello_world");
  });
});

describe("PROBLEM 10: trimStr", function () {
  it("should remove leading and trailing spaces", function () {
    expect(trimStr("   hello world   ")).toBe("hello world");
  });
});

describe("PROBLEM 11: joinArrays", function () {
  it("should return an array", function () {
    expect(Array.isArray(joinArrays([1, 2, 3], [4, 5, 6]))).toBe(true);
  });

  it("should return an array that is the result of joining the two input arrays", function () {
    expect(joinArrays([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(joinArrays(["a", "b", "c"], ["d", "e", "f"])).toEqual([
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ]);
  });
});

describe("PROBLEM 12: getEvenNums", function () {
  it("should return array with even numbers", function () {
    expect(getEvenNums([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });
});

describe("PROBLEM 13: spliceElements", function () {
  it("should remove elements from array", function () {
    expect(spliceElements([1, 2, 3, 4, 5], 1, 2)).toEqual([1, 4, 5]);
  });
});

describe("PROBLEM 14: spliceAndAddElements", function () {
  it("should remove and add elements to array", function () {
    expect(spliceAndAddElements([1, 2, 3, 4, 5], 1, 2, "a")).toEqual([
      1,
      "a",
      4,
      5,
    ]);
  });
});

describe("Problem 15 - sliceElements", function () {
  it("should return a new array with elements from the start index up to but not including the end index", function () {
    expect(sliceElements([10, 20, 30, 40, 50], 1, 3)).toEqual([20, 30]);
  });
});

describe("Problem 16 - sliceFromIndex", function () {
  it("should return a new array with elements from the start index to the end of the array", function () {
    expect(sliceFromIndex([10, 20, 30, 40, 50], 2)).toEqual([30, 40, 50]);
  });
});

describe("Problem 17 - joinElements", function () {
  it("should join the elements of the array into a string, with elements separated by a comma and a space", function () {
    expect(joinElements(["apple", "banana", "cherry"])).toBe(
      "apple, banana, cherry"
    );
  });
});

describe("Problem 18 - fillArray", function () {
  it("should fill the array with the value from the start index up to but not including the end index", function () {
    expect(fillArray([10, 20, 30, 40, 50], 1, 3, "a")).toEqual([
      10,
      "a",
      "a",
      40,
      50,
    ]);
  });
});

describe("Problem 19 - findFirstNum", function () {
  it("should return the first element in the array that is greater than the number", function () {
    expect(findFirstNum([1, 2, 3, 4, 5], 3)).toBe(4);
  });
});

describe("Problem 20 - findLastNum", function () {
  it("should return the last element in the array that is less than the number", function () {
    expect(findLastNum([1, 2, 3, 4, 5], 3)).toBe(2);
  });
});

describe("Problem 21 - pushElements", function () {
  it("should add the element to the end of the array", function () {
    expect(pushElements([1, 2, 3], 4)).toEqual([1, 2, 3, 4]);
  });
});

describe("Problem 22 - popElement", function () {
  it("should remove the last element from the array", function () {
    expect(popElement([1, 2, 3])).toEqual([1, 2]);
  });
});

describe("Problem 23 - unshiftElements", function () {
  it("should add the element to the beginning of the array", function () {
    expect(unshiftElements([2, 3, 4], 1)).toEqual([1, 2, 3, 4]);
  });
});

describe("Problem 24 - cloneObject", function () {
  it("should return an object", function () {
    expect(typeof cloneObject({ a: 1, b: 2, c: 3 })).toBe("object");
  });

  it("should return an object that is a clone of the input object", function () {
    expect(cloneObject({ a: 1, b: 2, c: 3 })).toEqual({ a: 1, b: 2, c: 3 });
    expect(cloneObject({ name: "John", age: 25, city: "New York" })).toEqual({
      name: "John",
      age: 25,
      city: "New York",
    });
  });

  it("should not return the same object instance", function () {
    const obj = { a: 1, b: 2, c: 3 };
    expect(cloneObject(obj)).not.toBe(obj);
  });
});

describe("Problem 25 - getObjKeys", function () {
  it("should return an array of the object's keys", function () {
    expect(getObjKeys({ a: 1, b: 2, c: 3 })).toEqual(["a", "b", "c"]);
  });
});

describe("Problem 26 - getObjValues", function () {
  it("should return an array of the object's values", function () {
    expect(getObjValues({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
  });
});

describe("Problem 27 - myObject.myMethod", function () {
  it('should return the string "Hello, world!"', function () {
    expect(myObject.myMethod()).toBe("Hello, world!");
  });
});

describe("Problem 28 - phraseMethods.greet", function () {
  it('should return the string "Hello, " followed by the name', function () {
    expect(phraseMethods.greet("John")).toBe("Hello, John");
  });
});

describe("Problem 29 - calculateArea", function () {
  it("should return the area of the rectangle", function () {
    expect(calculateArea(5, 3)).toBe(15);
  });
});

describe("Problem 30 - utilityMethods.calculateArea", function () {
  it("should be a function", function () {
    expect(typeof utilityMethods.calculateArea).toBe("function");
  });
});

describe("Problem 31 - calculateVolume", function () {
  it("should return the volume of the box", function () {
    expect(calculateVolume(5, 3, 2)).toBe(30);
  });
});

describe("Problem 32 - utilityMethods.calculateVolume", function () {
  it("should be a function", function () {
    expect(typeof utilityMethods.calculateVolume).toBe("function");
  });
});

describe("Problem 33 - utilityMethods.createMultiplier", function () {
  it("should return a function that multiplies a number by the original input", function () {
    let multiplyByThree = utilityMethods.createMultiplier(3);
    expect(multiplyByThree(5)).toBe(15);
  });
});
