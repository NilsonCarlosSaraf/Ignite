//const http = require('http') padrao de importacao CommonJS => utiliza o require(padrao mais antigo e pouco utilizado)
import http from 'node:http' //importacao atraves de ESMODULES


// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informacao unica/especifica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

// Cabecalhos (Requisicao/resposta) => Metadados / da informacoes de como o dado pode/deve ser interpretado pelo front end

const users = []

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    const buffers = []

    for await (const chunk of req) {
        buffers.push(chunk)
    }

    try {
        req.body = JSON.parse(Buffer.concat(buffers).toString()) //JSON.parse() tranforma a requisicao em um objeto
    } catch {
        req.body = null
    }

    if (method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        const { name, email } = req.body

        users.push({
            id: 1,
            name,
            email,
        })

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()
})

server.listen(3333)
