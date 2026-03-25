console.log("FS Write Test Successful");
const fs = require('fs');
fs.writeFileSync('fs_test.txt', 'test');
console.log("File written");
fs.unlinkSync('fs_test.txt');
console.log("File deleted");
