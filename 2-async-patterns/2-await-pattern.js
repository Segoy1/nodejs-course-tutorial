const {readFile,writeFile} = require('fs');
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () =>{
    try{
        const  first = await readFile('./content/first.txt', 'utf8');
        const  second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-grenade.txt', `This is the result: ${first}, ${second}`)
        console.log(first, second)
    }catch (error){
        console.log(error)
    }
}
start()

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
