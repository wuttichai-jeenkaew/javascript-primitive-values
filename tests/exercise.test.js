import fs from "fs/promises";

describe("primitive values tests cases", () => {
  test("exercise 2: productImage should answer correctly", async () => {
    const data = await fs.readFile("./ex-2.js");
    const code = `${data} return productImage`;

    const func = new Function(code);
    const result = func();

    expect(result).toBe(null);
  });

  test("exercise 3: uploadProgress should answer correctly", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data} return uploadProgress`;

    const func = new Function(code);
    const result = func();

    expect(result).toBe(12);
  });

  test("exercise 6: uploadProgress should answer correctly", async () => {
    const data = await fs.readFile("./ex-6.js");
    const totalParts = 13000;

    const codeConcat = `${data} return concatSentence`;
    const codeLiteral = `${data} return literalSentence`;

    const funcConcat = new Function(codeConcat);
    const funcLiteral = new Function(codeLiteral);

    const resultConcat = funcConcat();
    const resultLiteral = funcLiteral();

    expect(resultConcat).toBe("Total: " + totalParts + " Machine parts");
    expect(resultLiteral).toBe(`Total: ${totalParts} Machine parts`);
  });

  test("exercise 7: Concatenating String", async () => {
    const data = await fs.readFile("./ex-7.js");
    const subject = "I";
    const verb = "am";
    const object = "A Software Developer";

    const code = `${data} return sentence`;
    const func = new Function(code);

    const result = func();

    expect(result).toBe(subject + " " + verb + " " + object);
  });

  it("exercise 8: Concatenating String2", async () => {
    const data = await fs.readFile("./ex-8.js");
    let firstParagraph =
      "Green vines attached to the trunk of the tree had wound themselves toward the top of the canopy. Ants used the vine as their private highway, avoiding all the creases and crags of the bark, to freely move at top speed from top to bottom or bottom to top depending on their current chore. At least this was the way it was supposed to be. Something had damaged the vine overnight halfway up the tree leaving a gap in the once pristine ant highway.";

    let secondParagraph =
      "I'm heading back to Colorado tomorrow after being down in Santa Barbara over the weekend for the festival there. I will be making October plans once there and will try to arrange so I'm back here for the birthday if possible. I'll let you know as soon as I know the doctor's appointment schedule and my flight plans.";

    let thirdParagraph =
      "It was going to rain. The weather forecast didn't say that, but the steel plate in his hip did. He had learned over the years to trust his hip over the weatherman. It was going to rain, so he better get outside and prepare.";

    const code = `${data} return article`;
    const func = new Function(code);

    const result = func();

    expect(result).toBe(
      `${firstParagraph}\n${secondParagraph}\n${thirdParagraph}`
    );
  });
});
