import { somar } from "./aula2"; // importa um modulo
import path from "path"; // importa o modulo interno do path

console.log(somar(1, 1));
const extension = path.extname("teste.php"); //utiliza o extname para saber a extensao de um arquivo
console.log(extension);
console.log(process.argv);
console.log(process.argv.slice(2));
