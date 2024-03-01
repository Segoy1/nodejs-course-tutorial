const {readFile, writeFile} = require('fs');

console.log('first')
setTimeout(()=>{
    console.log('second')
},0)
console.log('third')
