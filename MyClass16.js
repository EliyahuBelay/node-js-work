const http = require('http').Server;
const util = require('util');
const fs = require('fs');
const readFilePromise = util.promisify(fs.readFile)

class MyClass16 extends http{
    constructor(){
        super()
        this.on('request',this.PortListenHandler)
        this.listen(9090)
    }
    
    PortListenHandler = (request,response)=>{
        readFilePromise('./myJson.json')
        .then((data)=> response.end(data.toString()))
        .catch((err)=> {throw err})
    }

}

module.exports = new MyClass16();