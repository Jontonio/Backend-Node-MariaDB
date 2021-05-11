const express = require('express');
const cors = require('cors');

const db = require('../db/conexion');

class Server {

    constructor(){
        this.app = express();
        this.PORT = process.env.PORT || '8088';
        this.dbConexion();
        this.middlewares();
        this.routes();
    }

    async dbConexion(){
        try {

            await db.authenticate();
            console.log('base de datos online');
            
        } catch (error) {
            throw new Error(error);
        }   
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.static('public') );
        this.app.use( express.json() );
    }

    routes(){
       this.app.use ('/usuarios', require('../routes/routes') );
    }

    listen(){
        this.app.listen(this.PORT, () => {
            console.log(`Server is online on PORT → ${this.PORT}`);
        });
    }

}

module.exports = { Server };