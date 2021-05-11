
const express = require('express');

const { 
    getUsuario, 
    getUsuarios, 
    postUsuario, 
    updateUsuario, 
    deletteUsuario 
} = require('../controllers/usuarios');

const router = express.Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', updateUsuario);
router.delete('/:id', deletteUsuario);

module.exports = router;