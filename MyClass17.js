const http = require('http').Server;
const util = require('util');
const fs = require('fs');
const readFilePromise = util.promisify(fs.readFile)

class MyClass17 extends http{
    constructor(){
        super()
        this.on('request',this.PortListenHandler)
        this.listen(9000)
    }
    PortListenHandler = (request,response)=>{
        readFilePromise('./someObject.json')
        .then((data)=> response.end(data))
        .catch((err)=>{throw err})
    }

}
module.exports = new MyClass17();