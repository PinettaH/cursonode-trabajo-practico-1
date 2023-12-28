import Joi from "joi";

export function validateCursoBody(req, res, next) {
    const { body } = req
    const schema = Joi.object({
        titulo: Joi.string().required(),
        descripcion: Joi.string().required(),
        instructor: Joi.string().required(),
        duracion_horas: Joi.number().required(),
        fecha_inicio: Joi.date().iso().required(),
        precio: Joi.number().required(),
        disponible: Joi.string().required(),
        instituto: Joi.string().required(),
        latitud: Joi.number().required(),
        longitud: Joi.number().required(),
    })
    const { error, value } = schema.validate(body)
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        })
    }
    next()
}

export function validateUpdateCursoBody(req, res, next) {
    const { body } = req
    const schema = Joi.object({
        titulo: Joi.string(),
        descripcion: Joi.string(),
        instructor: Joi.string(),
        duracion_horas: Joi.number(),
        fecha_inicio: Joi.date().iso(),
        precio: Joi.number(),
        disponible: Joi.string(),
        instituto: Joi.string(),
        latitud: Joi.number(),
        longitud: Joi.number(),
    })
    const { error, value } = schema.validate(body)
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        })
    }
    next()
}