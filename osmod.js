const os=require('os');

console.log(os.arch());

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

// const f=os.freemem();

// console.log(`${f/1024/1024/1024}`);