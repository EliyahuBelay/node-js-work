const http = require('http').Server;
const fs = require('fs');


class MyClass20 extends http {
    constructor() {
        super()
        this.on('request', this.PortListenHandler)
        this.listen(3002)
    }
    PortListenHandler = (request, response) => {
        const source = fs.createReadStream('./someAnotherObj.json');
        source.pipe(response);

    }

}
module.exports = new MyClass20();