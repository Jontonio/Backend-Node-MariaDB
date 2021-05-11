const { DataTypes } = require('sequelize');
const db = require('../db/conexion');
// definimos los usuarios al igual que la base de datos / el modelo debe ser en singular que en la base de datos
const Usuario = db.define('usuario', {
    
    nombre: { 
        type: DataTypes.STRING 
    },
    email: { 
        type: DataTypes.STRING 
    },
    estado: { 
        type: DataTypes.BOOLEAN 
    }
    
});

module.exports = { Usuario };