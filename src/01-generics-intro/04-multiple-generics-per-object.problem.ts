import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

type Params<T, V> = { a: T; b: V };

const returnBothOfWhatIPassIn = <T, V>(params: Params<T, V>) => {
  return {
    first: params.a,
    second: params.b,
  };
};

it("Should return an object where a -> first and b -> second", () => {
  const result = returnBothOfWhatIPassIn({
    a: "a",
    b: 1,
  });

  expect(result).toEqual({
    first: "a",
    second: 1,
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        first: string;
        second: number;
      }
    >
  >;
});
