import fs from "fs";

const buf = fs.readFileSync("public/Resume.pdf");
console.log(buf.toString('utf8', 0, 100));
