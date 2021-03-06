const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index (req, res) {
        const banners = await connection('website_banner').select('*');
    
        return res.json( { banners });
    },

    async create(req, res) {
        const { nome, email, whatsapp, city, uf } = req.body;
        const id = generateUniqueId();
    
        await connection('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            city,
            uf,
        });

        return res.json( { id });
    }
};