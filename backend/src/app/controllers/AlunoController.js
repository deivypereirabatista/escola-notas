import AlunoRepository from "../repositories/AlunoRepository.js";

class AlunoController {

    async store(req, res) {
        const aluno =req.body
        const row = await AlunoRepository.create(aluno)
        res.json(row)
    }

    async index(req, res) {
        const row = await AlunoRepository.findAll()
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await AlunoRepository.findById(id)
        res.json(row)
    }

    async update(req, res) {
        const id = req.params.id
        const aluno = req.body
        const row = await AlunoRepository.update(aluno, id)
        res.json(row)
    }

    
    async delete(req, res) {
        const id = req.params.id
        const row = await AlunoRepository.delete(id)
        res.json(row)
    }
}




export default new AlunoController()


//criar = store
//listar tudo = index
//listar por id = show 
//atualizar por id = update 
//deletar = delete