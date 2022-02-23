const http = require('http').Server;
const fs = require('fs');
const { STATUS_CODES } = require('http');

class MyClass22 extends http{
    constructor(){
        super()
        this.on('request',this.PortListenHandler)
        this.listen(7000)
    }
    PortListenHandler(request,response){
        const source = fs.createReadStream('./managerObject.json')
        source.pipe(response)//.on(pipe(statusbar( 201)))
        
    }
}

module.exports = new MyClass22();