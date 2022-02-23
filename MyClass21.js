const http = require('http').Server;
const fs = require('fs');

class MyClass21 extends http{
    constructor(){
        super()
        this.on('request',this.PortListenHandler)
        this.listen(4002)
    }
    PortListenHandler(request,response){
        const source = fs.createReadStream('./userObjects.json')
        source.pipe(response);
    }
}

module.exports = new MyClass21();