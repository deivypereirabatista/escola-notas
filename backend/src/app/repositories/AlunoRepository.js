import { consulta } from "../database/conexao.js";

class AlunoRepository{

    create(aluno){
        const sql = 'INSERT INTO alunos SET ?'
        return consulta(sql, aluno, 'Não foi possível cadastrar')
    } 

    findAll(){
        const sql = 'SELECT * FROM alunos'
        return consulta(sql, 'Não foi possível buscar')
    }

    findById(id){
        const sql = 'SELECT * FROM alunos WHERE id=?'
        return consulta(sql, id, 'Não foi possível encontrar')
    }

    update(aluno, id){
        const sql = 'UPDATE alunos SET ? WHERE id=?'
        return consulta(sql, [aluno, id], 'Não foi possível atualizar')
    }

    delete(id){
        const sql = 'DELETE FROM alunos WHERE id=?'
        return consulta(sql, id, 'Não foi possível deletar')
    }

}

export default new AlunoRepository()