import http from "node:http"

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === "GET" && url === "/users") {
        return res.setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (method === "POST" && url === "/users") {
        users.push({
            id: 1,
            name: 'jhon doe',
            email: 'jhondoe@rocketseat.com'
        })

        return res.end('Criacao de usuario')
    }

    return res.end('Hello World')

})

server.listen(3333)