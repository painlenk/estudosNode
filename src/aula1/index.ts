import fs from "fs";

fs.readFile("./src/aula1/teste.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
