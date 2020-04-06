import index from "index";
import log from "llog";
import * as mockFoo from "lib/foo";

// Example of mocking a function we use from a default export
jest.mock("llog", () => ({
  info: jest.fn(),
}));

// Example of mocking a named export (NOTE: even though this is a named export, notice that we
// imported the entire module up above using the "* as " syntax.)
jest.mock("lib/foo", () => ({
  someFunction: jest.fn(),
}));

describe("index", () => {
  test("should call someFunction", () => {
    index();
    expect(mockFoo.someFunction).toHaveBeenCalled();
    expect(mockFoo.someFunction).toHaveBeenCalledTimes(1);
    expect(log.info).toHaveBeenCalledTimes(2);
  });
});
