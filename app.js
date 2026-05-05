// npm global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// gloabal dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packaheName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// const _ = require('lodash');

// const items = [1,[2, [3, [4]]]]
// const newItems = _.flattenDeep(items);
// console.log(newItems)
// console.log('hello world')

const { readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data ) => {
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

const start = async() => {
    try{
        // const first = await readFilePromise('./content/first.txt', 'utf8')
        // const second = await readFilePromise('./content/second.txt', 'utf8')
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        // await writeFilePromise('./content/result-mind-grenade.txt', 
        //     `This IS Awesome : ${first} ${second}`)
            await writeFile('./content/result-mind-grenade.txt', 
            `This IS Awesome : ${first} ${second}`, {flag: 'a'})
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
