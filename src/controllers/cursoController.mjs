// Importa el archivo JSON con una afirmación de tipo "json"
import * as cursoData from '../data/curso.json' assert { type: 'json'};;
import { createCurso, deleteCursoById, getCursoById, getCursos, updateCursoById } from '../services/cursoService.js'
import { mongoose } from 'mongoose';
export async function getCursosController(req, res, next) {
    try {
        const titulo = req.query.titulo;
        const filter = titulo ? { titulo } : {}
        const cursos = await getCursos(filter);
        return res.status(200).json(cursos);
    } catch (error) {
        next(error)
    }
}

export const getCursoByIdController = async (req, res, next) => {
    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: 'Curso no encontrado' });
        }
        console.log(id);
        const curso = await getCursoById(id)
        res.json(curso)
    } catch (error) {
        next(error)
    }


}

export const deleteCursoByIdController = async (req, res) => {
    const id = req.params.id
    try {
        const cursoEliminado = await deleteCursoById(id);
        res.json({ message: 'Curso eliminado', curso: cursoEliminado })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export async function patchCursoController(req, res, next) {
    const id = req.params.id;
    const data = req.body;

    try {
        const cursoActualizado = await updateCursoById(id, data);
        res.json({ message: 'Curso actualizado', curso: cursoActualizado });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const postCurso = async (req, res, next) => {
    console.log("Solicitud en /curso/.post");
    try {
        const { titulo, descripcion, instructor, duracion_horas, fecha_inicio, precio, disponible, instituto, latitud, longitud } = req.body;
        const cursoData = { titulo, descripcion, instructor, duracion_horas, fecha_inicio, precio, disponible, instituto, latitud, longitud }
        const response = await createCurso(cursoData)
        console.log(response)
        return res.status(200).json(response)
    } catch (error) {
        next(error)
    }

}
