process.stdout.write('prompt >');
process.stdin.on('data',(data) => {
    const cmd = data.toString().trim();
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt >');
});

// let pwd = require('./pwd');
// console.log(pwd.pwdFunction);

let ls = require('./ls');
console.log(ls.lsFunction);

