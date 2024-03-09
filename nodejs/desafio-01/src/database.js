export class Database {
    database = {}

    select(tables) {
        const data = this.database[table] ?? []

        return data
    }

    insert(table, data) {
        if (Array.isArray(this.database[table])) {
            this.database[table]
        }
    }
}