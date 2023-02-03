import fs from "fs/promises";

describe("exercise 3: primitive values tests cases", () => {
  test("exercise 3: uploadProgress จะต้องเป็นค่าเปอร์เซ็นต์ที่ถูกต้อง", async () => {
    const data = await fs.readFile("./ex-3.js");
    const code = `${data} return uploadProgress`;

    const func = new Function(code);
    const result = func();

    expect(result).toBe(12) || toBe("12%");
  });
});
