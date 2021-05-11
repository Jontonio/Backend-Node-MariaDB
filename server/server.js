const express = require('express');


class Server {

    constructor(){
        this.app = express();
        this.PORT = process.env.PORT || 3000;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use( express.json() );
    }

    routes(){
       this.app.use ('/api', require('../routes/routes') );
    }

    listen(){
        this.app.listen(this.PORT, () => {
            console.log(`Server is online on PORT → ${this.PORT}`);
        });
    }

}

module.exports = { Server };