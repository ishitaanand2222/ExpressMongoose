const path =require('path');

// console.log(path.dirname('D:/nodejss/PathModule/path.js'));
// console.log(path.extname('D:/nodejss/PathModule/path.js'));
// console.log(path.basename('D:/nodejss/PathModule/path.js'));
// console.log(path.parse('D:/nodejss/PathModule/path.js'));
myPath=path.parse('D:/nodejss/PathModule/path.js');
console.log(myPath.root);
