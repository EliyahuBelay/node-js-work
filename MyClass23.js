const http = require('http').Server;
const fs = require('fs');

class MyClass23 extends http{
    constructor(){
        super()
        this.on('request',this.PortListenHandler)
        this.listen(7003)
    }
    PortListenHandler(request,response){
        const source = fs.createReadStream('./managersObj.json')
        source.pipe(response)//.on(pipe(statusbar( 201)))
        
    }
}

module.exports = new MyClass23();