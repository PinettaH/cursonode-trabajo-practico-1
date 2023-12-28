import { Curso } from "../models/Curso.js";

export async function getCursos(filter) {
    const cursos = await Curso.find(filter);
    return cursos.map(curso => {
        return curso
    })
}

export async function getCursoById(id) {
    const curso = await Curso.findById(id);
    return curso ? curso : console.log("404")
}

export async function createCurso(cursoData) {
    try {
        const nuevoCurso = new Curso(cursoData)
        return nuevoCurso.save();
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function updateCursoById(id, data) {
    try {
        const cursoActualizado = await Curso.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true
        });

        return cursoActualizado;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function deleteCursoById(id) {
    try {
        const cursoEliminado = await Curso.findByIdAndDelete(id);
        return cursoEliminado;
    } catch (error) {
        console.log(error)
        throw error
    }
}