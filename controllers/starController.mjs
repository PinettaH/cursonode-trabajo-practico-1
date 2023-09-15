// Importa el archivo JSON con una afirmación de tipo "json"
import * as starData from '../data/star.json' assert { type: 'json' };;
import Joi from 'joi';

export const getStars = async (req, res) => {
    console.log('Solicitud getStars');
    console.log(starData["default"])
    const name = req.query.name
    if (!name) {
        // Si no se proporciona un nombre, devolver todas las estrellas.
        res.status(200).json(starData);
    } else {
        // Filtrar las estrellas por nombre.
        const filteredStars = starData["default"].filter(star => star.name === name);

        if (filteredStars.length === 0) {
            // Si no se encontraron estrellas con el nombre proporcionado, devolver un 404.
            res.status(404).json({ error: 'No se encontraron estrellas con ese nombre.' });
        } else {
            // Si se encontraron estrellas, devolverlas.
            res.status(200).json(filteredStars);
        }
    }

}

export const getStarById = async (req, res) => {
    const idStar = parseInt(req.params.id)
    if (isNaN(idStar)) {
        res.status(404).json({
            message: 'El id debe ser un numero valido'
        })
    }
    const star = starData["default"].find((s) => s.id === idStar)
    if (star) {
        res.json(star)
    } else {
        res.status(404).json({
            message: 'Estrella no encontrada'
        })
    }

}

//Esquema JOI para futuras validaciones de carga de estrellas
const starSchema = Joi.object({
    //Joi.string().required()
    //Joi.number().required()
    "id": Joi.number().required(),
    "name": Joi.string().required(),
    "type": Joi.string().required(),
    "distancia": Joi.string().required(),
    "mass": Joi.string().required(),
    "radius": Joi.string().required(),
    "temperature": Joi.string().required(),
    "luminosity": Joi.string().required(),
    "age": Joi.string().required(),
    "composition": {
        "hydrogen": Joi.string().required(),
        "helium": Joi.string().required(),
        "otros_elementos": Joi.string().required()
    },
    "stellar_history": Joi.string().required()
})

export const postStart = async (req, res) => {
    console.log(req.body);
    const { error } = starSchema.validate(req.body)

    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    } else {
        const newStar = {
            "id": req.body.id,
            "name": req.body.name,
            "type": req.body.type,
            "distancia": req.body.distancia,
            "mass": req.body.mass,
            "radius": req.body.radius,
            "temperature": req.body.temperature,
            "luminosity": req.body.luminosity,
            "age": req.body.age,
            "composition": {
                "hydrogen": req.body.composition.hydrogen,
                "helium": req.body.composition.helium,
                "otros_elementos": req.body.composition.otros_elementos
            },
            "stellar_history": req.body.stellar_history
        }

        res.status(201).json({
            message: 'Estrella creada perfectamente',
            nuevaEstrella: newStar
        })
    }

}