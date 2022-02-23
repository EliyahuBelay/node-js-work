const http = require('http').Server;
const util = require('util');
const fs = require('fs');
const readFilePromise = util.promisify(fs.readFile)

class MyClass15 extends http{
    constructor(){
        super()
        this.on('request',this.PortListenHandler)
        this.listen(8080)
    }
    PortListenHandler = (request,response)=>{
        readFilePromise('./City.txt')
        .then((data)=> response.end(data))
        .catch((err)=> {throw err})
    }

}

module.exports = new MyClass15();