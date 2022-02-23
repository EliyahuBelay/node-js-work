const http = require('http').Server;
const util = require('util');
const fs = require('fs');
const readFilePromise = util.promisify(fs.readFile)

class MyClass18 extends http{
    constructor(){
        super()
        this.on('request',this.PortListenHandler)
        this.listen(2020)
    }
    PortListenHandler = (request,response)=>{
        readFilePromise('./someAnotherObject.json')
        .then((data)=> response.end(data))
        .catch((err)=>{throw err})
    }

}
module.exports = new MyClass18();