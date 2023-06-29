const Task = require('../models/taskModel')


module.exports = {
    async teste(request, response) {
        try {
            return response.status(200).json('Deu certo.')
        } catch (error) {
            response.status(400).send(error)
        }
    },
    async adicionarTarefa(request, response) {
        try {
            const descricaoTarefa = request.body.descricao
            console.log(request)

            const idRegistro = request.body.id

            if (!descricaoTarefa) {
                response.status(400).json('É necessário informar a descrição da tarefa.')
            } else {
                const ultimoRegistro = await Task.findOne({
                    attributes: ['id'],
                    order: [['createdAt', 'DESC']],
                    limit: 1
                })
                Task.create({
                    id: idRegistro,
                    descricao: descricaoTarefa
                });

                return response.status(200).json('Tarefa registrada.')
            }
        } catch (error) {
            response.status(400).send(error)
        }
    },
    async removerTarefa(request, response) {
        try {
            const idTarefa = request.params.id

            Task.deleteOne({
                id: idTarefa
            }).then(()=> {
                        response.status(200).json('Tarefa excluída com sucesso');
                })
                .catch(err => {
                    response.status(400).json('Erro ao excluir a tarefa:', err);
                });

        } catch (error) {
            response.status(400).send(error)
        }
    },
    async listarTarefas(request, response) {
        try {
            const tarefas = await Task.find({})
            if (!tarefas) {
                response.status(400).json('Nenhuma tarefa foi cadastrada.');
            }
            response.status(200).json(tarefas);
        } catch (error) {
            response.status(400).send(error)
        }
    }
}