import fs from "fs";

const stats = fs.statSync("public/Resume.pdf");
console.log("Size in bytes:", stats.size);
