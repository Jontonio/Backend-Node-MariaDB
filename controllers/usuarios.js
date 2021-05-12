const { Response, Request }  = require('express');
const { Usuario } = require('../models/usuario');

const getUsuarios = async (req = Request, res = Response) => {

    const usuarios = await Usuario.findAll();

    res.json(usuarios);
};

const getUsuario = async (req =  Request, res = Response) => {

    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if(usuario){
        res.json(usuario);
    } else {
        res.status(404).json({ msg:`el usuario con id: ${id} no existe`});
    }


};

const postUsuario = async (req =  Request, res = Response) => {

    const { body } = req;

    try {
        
        const emailExist = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if(emailExist){
            return res.status(400).json({
                msg:`el usuario con el email ${body.email} ya existe `
            });
        }

        const usuario = new Usuario(body);
        await usuario.save();
        res.json(usuario);
    
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg:'Hable con el admistrador' });
    }
};


const updateUsuario = async (req =  Request, res = Response) => {

    const { body } = req;
    const { id } = req.params;

    try {
        
        const usuario = await Usuario.findByPk(id);

        if(!usuario){
            return res.status(400).json({
                msg:`el usuario con id ${id} no existe `
            });
        }
        // actualizar el usuario se actualizará 
        (await usuario).update(body);
        res.json({ usuario });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg:'Hable con el admistrador' });
    }
};

const deletteUsuario = async (req =  Request, res = Response) => {

    const { id } = req.params;

    try {
        
        const usuario = await Usuario.findByPk(id);

        if(!usuario){
            return res.status(400).json({
                msg:`el usuario con id ${id} no existe `
            });
        }
        // actualizar el usuario se actualizará 
        (await usuario).destroy(); // esto elimina la usuario de la DB
        // (await usuario).update({estado:false}); 
        res.json({ usuario });
    
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg:'Hable con el admistrador' });
    }


};


module.exports = {
    getUsuario,
    getUsuarios,
    postUsuario,
    updateUsuario,
    deletteUsuario
};