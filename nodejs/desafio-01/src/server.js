import http from 'node:http'

const tasks = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/tasks') {
        return res.setHeader('Content-type', 'application/json')
            .end(JSON.stringify(tasks))
    }

    if (method === 'POST' && url === '/tasks') {
        tasks.push({
            id: 1,
            title: 'Lavar louca',
            description: 'lavar a louca...',
            completed_at: new Date(),
            updated_at: new Date()
        })

        return res.end('Tarefa criada com sucesso')
    }

    if (method === 'PUT' && url === '/tasks:id') {
        return res.end('Tarefa atualizada com sucesso')
    }

    if (method === 'DELETE' && url === '/tasks:id') {
        return res.end('Tarefa deletada')
    }

    if (method === 'PATCH' && url === '/tasks/:id/complete') {

        return res.end('Campo da tarefa atualizado com sucesso')
    }
    return res.end('Hellow')

})

server.listen(3333)