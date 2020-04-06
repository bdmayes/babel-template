import log from "llog";
import { someFunction } from "lib/foo";

// Example of mocking a function we use from a default export
jest.mock("llog", () => ({
  info: jest.fn(),
}));

describe("someFunction", () => {
  test("should call log and return concatenated string", () => {
    const result = someFunction(5);
    expect(result).toEqual("the stuff plus 5");
    expect(log.info).toHaveBeenCalled();
    expect(log.info).toHaveBeenCalledTimes(1);
    expect(log.info).toHaveBeenCalledWith("I do things");
  });
});
