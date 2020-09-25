const fs = require('fs');
let lsFunction = fs.readdir('./',"utf8",(err.files) => {
    if(err) {
        throw err
    } else {
        console.log(files.join('\n'));
        process.stdout.write(files.join("\n"))
        process.stdout.write('prompt >');
    }
})
module.exports.lsFunction = lsFunction;

