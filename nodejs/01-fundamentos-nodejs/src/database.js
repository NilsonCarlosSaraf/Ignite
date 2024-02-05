import fs from 'node:fs/promises'

export class Database {
    #database = {} //#database se inserio o # antes do database(vai precisar isnerir em todos os databases desse arquivo) o database se tornara uma propriedade privada, nao podendo ser acessado em outros arquivos

    select(table) {
        const data = this.#database[table] ?? []

        return data
    }

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        return data;
    }
}