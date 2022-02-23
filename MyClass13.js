const http = require('http').Server;
const util = require('util');
const fs = require('fs');
const readFilePromise = util.promisify(fs.readFile)

class MyClass13 extends http{
    constructor(){
        super()
        this.on('request',this.PortListenHandler)
        this.listen(8000)
    }
    PortListenHandler = (request,response)=>{
        readFilePromise('./Kanye.txt')
        .then((data)=> response.end(data))
        .catch((err)=> {throw err})
    }

}

module.exports = new MyClass13();