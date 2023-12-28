import mongoose, { Schema } from 'mongoose';

const CursoSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    duracion_horas: {
        type: Number,
        required: true
    },
    fecha_inicio: {
        type: Date,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    disponible: {
        type: String,
        required: true
    },
    instituto: {
        type: String,
        required: true
    },
    latitud: {
        type: Number,
        required: true
    },
    longitud: {
        type: Number,
        required: true
    }
});



CursoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

export const Curso = mongoose.model('Curso', CursoSchema)